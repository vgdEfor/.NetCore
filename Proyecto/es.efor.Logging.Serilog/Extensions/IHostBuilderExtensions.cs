using es.efor.Logging.Serilog.Constants;
using Microsoft.Extensions.DependencyModel;
using Microsoft.Extensions.Hosting;
using Serilog;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace es.efor.Logging.Serilog.Extensions
{
    public static class IHostBuilderExtensions
    {
        /// <inheritdoc cref="UseEforSerilog(IHostBuilder, Assembly, DateTimeOffset, string, string)"/>
        /// <typeparam name="TProgram">Clase de "Program" o "Startup" que ejecuta la aplicación.</typeparam>
        /// <param name="hostBuilder"></param>
        /// <param name="appInstanceId"></param>
        /// <param name="hostName"></param>
        /// <returns></returns>
        public static IHostBuilder UseEforSerilog<TProgram>(
            this IHostBuilder hostBuilder,
            DateTimeOffset appStartDatetime,
            string appInstanceId,
            string hostName)
        {
            Console.WriteLine("Don't forget to include UseEforSerilog on Startup.cs!");
            var mainAppAssembly = typeof(TProgram).Assembly;
            return hostBuilder.UseEforSerilog(mainAppAssembly,
                appStartDatetime: appStartDatetime, appInstanceId: appInstanceId, hostName: hostName);
        }

        /// <summary>
        /// Implementa el módulo de Serilog para registro de datos y peticiones.
        /// </summary>
        /// <param name="mainAppAssembly">Ensamblado que ejecuta la aplicación</param>
        /// <param name="appStartDatetime">Fecha y hora en la cual se ha iniciado la instancia de la aplicación</param>
        /// <param name="appInstanceId">Instancia única de la aplicación, que ha de cambiar en cada ejecución de la aplicación</param>
        /// <param name="hostName">Nombre del anfitrión que ejecuta la instancia de la aplicación</param>
        /// <returns></returns>
        public static IHostBuilder UseEforSerilog(
            this IHostBuilder hostBuilder,
            Assembly mainAppAssembly,
            DateTimeOffset appStartDatetime,
            string appInstanceId,
            string hostName)
        {
            if (mainAppAssembly == null) throw new ArgumentNullException($"[{nameof(mainAppAssembly)}] must be specified");
            if (string.IsNullOrWhiteSpace(appInstanceId)) throw new ArgumentNullException($"[{nameof(appInstanceId)}] cannot be left null nor empty.");
            if (string.IsNullOrWhiteSpace(hostName)) throw new ArgumentNullException($"[{nameof(hostName)}] cannot be left null nor empty.");

            var assemblyName = mainAppAssembly.GetName();
            return hostBuilder.UseEforSerilog(
                (EnrichProperties.SERILOG_ENRICH_PROP_APPVERSION, assemblyName.Version.ToString()),
                (EnrichProperties.SERILOG_ENRICH_PROP_APPNAME, assemblyName.Name),
                (EnrichProperties.SERILOG_ENRICH_PROP_APPINSTANCEID, appInstanceId),
                (EnrichProperties.SERILOG_ENRICH_PROP_HOSTNAME, hostName),
                (EnrichProperties.SERILOG_ENRICH_PROP_APPINSTANCEDATETIME, appStartDatetime));
        }

        /// <summary>
        /// Implementa el módulo de Serilog para registro de datos y peticiones.
        /// </summary>
        /// <param name="hostBuilder"></param>
        /// <param name="extraProperties"></param>
        /// <returns></returns>
        public static IHostBuilder UseEforSerilog(
            this IHostBuilder hostBuilder,
            params (string propertyName, object propertyValue)[] extraProperties)
        {
            hostBuilder.UseSerilog((context, services, loggerConfiguration) =>
            {
                loggerConfiguration
                    .ReadFrom.Configuration(context.Configuration);
                foreach (var ep in extraProperties)
                {
                    loggerConfiguration.Enrich.WithProperty(ep.propertyName, ep.propertyValue);
                }
            });
            return hostBuilder;
        }
    }
}
