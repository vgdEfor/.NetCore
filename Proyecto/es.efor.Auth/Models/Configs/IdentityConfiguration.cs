using System;
using System.Collections.Generic;
using System.Text;

namespace es.efor.Auth.Models.Configs
{
    public class IdentityConfiguration
    {
        public CookieIdentityConfiguration Cookie { get; private set; }
        public JwtIdentityConfiguration JsonWebToken { get; private set; }

        public IdentityConfiguration UseCookies()
        {
            Cookie = new CookieIdentityConfiguration();
            return this;
        }
        public IdentityConfiguration UseCookies(string scheme)
        {
            Cookie = new CookieIdentityConfiguration(scheme);
            return this;
        }
        /// <param name="secret">
        /// Used to generate tokens. Keep it safe.
        /// <para>** IF THE TOKEN IS ISSUED WITH A DIFFERENT SECRET, IT WILL BE REJECTED.
        /// BEWARE OF APP INSTANCES, CLUSTERS, SERVER FARMS, KUBERNETES PODS... **</para>
        /// </param>
        /// <param name="issuer">
        /// The identity provider that is going to emit the auth token
        /// </param>
        /// <param name="audience">
        /// The identity provider that is going to validate the auth token.
        /// Keep it null to copy the <paramref name="issuer"/>.
        /// <para>** IF THE TOKEN HAS A DIFFERENT ISSUER THAN THE ONE SPECIFIED HERE, THE TOKEN WILL BE REJECTED.
        /// BEWARE OF APP INSTANCES, CLUSTERS, SERVER FARMS, KUBERNETES PODS... **</para>
        /// </param>
        public IdentityConfiguration UseJsonWebTokens(string secret, string issuer, string audience = null, string scheme = null)
        {
            JsonWebToken = new JwtIdentityConfiguration(secret: secret, issuer: issuer, audience: audience, scheme: scheme);
            return this;
        }

        /// <summary>
        /// Validates the class' information. Throws an exception if
        /// the information is not valid.
        /// </summary>
        public void Validate()
        {
            if (Cookie == null && JsonWebToken == null)
            {
                throw new ArgumentNullException($"{typeof(IdentityConfiguration)} needs at least {nameof(Cookie)} or {nameof(JsonWebToken)}");
            }

            if (Cookie != null) Cookie.Validate();
            if (JsonWebToken != null) JsonWebToken.Validate();
        }
    }
}
