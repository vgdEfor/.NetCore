using es.efor.Auth.Attributes;
using es.efor.Auth.Constants.Claims;
using es.efor.Utilities.General;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using System.Reflection;
using es.efor.Auth.Extensions;
using es.efor.PryBase.Data.Context;
using es.efor.Auth.Models.Configs;
using es.efor.PryBase.Data.Database;
using System;
using es.efor.Auth.Managers;
using System.Security.Claims;
using System.Collections.Generic;

namespace es.efor.PryBase.Auth.Extensions
{
    public static class IServiceCollectionExtensions
    {
        private const string JwtSecret = "56gZKs#Xg6?4J_r!#_kvLKVCGt-ccGHv+Qt6IwJjIVYm4MB8c#7W*1+TnYp96xhwI!C_.MQtBMKlqQDG?fj39Z15p.+97RQGXR?aI+FsVnhrbD7Biaw5Gz4w";
        private static readonly string JwtIssuer = typeof(IServiceCollectionExtensions).Namespace;

        public static IServiceCollection AddProjectAuth(this IServiceCollection services)
        {
            var projectPolicies = Authorization.Policies.AppIdentityPolicies.GetAllPolicyClaims()
                    .SelectMany(d => d.Value).ToList();
            var policyAndClaims = projectPolicies
                .Select(p => new { p.Policy, p.Claims })
                .ToDictionary(p => p.Policy, p => p.Claims);
            var policyMenuSections = EnumHelper.GetEnumValues<Authorization.Policies.Menu.PolicyMenu>()
                .Select(m => m.ToString());
            //// Without ASPNETCore Identity.
            //// Cookies only.
            //services.AddEforSimpleAuthentication(new IdentityConfiguration()
            //    .UseCookies());

            // Without ASPNETCore Identity.
            // Bearer JWT only.
            services.AddEforSimpleAuthentication(
                new IdentityConfiguration()
                    .UseJsonWebTokens(JwtSecret, JwtIssuer),
                policyAndClaims: policyAndClaims,
                policyMenuSections: policyMenuSections);

            // Without ASPNETCore Identity.
            // Bearer JWT and Cookies. Bearer JWT is the default one.
            //services.AddEforSimpleAuthentication(new IdentityConfiguration()
            //    .UseCookies()
            //    .UseJsonWebTokens(JwtSecret, JwtIssuer),
            //    "Bearer", "Bearer");

            // // With ASPNETCore Identity.
            // Bearer JWT and Cookies. Bearer JWT is the default one.
            //services.AddEforIdentityAuthentication<
            //    NexusContext, Guid, User, Role,
            //    IdentitySignInManager<Guid, User>,
            //    IdentityUserManager<Guid, User>,
            //    IdentityRoleManager<Guid, Role>>
            //    (new IdentityConfiguration()
            //        // Using both Cookies and JWT is possible, but "Authorize" attribute
            //        // will be required in the methods/controllers where user data is required.
            //        // If using both and also using [Authorize], be sure to specify
            //        .UseCookies() // This configures Identity to use Cookie authentication
            //        .UseJsonWebTokens(JwtSecret, JwtIssuer), // This configures Identity to use Json Web Token authentication (Bearer)
            //        "Bearer", "Bearer");

            //services.AddProjectAuthorizationPolicies();
            return services;
        }
    }
}
