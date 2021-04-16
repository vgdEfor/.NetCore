using es.efor.Auth._Internal.Setups;
using es.efor.Auth.Extensions;
using es.efor.Auth.Identity.Models.Api;
using es.efor.Auth.Managers;
using es.efor.Auth.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.Auth.Utilities
{
    public static class JwtUtilities
    {
        public static async Task<JsonWebTokenResponse> GetAuthBearerToken(
            string stringifiedUserId, string userName,
            string name = null, string email = null,
            IEnumerable<Claim> extraClaims = null)
        {
            extraClaims = extraClaims ?? Enumerable.Empty<Claim>();
            var claims = extraClaims.ToList();

            claims.Add(new Claim(ClaimTypes.NameIdentifier, stringifiedUserId));
            claims.Add(new Claim(ClaimTypes.GivenName, userName));

            if (name != null) { claims.Add(new Claim(ClaimTypes.Name, name)); }
            if (email != null) { claims.Add(new Claim(ClaimTypes.Email, email)); }

            return await GetAuthBearerToken(claims).ConfigureAwait(false);
        }
        public static async Task<JsonWebTokenResponse> GetAuthBearerToken(IEnumerable<Claim> claims)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtSetup.TokenSecret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: JwtSetup.TokenIssuer,
                audience: JwtSetup.TokenAudience,
                claims: claims,
                notBefore: DateTime.Now,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            var result = JsonWebTokenResponse.FromToken(token);

            await Task.CompletedTask;
            return result;
        }

        public static async Task<JsonWebTokenResponse> GetAuthBearerToken(User user, IdentityUserManager<Guid, User> userManager)
        {
            return await GetAuthBearerToken<Guid, User, IdentityUserManager<Guid, User>>(user, userManager).ConfigureAwait(false);
        }
        public static async Task<JsonWebTokenResponse> GetAuthBearerToken<TKey>(IdentityUser<TKey> user, UserManager<IdentityUser<TKey>> userManager)
            where TKey : IEquatable<TKey>
        {
            return await GetAuthBearerToken<TKey, IdentityUser<TKey>, UserManager<IdentityUser<TKey>>>(user, userManager).ConfigureAwait(false);
        }
        public static async Task<JsonWebTokenResponse> GetAuthBearerToken<TKey, TUser, TUserManager>(TUser user, TUserManager userManage)
            where TKey : IEquatable<TKey>
            where TUser : IdentityUser<TKey>
            where TUserManager : UserManager<TUser>
        {
            var claims = await userManage.GetClaimsAsync(user).ConfigureAwait(false);
            //claims.Add(new Claim(JwtRegisteredClaimNames.Sub, user.Email));
            //claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));

            return await GetAuthBearerToken(user.Id.ToString(), user.UserName, user.UserName, user.Email, claims).ConfigureAwait(false);
        }
    }
}
