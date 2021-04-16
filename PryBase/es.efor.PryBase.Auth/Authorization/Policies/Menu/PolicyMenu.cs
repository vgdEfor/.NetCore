using System.ComponentModel;

namespace es.efor.PryBase.Auth.Authorization.Policies.Menu
{
    // Name of the enum must match es.efor.Auth.Extensions.IServiceCollectionExtensions.MENU_POLICY_ENUM_NAME
    public enum PolicyMenu
    {
        [Description("Todo")]
        PolicyMenuAll,


        [Description("Categorías")]
        PolicyMenuCategory,
        [Description("Publicaciones")]
        PolicyMenuPost,
        [Description("Entidades")]
        PolicyMenuZityEntity,
        [Description("Administración")]
        PolicyMenuAdministration
    }
}
