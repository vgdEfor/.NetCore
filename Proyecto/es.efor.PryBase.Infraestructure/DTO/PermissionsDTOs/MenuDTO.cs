using System.Collections.Generic;

namespace es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs
{
    public class MenuDTO
    {
        #region Constructor
        public MenuDTO()
        {
            this.Modules = new List<ModuleDTO>();
            this.Functionalities = new List<FunctionalityDTO>();
        }
        #endregion

        #region Propiedades 
        public string LoginDisplayName { get; set; }
        public string Department { get; set; }
        public List<ModuleDTO> Modules { get; set; }
        public List<FunctionalityDTO> Functionalities { get; set; }
        #endregion
    }
}
