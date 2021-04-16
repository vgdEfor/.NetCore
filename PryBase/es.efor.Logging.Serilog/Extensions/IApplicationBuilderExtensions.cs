using Microsoft.AspNetCore.Builder;
using Serilog;
using es.efor.Logging.Serilog.Middleware;

namespace es.efor.Logging.Serilog.Extensions
{
    public static class IApplicationBuilderExtensions
    {
        /// <summary>
        /// This extension should be called first on the middleware pipe.
        /// </summary>
        public static IApplicationBuilder UseEforSerilog(this IApplicationBuilder app)
        {
            app.UseSerilogRequestLogging();
            app.UseMiddleware<BodyLoggerMiddleware>();

            return app;
        }
    }
}
