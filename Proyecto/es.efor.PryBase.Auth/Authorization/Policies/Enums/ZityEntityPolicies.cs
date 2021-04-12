using es.efor.Auth.Attributes;
using es.efor.PryBase.Auth.Authorization.Attributes;
using es.efor.PryBase.Auth.Authorization.Policies.Menu;
using es.efor.Utilities.Web.Identity.Authorization.Attributes;
using System.ComponentModel;

namespace es.efor.PryBase.Auth.Authorization.Policies.Enums
{
    [Description("Gestión de comercios y entidades")]
    public enum ZityEntityPolicies
    {
        #region Any
        [Description("Ver todo el listado")]
        [PolicyRequiredClaims("app-claim-" + nameof(ZityEntityPolicies), nameof(ZityEntityList))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuZityEntity)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        ZityEntityList,

        [Description("Ver detalles de cualquiera")]
        [PolicyRequiredClaims("app-claim-" + nameof(ZityEntityPolicies), nameof(ZityEntityDetail))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuZityEntity)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        ZityEntityDetail,

        [Description("Crear cualquier entidad")]
        [PolicyRequiredClaims("app-claim-" + nameof(ZityEntityPolicies), nameof(ZityEntityCreate))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuZityEntity)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        ZityEntityCreate,

        [Description("Editar cualquier entidad")]
        [PolicyRequiredClaims("app-claim-" + nameof(ZityEntityPolicies), nameof(ZityEntityEdit))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuZityEntity)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        ZityEntityEdit,

        [Description("Eliminar cualquier entidad")]
        [PolicyRequiredClaims("app-claim-" + nameof(ZityEntityPolicies), nameof(ZityEntityDelete))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuZityEntity)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        ZityEntityDelete,
        #endregion

        #region MyRegion
        [Description("Ver sus detalles")]
        [PolicyRequiredClaims("app-claim-" + nameof(ZityEntityPolicies), nameof(ZityEntityDetailOwner))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuZityEntity)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        ZityEntityDetailOwner,

        [Description("Editar su entidad")]
        [PolicyRequiredClaims("app-claim-" + nameof(ZityEntityPolicies), nameof(ZityEntityEditOwner))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuZityEntity)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        ZityEntityEditOwner,
        #endregion
    }
}
