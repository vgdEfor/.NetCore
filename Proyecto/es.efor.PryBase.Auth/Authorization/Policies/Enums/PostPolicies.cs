using es.efor.Auth.Attributes;
using es.efor.PryBase.Auth.Authorization.Attributes;
using es.efor.PryBase.Auth.Authorization.Policies.Menu;
using es.efor.Utilities.Web.Identity.Authorization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace es.efor.PryBase.Auth.Authorization.Policies.Enums
{
    [Description("Gestión de publicaciones")]
    public enum PostPolicies
    {
        #region Any
        [Description("Ver todo el listado")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostList))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostList,

        [Description("Ver detalles de cualquiera")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostDetail))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostDetail,

        [Description("Crear cualquier publicación")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostCreate))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostCreate,

        [Description("Editar cualquier publicación")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostEdit))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostEdit,

        [Description("Eliminar cualquier publicación")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostDelete))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostDelete,
        #endregion

        #region Only owned
        [Description("Ver su listado")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostListOwner))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostListOwner,

        [Description("Ver detalles de las suyas")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostDetailOwner))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostDetailOwner,

        [Description("Crear sus publicaciones")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostCreateOwner))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostCreateOwner,

        [Description("Editar sus publicaciones")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostEditOwner))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostEditOwner,

        [Description("Eliminar sus publicaciones")]
        [PolicyRequiredClaims("app-claim-" + nameof(PostPolicies), nameof(PostDeleteOwner))]
        [PolicyMenuItem(PolicyMenu.PolicyMenuPost)]
        [PolicyMenuItem(PolicyMenu.PolicyMenuAll)]
        PostDeleteOwner,
        #endregion
    }
}
