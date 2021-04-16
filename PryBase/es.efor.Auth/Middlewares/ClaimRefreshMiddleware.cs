using es.efor.Auth.Managers;
using es.efor.Auth.Models.Entities;
using es.efor.Utilities.Web.Identity;
using es.efor.Utilities.Web.Identity.Authorization.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.Auth.Middlewares
{
    public class ClaimRefreshMiddleware<TKey, TUser, TSignInManager, TUserManager, TRole>
        where TKey : IEquatable<TKey>
        where TUser: User<TKey>
        where TSignInManager : IdentitySignInManager<TKey, TUser>
        where TUserManager: UserManager<TUser>
        where TRole: Role<TKey>, new()
    {
        private readonly RequestDelegate _next;
        public ClaimRefreshMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context,
            TSignInManager signInManager,
            TUserManager userManager)
        {
            if (context.User.Identity.IsAuthenticated)
            {
                var isRefreshNeeded = true;
                var isLogoutNeeded = false;
                TUser user = null;

                var userIdAsString = context.User.GetClaimId();
                if (string.IsNullOrWhiteSpace(userIdAsString)) isLogoutNeeded = true;
                else 
                {
                    var claimDatetime = context.User.Claims
                        .FirstOrDefault(c => c.Type == AppClaimTypes.ClaimUpdateDatetime);

                    if (claimDatetime == null)
                    {
                        claimDatetime = new Claim(AppClaimTypes.ClaimUpdateDatetime, GetClaimUpdateDatetimeNewValue());
                        user = await userManager.FindByIdAsync(userIdAsString);
                        if (user == null) isLogoutNeeded = true;
                        else await userManager.AddClaimAsync(user, claimDatetime);
                    }
                    else
                    {
                        isRefreshNeeded = (!DateTimeOffset.TryParse(claimDatetime.Value, out DateTimeOffset claimDatetimeValue) || claimDatetimeValue <= IdentityRoleManager<TKey, TRole>.UpdateDatetime);
                        if (isRefreshNeeded)
                        {
                            user = await userManager.FindByIdAsync(userIdAsString);
                            if (user == null) isLogoutNeeded = true;
                            else
                            {
                                var claimAtDb = (await userManager.GetClaimsAsync(user))
                                .FirstOrDefault(c => c.Type == AppClaimTypes.ClaimUpdateDatetime);

                                var newClaim = new Claim(AppClaimTypes.ClaimUpdateDatetime, GetClaimUpdateDatetimeNewValue());
                                if (claimAtDb == null) await userManager.AddClaimAsync(user, newClaim);
                                else await userManager.ReplaceClaimAsync(user, claimDatetime, newClaim);
                            }
                        }
                    }
                }

                // Not else, in case we need to reevaluate inside the upper if
                if (isLogoutNeeded)
                {
                    await signInManager.SignOutAsync();
                }
                else if (isRefreshNeeded)
                {
                    await signInManager.RefreshSignInAsync(user);
                }
            }

            await _next.Invoke(context);
        }

        private string GetClaimUpdateDatetimeNewValue()
        {
            return DateTimeOffset.UtcNow.ToString("o");
        }
    }
}
