using es.efor.Auth.Attributes;
using es.efor.PryBase.Auth.Authorization.Attributes;
using es.efor.PryBase.Auth.Authorization.Policies.Menu;
using es.efor.Utilities.Web.Identity.Authorization.Attributes;
using System.ComponentModel;

namespace es.efor.PryBase.Auth.Authorization.Policies.Enums
{
    [Description("Gestión de usuarios")]
    public enum UserManagementPolicies
    {
        /// <summary>
        /// Visualización de detalles de usuario
        /// </summary>
        [Description("Ver detalles")]
        [PolicyRequiredClaims("app-claim-" + nameof(UserManagementPolicies), nameof(UserManagementDetailView))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAdministration)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        UserManagementDetailView,
        /// <summary>
        /// Edición de roles a los que pertenece un usuario
        /// </summary>
        [Description("Editar roles asignados")]
        [PolicyRequiredClaims("app-claim-" + nameof(UserManagementPolicies), nameof(UserManagementRoleEdit))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAdministration)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        UserManagementRoleEdit,
    }
}
