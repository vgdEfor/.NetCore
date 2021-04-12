using es.efor.Auth._Internal.Setups;
using es.efor.Auth.Controllers;
using es.efor.Auth.Managers;
using es.efor.Auth.Middlewares;
using es.efor.Auth.Models.Entities;
using Microsoft.AspNetCore.Builder;
using System;

namespace es.efor.Auth.Extensions
{
    public static class IApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseEforSimpleAuthentication
            <TAccountController, TAccessController>
            (this IApplicationBuilder app)
            where TAccountController : AccountSimpleController
            where TAccessController : AccessController
        {
            // 1 - Identity the client's session
            app.UseAuthentication();
            // 2 - Client related authorization
            app.UseAuthorization();

            return app;
        }
        public static IApplicationBuilder UseEforIdentityAuthentication<
            // Basic models
            TKey, TUser, TRole,
            // Managers
            TSignInManager, TUserManager,
            // Controllers
            TAccountController, TAccessController>(this IApplicationBuilder app)
            where TKey : IEquatable<TKey>
            where TUser : User<TKey>
            where TSignInManager : IdentitySignInManager<TKey, TUser>
            where TUserManager : IdentityUserManager<TKey, TUser>
            where TRole : Role<TKey>, new()
            where TAccountController : AccountIdentityController<TUser, TKey>
            where TAccessController : AccessController
        {
            if (LibrarySetup.AuthenticationSetup == LibrarySetup.AuthenticationSetupType.SimpleJwtAuthentication)
            {
                throw new InvalidOperationException($"{nameof(UseEforIdentityAuthentication)} is not compatible with service extension {nameof(IServiceCollectionExtensions.AddEforSimpleAuthentication)}.{Environment.NewLine}" +
                    $"You may want to use {nameof(UseEforSimpleAuthentication)} instead.");
            }
            else if (LibrarySetup.AuthenticationSetup == LibrarySetup.AuthenticationSetupType.NoSetup)
            {
                Console.WriteLine($"Warning: Service extension [{nameof(IServiceCollectionExtensions.AddEforSimpleAuthentication)}] has not been called.");
            }

            // 1 - Identity the client's session
            app.UseAuthentication();
            // 2 - User-refreshing related middleware
            //     Client needs to be identified as user or anonymous
            app.UseMiddleware<ClaimRefreshMiddleware<TKey, TUser, TSignInManager, TUserManager, TRole>>();
            // 3 - Client related authorization
            app.UseAuthorization();

            return app;
        }
    }
}
