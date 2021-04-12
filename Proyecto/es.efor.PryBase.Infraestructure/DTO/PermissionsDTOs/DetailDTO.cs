namespace es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs
{
    public class DetailDTO
    {
        #region Constructor
        public DetailDTO() { }
        #endregion

        #region Propiedades 
        public int Id { get; set; }
        public string Name { get; set; }
        public FunctionalityDTO Functionality { get; set; }

        #endregion
    }
}
