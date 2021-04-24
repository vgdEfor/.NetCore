using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using es.efor.OnBoarding.Business.Services.UserServices;
using es.efor.OnBoarding.Business.Services.RoleServices;
using es.efor.OnBoarding.Data.OnboardingEjercicioContext;

namespace es.efor.OnBoarding.Business
{
    public static class IServiceOnBoardingExtension
    {
        /// <param name="configuration">Application settings</param>
        /// <returns></returns>
        public static IServiceCollection AddOnBoardingService(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddDbContext<OnboardingEjercicio2Context>(options =>
            {
                string cnnStr = configuration.GetConnectionString("Default");
                options.UseSqlServer(cnnStr);
            });

            // Inyección dependencias SERVICIOS
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IRoleService, RoleService>();

            return services;
        }
    }
}
