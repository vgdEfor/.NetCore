using System;
using System.Collections.Generic;
using System.Text;

namespace es.efor.Auth._Internal.Setups
{
    internal static class JwtSetup
    {
        internal static string TokenSecret { get; set; }
        /// <summary>
        /// https://es.wikipedia.org/wiki/JSON_Web_Token#Campos_est.C3.A1ndares
        /// </summary>
        internal static string TokenIssuer { get; set; }
        /// <summary>
        /// https://es.wikipedia.org/wiki/JSON_Web_Token#Campos_est.C3.A1ndares
        /// </summary>
        internal static string TokenAudience { get; set; }
    }
}
