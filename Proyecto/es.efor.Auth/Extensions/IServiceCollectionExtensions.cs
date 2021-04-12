using es.efor.Auth._Internal;
using es.efor.Auth._Internal.Setups;
using es.efor.Auth.Constants.Claims;
using es.efor.Auth.Managers;
using es.efor.Auth.Models.Configs;
using es.efor.Auth.Models.Entities;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace es.efor.Auth.Extensions
{
    public static class IServiceCollectionExtensions
    {
        private const string MENU_POLICY_ENUM_NAME = "PolicyMenu";

        /// <summary>
        /// Configures Microsoft's ASPNetCore's basic services
        /// to support authentication without any store context
        /// such as databases. This method setup is useful when
        /// you want to setup your own stores or don't require them
        /// becasue the authentication is managed by an external
        /// service.
        /// </summary>
        /// <param name="configuration">
        /// The authentication configuration.
        /// Cannot be left null.
        /// </param>
        /// <param name="defaultAuthenticateScheme">
        /// Must be specified **ONLY** when using multiple
        /// authentication setups in <paramref name="configuration"/>.
        /// Must be null if only one setup is being used (instead,
        /// the Schema must be specified in the <paramref name="configuration"/>
        /// </param>
        /// <param name="defaultChallengeScheme">
        /// Must be specified **ONLY** when using multiple
        /// authentication setups in <paramref name="configuration"/>.
        /// Must be null if only one setup is being used (instead,
        /// the Schema must be specified in the <paramref name="configuration"/>
        /// </param>
        public static IServiceCollection AddEforSimpleAuthentication(
            this IServiceCollection services,
            IdentityConfiguration configuration,
            string defaultAuthenticateScheme = null,
            string defaultChallengeScheme = null,
            Dictionary<string, IEnumerable<Claim>> policyAndClaims = null,
            IEnumerable<string> policyMenuSections = null)
        {
            LibrarySetup.AuthenticationSetup = LibrarySetup.AuthenticationSetupType.SimpleJwtAuthentication;
            EnsureIdentityConfiguration(configuration, ref defaultAuthenticateScheme, ref defaultChallengeScheme);

            // If it continues through here and the default schemes are null,
            // the need to be polulated.
            if (string.IsNullOrWhiteSpace(defaultAuthenticateScheme)) defaultAuthenticateScheme = configuration.Cookie?.Scheme ?? configuration.JsonWebToken?.Scheme;
            if (string.IsNullOrWhiteSpace(defaultChallengeScheme)) defaultChallengeScheme = configuration.Cookie?.Scheme ?? configuration.JsonWebToken?.Scheme;

            return AddAndConfigureAuthentication(services, configuration, defaultAuthenticateScheme, defaultChallengeScheme, policyAndClaims, policyMenuSections);
        }

        /// <summary>
        /// ** DON'T FORGET TO MODIFY YOUR CONTEXT:**
        /// <para>1. Set your <typeparamref name="TIdentityContext"/> class as a child of <see cref="IdentityDbContext{TUser, TRole, TKey}"/></para>
        /// <para>2. If you're implementing the context's OnModelCreating by yourself, you ** MUST ** call super.OnModelCreating.</para>
        /// </summary>
        /// <typeparam name="TIdentityContext">The database context to use with Identity. Must inherit <see cref="IdentityDbContext{TUser, TRole, TKey}"/></typeparam>
        /// <typeparam name="TKey">The primary key type for Identity entities (<see cref="IdentityUser{TKey}.Id"/>)</typeparam>
        /// <typeparam name="TUser">The entity that holds the User data. Must inherit from <see cref="IdentityUser{TKey}"/></typeparam>
        /// <typeparam name="TRole">The entity that holds the Role data. Must inherit from <see cref="IdentityRole{TKey}"/></typeparam>
        /// <typeparam name="TSignInManager">The manager that carries the operations regarding the user SignIn. Must inherit from <see cref="SignInManager{TUser}"/></typeparam>
        /// <typeparam name="TUserManager">The manager that carries the operations regarding the user Insert, Update and Delete operations. Must inherit from <see cref="UserManager{TUser}"/></typeparam>
        /// <typeparam name="TRoleManager">The manager that carries the operations regarding the role Insert, Update and Delete operations. Must inherit from <see cref="RoleManager{TRole}"/></typeparam>
        /// <param name="services">The services to extend</param>
        /// <param name="cookieScheme">Pass a value (not null) to enable a Cookie that carries the Authorization and Authentication data.</param>
        /// <param name="jsonWebTokenScheme">Pass a value (not null) to enable support for a Json Web Token (JWT) in the Header of the requests for the API (Authorization header)</param>
        /// <param name="pathAuthLogin">The path to where the user will be redirected on a SignIn challenge</param>
        /// <param name="pathAuthLogout">The path to where the user will be redirected when a LogOut happens</param>
        /// <param name="pathAuthAccessDenied">The path to where the user will be redirected when a 503 error is thrown (Access Denied)</param>
        /// <param name="cookieOptions">A method that will modify the Options for the preconfigured Cookie authentication.</param>
        /// <param name="pathAuthAccessDenied">A method that will modify the Options for the preconfigured JWT authentication.</param>
        /// <returns></returns>
        public static IServiceCollection AddEforIdentityAuthentication<TIdentityContext, TKey, TUser, TRole, TSignInManager, TUserManager, TRoleManager>(
            this IServiceCollection services,
            IdentityConfiguration configuration,
            string defaultAuthenticateScheme = null,
            string defaultChallengeScheme = null,
            Dictionary<string, IEnumerable<Claim>> policyAndClaims = null,
            IEnumerable<string> policyMenuSections = null)
            where TIdentityContext : IdentityDbContext<TUser, TRole, TKey>
            where TKey : IEquatable<TKey>
            where TUser : User<TKey>, new()
            where TRole : Role<TKey>, new()
            where TSignInManager : IdentitySignInManager<TKey, TUser>
            where TUserManager : IdentityUserManager<TKey, TUser>
            where TRoleManager : IdentityRoleManager<TKey, TRole>
        {
            LibrarySetup.AuthenticationSetup = LibrarySetup.AuthenticationSetupType.FullIdentityAuthentication;

            EnsureIdentityConfiguration(configuration, ref defaultAuthenticateScheme, ref defaultChallengeScheme);
            // If it continues through here and the default schemes are null,
            // the need to be polulated.
            if (string.IsNullOrWhiteSpace(defaultAuthenticateScheme)) defaultAuthenticateScheme = configuration.Cookie?.Scheme ?? configuration.JsonWebToken?.Scheme;
            if (string.IsNullOrWhiteSpace(defaultChallengeScheme)) defaultChallengeScheme = configuration.Cookie?.Scheme ?? configuration.JsonWebToken?.Scheme;

            services
                .AddIdentity<TUser, TRole>()
                .AddEntityFrameworkStores<TIdentityContext>()
                .AddUserManager<TUserManager>()
                .AddRoleManager<TRoleManager>()
                .AddSignInManager<TSignInManager>()
                .AddDefaultTokenProviders();

            AddAndConfigureAuthentication(services, configuration, defaultAuthenticateScheme, defaultChallengeScheme, policyAndClaims, policyMenuSections);

            return services;
        }

        /// <summary>
        /// Adds policies so that the application's controllers can work with them.
        /// </summary>
        /// <param name="policyAndClaims">
        /// Since a policy is a collection of claims, the KEY of the Dictionary must be
        /// the name of the Policy (the one you will want to use in the Authorize attribute)
        /// and the value will be a collection of <see cref="Claim"/> the use must fulfill
        /// in other to validate the Policy.
        /// </param>
        /// <param name="policyMenuSections">
        /// If you are using an UI menu to distribute claims (see Policy docs for more info),
        /// you may want to specify what the menu sections are. This will allow you to setup
        /// Authorization rules regarding specific sections, but it's not required.
        /// </param>
        /// <returns></returns>
        public static IServiceCollection AddAppAuthorizationPolicies(this IServiceCollection services,
            Dictionary<string, IEnumerable<Claim>> policyAndClaims,
            IEnumerable<string> policyMenuSections = null,
            string policyMenuSectionPrefix = AppClaimTypes.CLAIM_TYPE_MENU_SECTION_PREFIX_DEFAULT)
        {
            policyAndClaims = policyAndClaims ?? new Dictionary<string, IEnumerable<Claim>>();

            if (policyMenuSections.Any(pmc => string.IsNullOrWhiteSpace(pmc))) throw new ArgumentException("Menu section names cannot be left empty");
            var menuAsPolicyAndClaims = (policyMenuSections ?? Enumerable.Empty<string>())
                .Distinct()
                .ToDictionary(m => m, m => new Claim[] { new Claim($"{policyMenuSectionPrefix}{MENU_POLICY_ENUM_NAME}", m) });

            foreach (var m in menuAsPolicyAndClaims)
            {
                if (policyAndClaims.ContainsKey(m.Key)) throw new ArgumentException($"Menu section [{m}] is already present at the {nameof(policyAndClaims)} dictionary");
                policyAndClaims[m.Key] = m.Value;
            }

            // Validations are done inside.
            AuthPolicySetup.AddPolicyClaims(policyAndClaims);

            services.AddAuthorization(c =>
            {
                foreach (var p in AuthPolicySetup.PolicyAndClaims)
                {
                    c.AddPolicy(p.Key, authPolicy =>
                    {
                        var byType = p.Value.GroupBy(c => c.Type).ToList();
                        foreach (var ct in byType)
                        {
                            authPolicy.RequireClaim(ct.Key, ct.Select(ctt => ctt.Value));
                        }
                    });
                }
            });

            return services;
        }




        #region Private methods
        /// <summary>
        /// Ensures the <paramref name="configuration"/> value is correct and that the
        /// <paramref name="defaultAuthenticateScheme"/> and <paramref name="defaultChallengeScheme"/>
        /// are correctly stablished regarding the said configuration.
        /// If the setup is not correctly done, an Exception will be thrown.
        /// Also performs changes to the default schemes.
        /// </summary>
        private static void EnsureIdentityConfiguration(IdentityConfiguration configuration,
            ref string defaultAuthenticateScheme,
            ref string defaultChallengeScheme)
        {
            if (configuration == null) throw new ArgumentNullException($"{nameof(configuration)} cannot be left null");
            configuration.Validate();

            if ((configuration.Cookie != null && configuration.JsonWebToken != null) &&
                (string.IsNullOrWhiteSpace(defaultAuthenticateScheme) || string.IsNullOrWhiteSpace(defaultChallengeScheme)))
            {
                throw new ArgumentNullException($"{nameof(defaultAuthenticateScheme)} and {nameof(defaultChallengeScheme)} need to be specified when using both Cookies and Bearer authentication.{Environment.NewLine}" +
                    $"Methods and/or controllers do also need have their [Authorize(AuthenticationSchemes = \"Bearer,Cookies\")] specified if you want to access user data or claims.");
            }

            if ((configuration.Cookie == null || configuration.JsonWebToken == null) &&
                (!string.IsNullOrWhiteSpace(defaultAuthenticateScheme) || !string.IsNullOrWhiteSpace(defaultChallengeScheme)))
            {
                throw new InvalidOperationException($"{nameof(defaultAuthenticateScheme)} and {nameof(defaultChallengeScheme)} need to be null. The defaults will be pulled from the {nameof(IdentityConfiguration.Cookie.Scheme)} at the specified configuration.");
            }
        }

        private static IServiceCollection AddAndConfigureAuthentication(IServiceCollection services,
            IdentityConfiguration configuration,
            string defaultAuthenticateScheme,
            string defaultChallengeScheme,
            Dictionary<string, IEnumerable<Claim>> policyAndClaims,
            IEnumerable<string> policyMenuSections = null)
        {
            var authBuilder = services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = defaultAuthenticateScheme;
                options.DefaultSignOutScheme = defaultAuthenticateScheme;

                options.DefaultChallengeScheme = defaultChallengeScheme;
            });

            if (configuration.Cookie != null)
            {
                Action<CookieAuthenticationOptions> optionModifier = (o) =>
                {
                    o.LoginPath = new PathString(configuration.Cookie.PathAuthLogin);
                    o.LogoutPath = new PathString(configuration.Cookie.PathAuthLogout);
                    o.AccessDeniedPath = new PathString(configuration.Cookie.PathAuthAccessDenied);

                    configuration.Cookie.OptionModifier?.Invoke(o);

                    o.Validate();
                };

                if (defaultAuthenticateScheme == configuration.Cookie.Scheme)
                {
                    authBuilder.AddCookie(optionModifier);
                }
                else
                {
                    authBuilder.AddCookie(configuration.Cookie.Scheme, optionModifier);
                }
            }
            if (configuration.JsonWebToken != null)
            {
                // These are also used in Utilities.JwtUtilities, so keep using
                // the static class instead of the variable
                JwtSetup.TokenAudience = configuration.JsonWebToken.Audience;
                JwtSetup.TokenIssuer = configuration.JsonWebToken.Issuer;
                JwtSetup.TokenSecret = configuration.JsonWebToken.Secret;

                Action<JwtBearerOptions> optionModifier = (o) =>
                {
                    o.SaveToken = true;
                    o.TokenValidationParameters.ValidIssuer = JwtSetup.TokenIssuer;
                    o.TokenValidationParameters.ValidAudience = JwtSetup.TokenAudience;
                    o.TokenValidationParameters.IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtSetup.TokenSecret));

                    configuration.JsonWebToken.OptionModifier?.Invoke(o);

                    o.Validate();
                };

                if (defaultAuthenticateScheme == configuration.JsonWebToken.Scheme)
                {
                    authBuilder.AddJwtBearer(optionModifier);
                }
                else
                {
                    authBuilder.AddJwtBearer(configuration.JsonWebToken.Scheme, optionModifier);
                }
            }

            services.AddAppAuthorizationPolicies(policyAndClaims, policyMenuSections);
            return services;
        }
        #endregion
    }
}
