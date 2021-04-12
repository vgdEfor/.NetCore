using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace es.efor.Auth.Utilities
{
    public static class AuthorizationPolicyUtilities
    {
        private static Type TYPEOF_AUTHPOLICYUTILITIES = typeof(AuthorizationPolicyUtilities);
        private static IEnumerable<Type> ALL_POLICY_ENUM_TYPES = Enumerable.Empty<Type>();

        /// <summary>
        /// Looks for Policy enumerations on the given <paramref name="policyEnumNamespace"/>.
        /// Look docs for more info and how to setup policy enumerations.
        /// </summary>
        /// <param name="policyEnumNamespace">Namespace where the policy enums are being stored. Follow the docs.</param>
        /// <param name="forceRefresh">If true, the specified namespace will be re-scaned for new policies.</param>
        public static IEnumerable<Type> GetAllPolicyEnums(string policyEnumNamespace, bool forceRefresh = false)
        {
            var typeOfClass = TYPEOF_AUTHPOLICYUTILITIES;
            if (forceRefresh || !ALL_POLICY_ENUM_TYPES.Any())
            {
                ALL_POLICY_ENUM_TYPES = Assembly.GetAssembly(typeOfClass)
                    .GetTypes()
                    .Where(t => t.IsEnum)
                    .Where(t => t.Namespace == policyEnumNamespace)
                    .ToList();
            }
            return ALL_POLICY_ENUM_TYPES;
        }
    }
}
