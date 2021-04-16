using es.efor.Logging.Serilog.Extensions;
using es.efor.Utilities.General.Tools;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;

namespace es.efor.PryBase.MainGateway
{
    public sealed class Program
    {
        internal static Guid INSTANCE_IDENTIFIER = Guid.Empty;
        internal static string INSTANCE_HOSTNAME = string.Empty;

        public static void Main(string[] args)
        {
            AppUtils.PrintAppAndNetworkInfo();
            CreateHostBuilder(args).Build().Run();
        }

        private static IHostBuilder CreateHostBuilder(string[] args)
        {
            INSTANCE_IDENTIFIER = Guid.NewGuid();
            INSTANCE_HOSTNAME = NetworkInterfaceUtils.GetNetworkInformation(null, null).HostName;

            return Host.CreateDefaultBuilder(args)
                    .UseEforSerilog<Program>(DateTimeOffset.UtcNow, INSTANCE_IDENTIFIER.ToString(), INSTANCE_HOSTNAME)
                    .ConfigureWebHostDefaults(webBuilder =>
                    {
                        webBuilder
                        .UseStartup<Startup>();
                    });
        }
    }
}
