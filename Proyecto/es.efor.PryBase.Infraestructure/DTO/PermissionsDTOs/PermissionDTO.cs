using es.efor.PryBase.Infraestructure.DTO.UserDTOs;

namespace es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs
{
    public class PermissionDTO
    {
        #region Constructor
        public PermissionDTO() { }
        #endregion

        #region Propiedades 
        public int Id { get; set; }
        public FunctionalityDTO Functionality { get; set; }
        public DetailDTO Detail { get; set; }
        public bool Enabled { get; set; }
        public UserDepartmentDTO Department { get; set; }
        public UserLevelDTO Level { get; set; }

        #endregion
    }
}
