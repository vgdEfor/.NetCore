using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Claims;

namespace es.efor.Auth.Attributes
{

    /// <summary>
    /// Defines a Claim by its <see cref="Claim.Type"/> and <see cref="Claim.Value"/>, which
    /// will be used to defined a Policy enumeration's Claim requirement.
    /// This means that in order to fulfill the policy, a User MUST have the claim
    /// defined on (at least one of) the Policy's <see cref="PolicyRequiredClaimsAttribute"/>.
    /// </summary>
    [AttributeUsage(AttributeTargets.Field, AllowMultiple = true, Inherited = true)]
    public class PolicyRequiredClaimsAttribute : Attribute
    {
        public string ClaimType { get; private set; }
        public string ClaimValue { get; private set; }

        public PolicyRequiredClaimsAttribute(string claimType, string claimValue)
        {
            ClaimType = claimType;
            ClaimValue = claimValue;
        }
    }
}
