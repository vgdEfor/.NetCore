using es.efor.Auth.Attributes;
using es.efor.PryBase.Auth.Authorization.Attributes;
using es.efor.PryBase.Auth.Authorization.Policies.Menu;
using es.efor.Utilities.Web.Identity.Authorization.Attributes;
using System.ComponentModel;

namespace es.efor.PryBase.Auth.Authorization.Policies.Enums
{
    [Description("Gestión de categorías (tags)")]
    public enum CategoryPolicies
    {
        /// <summary>
        /// Visualización de categorías
        /// </summary>
        [Description("Ver categorías")]
        [PolicyRequiredClaims("app-claim-" + nameof(CategoryPolicies), nameof(CategoryDetailView))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuCategory)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        CategoryDetailView,
        /// <summary>
        /// Visualización de listado de categorías
        /// </summary>
        [Description("Ver categorías")]
        [PolicyRequiredClaims("app-claim-" + nameof(CategoryPolicies), nameof(CategoryListView))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuCategory)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        CategoryListView,
        /// <summary>
        /// Edición de categorías
        /// </summary>
        [Description("Editar categorías")]
        [PolicyRequiredClaims("app-claim-" + nameof(CategoryPolicies), nameof(CategoryDelete))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuCategory)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        CategoryEdit,
        /// <summary>
        /// Edición de categorías
        /// </summary>
        [Description("Elminar categorías")]
        [PolicyRequiredClaims("app-claim-" + nameof(CategoryPolicies), nameof(CategoryDelete))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuCategory)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        CategoryDelete,
    }
}
