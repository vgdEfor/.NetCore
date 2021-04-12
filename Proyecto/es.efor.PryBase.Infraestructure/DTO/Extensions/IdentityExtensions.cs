using es.efor.PryBase.Infraestructure.DTO.UserDTOs;
using System.DirectoryServices.AccountManagement;
using System.Linq;

namespace es.efor.PryBase.Infraestructure.DTO.Extensions
{

    public static class IdentityExtensions
    {
        public static IQueryable<UserPrincipal> FilterUsers(this IQueryable<UserPrincipal> principals) =>
            principals.Where(x => x.Guid.HasValue);

        public static IQueryable<ADUserDTO> SelectAdUsers(this IQueryable<UserPrincipal> principals) =>
            principals.Select(x => ADUserDTO.CastToAdUser(x));
    }
}
