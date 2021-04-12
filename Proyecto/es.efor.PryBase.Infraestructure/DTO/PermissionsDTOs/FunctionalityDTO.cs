namespace es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs
{
    public class FunctionalityDTO
    {
        #region Constructor
        public FunctionalityDTO() { }
        #endregion

        #region Propiedades 
        public int Id { get; set; }
        public string Name { get; set; }
        public ModuleDTO Module { get; set; }
        public string Link { get; set; }
        #endregion
    }
}
