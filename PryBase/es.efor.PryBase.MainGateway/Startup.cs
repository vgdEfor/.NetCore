using AutoMapper;
using es.efor.PryBase.Imports.Model.Services;
using es.efor.PryBase.Users.Model;
using es.efor.Utilities.Web;
using es.efor.Utilities.Swagger.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using es.efor.PryBase.Data.Context;
using es.efor.Utilities.Database.Enums;
using es.efor.Utilities.Database.Tools;
using Newtonsoft.Json.Converters;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.DataProtection;
using es.efor.Logging.Serilog.Extensions;
using es.efor.Auth.Extensions;
using es.efor.Auth.Models.Configs;
using es.efor.PryBase.Auth.Extensions;
using System.Diagnostics;
using es.efor.Musaat.Address.Business;

namespace es.efor.PryBase.MainGateway
{
    public class Startup
    {
        private readonly IConfiguration Configuration;
        private readonly IWebHostEnvironment CurrentEnvironment;

        public Startup(IConfiguration configuration, IWebHostEnvironment webHostEnvironment)
        {
            Configuration = configuration;
            CurrentEnvironment = webHostEnvironment;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var tStartup = typeof(Startup);

            services.AddHttpContextAccessor();
            
            services.AddEmployeeService(Configuration);

            services.AddProjectAuth();

            // // DataProtection by shared file path
            //string keyFilePath = string.Empty;
            //if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Linux))
            //{
            //    keyFilePath = @"/usr/shared/PryBase-aspnetcore-keys";
            //}
            //else if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows))
            //{
            //    keyFilePath = @"C:\tmp\PryBase-aspnetcore-keys";
            //}
            //services.AddDataProtection()
            //    .PersistKeysToFileSystem(new System.IO.DirectoryInfo(keyFilePath))
            //    .SetApplicationName(tStartup.FullName);

            // DataProtection by shared db context

            /*services.AddDataProtection()
                .PersistKeysToDbContext<PryBaseContext>();*/


            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MapperProfileUsers());
                mc.AddProfile(new MapperProfileImports());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            //services.AddMainGatewayApiRoutes(this.Configuration);
            //services.AddMainGatewayApiServiceRegistration();

            services.Configure<IISServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });

            services.AddControllers()
                .AddNewtonsoftJson(o =>
                {
                    o.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                    o.SerializerSettings.Converters.Add(new StringEnumConverter());
                });

            services.AddEforSwagger<Program>(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, ILogger<Startup> logger)
        {
            var watch = Stopwatch.StartNew();
            logger.LogInformation("Services configured. Starting app...");

            if (CurrentEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            #region Check & Apply database migrations before app start
            var serviceScope = app.ApplicationServices.CreateScope();
            var serviceProvider = serviceScope.ServiceProvider;

            var dbType = Configuration.GetSection("Database").GetValue("DbType", EfDatabaseType.Unknown);
            //EntityFrameworkTools.ApplyMigrations<PryBaseContext>(serviceProvider, dbType)
            //    .ConfigureAwait(false)
            //    .GetAwaiter().GetResult();
            #endregion


            app.Use((context, next) =>
            {
                context.Response.Headers["KUB-H"] = Program.INSTANCE_HOSTNAME;
                try
                {
                    var t = next.Invoke();
                    return t;
                }
                catch (Exception e)
                {
                    throw e;
                }
            });

            app.UseEforSwagger(Configuration);

            app.UseHttpsRedirection();

            app.UseCors();

            var provider = new FileExtensionContentTypeProvider();
            provider.Mappings[".webmanifest"] = "application/manifest+json";
            app.UseDefaultFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                ContentTypeProvider = provider,
            });

            app.UseRouting();

            // Need to log Swagger requests? Move this before UseAppSwagger();
            // Need to log StaticFile requests? Move this before UseDefaultFiles & UseStaticFiles();
            // Need to log ONLY Api Controller & Actions? Move this between UseRouting & UseEndpoints
            app.UseEforSerilog();

            // Without ASP.NETCore Identity
            app.UseEforSimpleAuthentication<Controllers.AccountController, Controllers.AccessController>();

            // With ASP.NETCore Identity
            //app.UseIdentityAuthentication<
            //    Guid, User, Role,
            //    IdentitySignInManager<Guid, User>, IdentityUserManager<Guid, User>,
            //    AccountController, AccessController>();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseEforSitemap();

            app.UseEforAngular();

            watch.Stop();
            logger.LogInformation($"Application started. Ellapsed: [{watch.Elapsed}]");
        }
    }
}