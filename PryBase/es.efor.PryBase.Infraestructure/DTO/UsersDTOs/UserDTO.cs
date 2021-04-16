using System;

namespace es.efor.PryBase.Infraestructure.DTO.UserDTOs
{
    public class UserDTO
    {
        #region Constructor
        public UserDTO() { }
        #endregion

        #region Propiedades 
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public UserDepartmentDTO Department { get; set; }
        public UserLevelDTO Level { get; set; }
        //public DateTime? DeleteDate { get; set; }
        //public string DeleteUser { get; set; }

        #endregion

    }
}
