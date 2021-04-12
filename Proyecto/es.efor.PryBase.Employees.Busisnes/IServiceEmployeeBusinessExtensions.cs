
using es.efor.PryBase.Data.Context;
using es.efor.PryBase.Employees.Business.Services.Employees;
using es.efor.PryBase.Employees.Business.Services.Projects;
using es.efor.Utilities.Database.Enums;
using es.efor.Utilities.Database.Tools;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.Musaat.Address.Business
{
    public static class IServiceEmployeeBusinessExtensions
    {
        /// <param name="configuration">Application settings</param>
        /// <param name="migrationAssembly">Assembly name containing the database migrations. If none specified, the Repository assembly will be chosen</param>
        /// <returns></returns>
        public static IServiceCollection AddEmployeeService(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<PryBaseContext>(options =>
            {
                var dbType = configuration.GetSection("Database").GetValue("DbType", EfDatabaseType.Unknown);
                var cnnStr = configuration.GetConnectionString("Default");
                // Name of the assembly of the project where Migrations are stored.
                // It's usually the same of the TContext you're passing at ConfigureConnection<TContext>.
                // If that's the case, you may use "string.Empty" as the assembly's parameter's value.
                string migrationAssembly = "es.efor.PryBase.Data.CodeFirst";
                EntityFrameworkTools.ConfigureConnection<PryBaseContext>(options, dbType, cnnStr, migrationAssembly);
            });

            services.AddScoped<IEmployeesService, EmployeesService>();
            services.AddScoped<IProjectService, ProjectService>();

            return services;
        }

    }
}
