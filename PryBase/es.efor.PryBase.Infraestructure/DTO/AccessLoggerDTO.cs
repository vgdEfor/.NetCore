using System;

namespace es.efor.PryBase.Infraestructure.DTO.AccessLoggerDTOs
{
    public class AccessLoggerDTO
    {
        #region Constructor
        public AccessLoggerDTO() { }
        #endregion

        #region Propiedades
        public DateTime Date { get; set; }
        public string User { get; set; }
        public Guid? Token { get; set; }
        public int Id { get; set; }
        #endregion


    }
}
