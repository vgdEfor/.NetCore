using Microsoft.AspNetCore.Authentication.JwtBearer;
using System;
using System.Collections.Generic;
using System.Text;

namespace es.efor.Auth.Models.Configs
{
    public class JwtIdentityConfiguration
    {
        public string Scheme { get; set; } = JwtBearerDefaults.AuthenticationScheme;

        public string Audience { get; set; }
        public string Issuer { get; set; }
        internal readonly string Secret;


        public Action<JwtBearerOptions> OptionModifier { get; set; } = null;

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
        public JwtIdentityConfiguration(string secret, string issuer, string audience = null, string scheme = null)
        {
            if (!string.IsNullOrWhiteSpace(scheme)) Scheme = scheme;
            if (string.IsNullOrWhiteSpace(audience)) audience = issuer;

            Secret = secret;
            Issuer = issuer;
            Audience = audience;
        }

        /// <summary>
        /// Validates the class' information. Throws an exception if
        /// the information is not valid.
        /// </summary>
        public void Validate()
        {
            if (string.IsNullOrWhiteSpace(Scheme)) throw new ArgumentNullException($"{nameof(Scheme)} cannot be left null nor empty.");
            if (string.IsNullOrWhiteSpace(Secret)) throw new ArgumentNullException($"{nameof(Secret)} cannot be left null nor empty.");
            if (string.IsNullOrWhiteSpace(Audience)) throw new ArgumentNullException($"{nameof(Audience)} cannot be left null nor empty.");
            if (string.IsNullOrWhiteSpace(Issuer)) throw new ArgumentNullException($"{nameof(Issuer)} cannot be left null nor empty.");
        }
    }
}
