using System;
using System.Collections.Generic;
using System.Text;
using es.efor.Auth.Extensions;

namespace es.efor.Auth._Internal.Setups
{
    /// <summary>
    /// Contains library-level setup information.
    /// Usefull for debugging and method execution control.
    /// </summary>
    internal static class LibrarySetup
    {
        /// <summary>
        /// The type of Authentication that is being used
        /// </summary>
        internal static AuthenticationSetupType AuthenticationSetup { get; set; } = AuthenticationSetupType.NoSetup;



        /// <summary>
        /// Keep updated: <see cref="IApplicationBuilderExtensions.UseEforIdentityAuthentication{TKey, TUser, TRole, TSignInManager, TUserManager, TAccountController, TAccessController}(Microsoft.AspNetCore.Builder.IApplicationBuilder)"/>
        /// </summary>
        internal enum AuthenticationSetupType
        {
            /// <summary>
            /// Initial state. No setup has been stablished.
            /// </summary>
            NoSetup,
            /// <summary>
            /// See: <see cref="IServiceCollectionExtensions.AddSimpleAuthentication(Microsoft.Extensions.DependencyInjection.IServiceCollection, Models.Configs.IdentityConfiguration, string, string)"/>
            /// </summary>
            SimpleJwtAuthentication,
            /// <summary>
            /// See: <see cref="IServiceCollectionExtensions.AddIdentityAuthentication{TIdentityContext, TKey, TUser, TRole, TSignInManager, TUserManager, TRoleManager}(Microsoft.Extensions.DependencyInjection.IServiceCollection, Models.Configs.IdentityConfiguration, string, string)"/>
            /// </summary>
            FullIdentityAuthentication,
        }
    }
}
