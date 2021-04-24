using es.efor.OnBoarding.Business.DTO.EnterpriseDTOs;
using System.Collections.Generic;
using System.Threading.Tasks;
using es.efor.Utilities.General;

namespace es.efor.OnBoarding.Business.Services.EnterpriseServices
{
    public interface IEnterpriseService
    {

        Task<CollectionList<EnterpriseGridDTO>> Datatable(EnterpriseFilterDTO enterpriseFilterDTO,
            int pageIndex, int pageSize, string sortName, bool sortDescending);

        /// <summary>
        /// Eliminar una empresa por su id
        /// </summary>
        /// <param name="id">Busqueda por nombre del rol</param>
        /// <returns></returns>
        Task<bool> Delete(int id);

        /// <summary>
        /// Devuelve la lista completa de empresas
        /// </summary>
    
        Task<List<EnterpriseDTO>> EnterpriseList();

        /// <summary>
        /// Devuelve la empresa por su Id
        /// </summary>
        /// <param name="Id">Busqueda de la empresa por Id</param>
        ///<returns>Empresa por su Id</returns>
        Task<EnterpriseDTO> Get(int Id);

        /// <summary>
        /// Devuelve la empresa buscada por su nombre
        /// </summary>
        /// <param name="Enterpise">Busqueda de la empresa por nombre</param>
        ///<returns>La empresa mapeada a DTO</returns>
        Task<EnterpriseDTO> Get(string Enterpise);

        /// <summary>
        /// Devuelve la lista de empresas que coincida con su nombre
        /// </summary>
        /// <param name="name">Busqueda de la empresa por Id</param>
        ///<returns>Busqueda de empresas por su nombre mapeadas a DTO</returns>
        Task<List<EnterpriseDTO>> List(string name);

        /// <summary>
        /// Crea o actualiza la empresa pasada por parametro
        /// </summary>
        /// <param name="Enterpise">Busqueda de la empresa por Id</param>
        ///<returns>Devuelve true si ha funcionado correctamente la inserción o actualización</returns>
        Task<bool> Set(EnterpriseDTO Enterpise);
    }
}