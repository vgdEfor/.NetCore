using es.efor.Auth.Models.Entities;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;

namespace es.efor.Auth.Managers
{
    public class IdentitySignInManager<TUserId, TUser> : SignInManager<TUser>
        where TUserId : IEquatable<TUserId>
        where TUser: User<TUserId>
    {
        public IdentitySignInManager(
            IdentityUserManager<TUserId, TUser> userManager,
            IHttpContextAccessor contextAccessor,
            IUserClaimsPrincipalFactory<TUser> claimsFactory,
            IOptions<IdentityOptions> optionsAccessor, ILogger<IdentitySignInManager<TUserId, TUser>> logger,
            IAuthenticationSchemeProvider schemes, IUserConfirmation<TUser> confirmation)
            : base(userManager, contextAccessor, claimsFactory, optionsAccessor, logger, schemes, confirmation)
        {
        }

        #region Overrides
        #endregion
    }
}
