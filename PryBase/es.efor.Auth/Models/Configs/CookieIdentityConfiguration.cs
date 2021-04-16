using Microsoft.AspNetCore.Authentication.Cookies;
using System;
using System.Collections.Generic;
using System.Text;

namespace es.efor.Auth.Models.Configs
{
    public class CookieIdentityConfiguration
    {
        /// <summary>
        /// Predefined: <see cref="CookieAuthenticationDefaults.AuthenticationScheme"/>
        /// </summary>
        public string Scheme { get; set; } = CookieAuthenticationDefaults.AuthenticationScheme;

        /// <summary>
        /// Predefined: "/auth/login"
        /// </summary>
        public string PathAuthLogin { get; set; } = "/auth/login";
        /// <summary>
        /// Predefined: "/auth/logout"
        /// </summary>
        public string PathAuthLogout { get; set; } = "/auth/logout";
        /// <summary>
        /// Predefined: "/error/503"
        /// </summary>
        public string PathAuthAccessDenied { get; set; } = "/error/503";

        /// <summary>
        /// Predefined: null
        /// </summary>
        public Action<CookieAuthenticationOptions> OptionModifier { get; set; } = null;

        public CookieIdentityConfiguration(string scheme = null)
        {
            if (!string.IsNullOrWhiteSpace(scheme)) Scheme = scheme;
        }

        /// <summary>
        /// Validates the class' information. Throws an exception if
        /// the information is not valid.
        /// </summary>
        public void Validate()
        {
            if (string.IsNullOrWhiteSpace(Scheme)) throw new ArgumentNullException($"{nameof(Scheme)} cannot be left null nor empty.");
            if (string.IsNullOrWhiteSpace(PathAuthLogin)) throw new ArgumentNullException($"{nameof(PathAuthLogin)} cannot be left null nor empty.");
            if (string.IsNullOrWhiteSpace(PathAuthLogout)) throw new ArgumentNullException($"{nameof(PathAuthLogout)} cannot be left null nor empty.");
            if (string.IsNullOrWhiteSpace(PathAuthAccessDenied)) throw new ArgumentNullException($"{nameof(PathAuthAccessDenied)} cannot be left null nor empty.");
        }
    }
}
