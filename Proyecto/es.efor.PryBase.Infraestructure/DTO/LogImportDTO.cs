using es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs;
using System;

namespace es.efor.PryBase.Infraestructure.DTO.LogImportsDTOs
{
    public class LogImportDTO
    {
        #region Constructor
        public LogImportDTO() { }
        #endregion

        #region Propiedades 
        public int Id { get; set; }
        public ModuleDTO Module { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string Observations { get; set; }
        #endregion
    }
}
