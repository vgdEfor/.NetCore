using es.efor.OnBoarding.Business.DTO.UsersDTOs;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace es.efor.OnBoarding.Business.DTO.EnterpriseDTOs
{
    public class EnterpriseDTO
    {
        /// <summary>
        /// Identificador del empresa
        /// </summary>

        [Required(ErrorMessage = "API.ERROR.ENTERPISE.ID.REQUIRED")]
        public int Id { get; set; }

        /// <summary>
        /// Nombre del empresa
        /// </summary>

        [Required(ErrorMessage = "API.ERROR.ENTERPISE.NAME.REQUIRED")]
        [MaxLength(50, ErrorMessage = "API.ERROR.ENTERPISE.NAME.MAXLENGTH")]
        public string Name { get; set; }

        /// <summary>
        /// CIF de la empresa
        /// </summary>

        [Required(ErrorMessage = "API.ERROR.ENTERPISE.CIF.REQUIRED")]
        [MaxLength(50, ErrorMessage = "API.ERROR.ENTERPISE.CIF.MAXLENGTH")]
        public string Cif { get; set; }

        /// <summary>
        /// RazonSocial de la empresa
        /// </summary>
        /// 
        [MaxLength(50)]
        public string RaxonSocial { get; set; }

        /// <summary>
        /// Campo activo de la empresa
        /// </summary>
        public bool Active { get; set; }

        public int ResponsableId { get; set; }
        public UserDTO Responsable { get; set; }
    }
}