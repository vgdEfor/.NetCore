using es.efor.Logging.Serilog.Constants;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Controllers;
using Serilog;
using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using System.Collections.Generic;
using System.Diagnostics;

namespace es.efor.Logging.Serilog.Middleware
{
    public class BodyLoggerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IDiagnosticContext _serilogContext;

        public BodyLoggerMiddleware(RequestDelegate next, IDiagnosticContext serilogContext)
        {
            _next = next;
            _serilogContext = serilogContext;
        }
        public async Task Invoke(HttpContext context)
        {
            await LogRequestQueryParams(context).ConfigureAwait(false);
            await LogRequestBody(context).ConfigureAwait(false);
            await LogResponseBody(context).ConfigureAwait(false);
        }

        private async Task LogRequestQueryParams(HttpContext context)
        {
            var request = context.Request;
            if (request.QueryString.HasValue)
            {
                _serilogContext.Set(EnrichProperties.SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_REQUEST_QUERY, request.QueryString.Value);
            }
            await Task.CompletedTask;
        }
        private async Task LogRequestBody(HttpContext context)
        {
            var request = context.Request;
            var requestBody = await GetRequestBodyAsString(request).ConfigureAwait(false);
            if (!string.IsNullOrWhiteSpace(requestBody))
            {
                _serilogContext.Set(EnrichProperties.SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_REQUEST_BODY, requestBody);
            }
        }
        private async Task LogResponseBody(HttpContext context)
        {
            var consoleMessages = new List<(string message, double ellapsedTime)>();
            var watch = new Stopwatch();
            watch.Start();

            var response = context.Response;
            Stream originalBody = response.Body;

            try
            {
                using (var memStream = new MemoryStream())
                {
                    response.Body = memStream;

                    try
                    {
                        consoleMessages.Add(($"Middlware Ellapsed [{context.Request.Path}] BEFORE NEXT: {{0}}", watch.Elapsed.TotalMilliseconds));
                        await _next(context);
                        consoleMessages.Add(($"Middlware Ellapsed [{context.Request.Path}] AFTER NEXT: {{0}}", watch.Elapsed.TotalMilliseconds));
                    }
                    catch (Exception pipelineException)
                    {
                        _serilogContext.Set(EnrichProperties.SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_RESPONSE_EXCEPTION_FLOW, true);
                        throw pipelineException;
                    }

                    if (response.ContentLength.HasValue && response.ContentLength.Value > 0)
                    {
                        var action = context.GetEndpoint()?.Metadata?.GetMetadata<ControllerActionDescriptor>();
                        // Si "action" es null, no es una ruta de Controller/Action.
                        // Con esto podemos buscar si los parámetros de entrada tienen algun attributo del tipo que queramos.
                        // Ej.: "PersonalInfo" y con eso sustituirlo por un valor de "******" a la hora de hacer e log
                        //var test = action?.Parameters.Where(p => p.ParameterType.GetCustomAttributes<>());
                        memStream.Position = 0;
                        string responseBody = new StreamReader(memStream).ReadToEnd();
                        if (!string.IsNullOrWhiteSpace(responseBody))
                        {
                            _serilogContext.Set(EnrichProperties.SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_RESPONSE_BODY, responseBody);
                        }
                    }

                    memStream.Position = 0;
                    consoleMessages.Add(($"Middlware Ellapsed [{context.Request.Path}] BEGIN COPY: {{0}}", watch.Elapsed.TotalMilliseconds));
                    await memStream.CopyToAsync(originalBody);
                    consoleMessages.Add(($"Middlware Ellapsed [{context.Request.Path}] END COPY: {{0}}", watch.Elapsed.TotalMilliseconds));
                }
            }
            finally
            {
                response.Body = originalBody;
                watch.Stop();
                consoleMessages.Add(($"Middlware Ellapsed [{context.Request.Path}] TOTAL: {{0}}", watch.Elapsed.TotalMilliseconds));
                await LogToConsole(consoleMessages);
            }
        }



        private async Task<string> GetRequestBodyAsString(HttpRequest request)
        {
            request.EnableBuffering();

            var body = request.Body;
            var buffer = new byte[Convert.ToInt32(request.ContentLength)];
            await request.Body.ReadAsync(buffer, 0, buffer.Length);
            string requestBody = Encoding.UTF8.GetString(buffer);
            body.Seek(0, SeekOrigin.Begin);
            request.Body = body;

            return requestBody;
        }




        private Task LogToConsole(IEnumerable<(string message, double ellapsed)> ps)
        {
            return Task.Run(() =>
            {
                try
                {
                    foreach (var m in ps)
                    {
                        Console.WriteLine(m.message, Convert.ToInt32(Math.Floor(m.ellapsed)));
                    }
                }
                catch (Exception)
                {
                }
            });
        }
    }
}
