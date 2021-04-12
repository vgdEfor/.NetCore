using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace es.efor.Auth.Identity.Models.Api
{
    public class JsonWebTokenResponse
    {
        public DateTimeOffset ValidTo { get; private set; }
        public DateTimeOffset ValidFrom { get; private set; }
        public string AccessToken { get; private set; }
        //public readonly string RefreshToken;

        public JsonWebTokenResponse(JwtSecurityToken token)
        {
            AccessToken = new JwtSecurityTokenHandler().WriteToken(token);
            ValidTo = token.ValidTo.ToUniversalTime();
            ValidFrom = token.ValidFrom.ToUniversalTime();
        }

        public static JsonWebTokenResponse FromToken(JwtSecurityToken token)
        {
            return new JsonWebTokenResponse(token);
        }
    }
}
