using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace es.efor.Auth._Internal.Setups
{
    internal static class AuthPolicySetup
    {
        internal static Dictionary<string, List<Claim>> PolicyAndClaims { get; set; } = new Dictionary<string, List<Claim>>();

        internal static void AddPolicyClaim(string policyName, Claim claim)
        {
            if (!PolicyAndClaims.ContainsKey(policyName))
            {
                PolicyAndClaims[policyName] = new List<Claim>();
            }

            PolicyAndClaims[policyName].Add(claim);
        }
        internal static void ClearPolicyClaims()
        {
            PolicyAndClaims = new Dictionary<string, List<Claim>>();
        }
        internal static void ClearPolicyClaims(string policy)
        {
            PolicyAndClaims[policy] = new List<Claim>();
        }
        internal static void AddPolicyClaims(Dictionary<string, IEnumerable<Claim>> policyAndClaims)
        {
            policyAndClaims = policyAndClaims ?? new Dictionary<string, IEnumerable<Claim>>();
            foreach (var pc in policyAndClaims)
            {
                AddPolicyClaims(pc.Key, pc.Value ?? Enumerable.Empty<Claim>());
            }
        }
        internal static void AddPolicyClaims(string policyName, IEnumerable<Claim> claims)
        {
            claims = claims ?? Enumerable.Empty<Claim>();

            if (string.IsNullOrWhiteSpace(policyName)) throw new ArgumentException("A policy name cannot be left empty nor null.");
            var invalidClaims = claims
                .Where(c => string.IsNullOrWhiteSpace(c.Type));
            if (invalidClaims.Any()) throw new ArgumentException($"Policy [{policyName}] contains null or empty claim types, which is not allowed.");
            PolicyAndClaims[policyName] = claims.ToList();
        }
    }
}
