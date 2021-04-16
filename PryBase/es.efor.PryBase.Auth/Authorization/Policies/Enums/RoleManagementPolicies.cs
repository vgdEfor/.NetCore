using es.efor.Auth.Attributes;
using es.efor.PryBase.Auth.Authorization.Attributes;
using es.efor.PryBase.Auth.Authorization.Policies.Menu;
using es.efor.Utilities.Web.Identity.Authorization.Attributes;
using System.ComponentModel;

namespace es.efor.PryBase.Auth.Authorization.Policies.Enums
{
    [Description("Gestión de roles")]
    public enum RoleManagementPolicies
    {
        /// <summary>
        /// Visualización de detalles de rol
        /// </summary>
        [Description("Ver detalles")]
        [PolicyRequiredClaims("app-claim-" + nameof(RoleManagementPolicies), nameof(RoleManagementDetailView))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAdministration)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        RoleManagementDetailView,
        /// <summary>
        /// Creación de nuevo rol
        /// </summary>
        [Description("Crear")]
        [PolicyRequiredClaims("app-claim-" + nameof(RoleManagementPolicies), nameof(RolManagementCreate))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAdministration)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        RolManagementCreate,
        /// <summary>
        /// Edición de rol existente
        /// </summary>
        [Description("Editar")]
        [PolicyRequiredClaims("app-claim-" + nameof(RoleManagementPolicies), nameof(RolManagementEdit))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAdministration)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        RolManagementEdit,
        /// <summary>
        /// Eliminación de rol existente
        /// </summary>
        [Description("Eliminar")]
        [PolicyRequiredClaims("app-claim-" + nameof(RoleManagementPolicies), nameof(RolManagementDelete))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAdministration)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        RolManagementDelete,
    }
}
