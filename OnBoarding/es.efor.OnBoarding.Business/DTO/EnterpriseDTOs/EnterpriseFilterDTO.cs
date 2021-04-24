using es.efor.OnBoarding.Business.DTO.UsersDTOs;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.OnBoarding.Business.DTO.EnterpriseDTOs
{
    public class EnterpriseFilterDTO
    {

        /// <summary>
        /// Identificador de la empresa
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Nombre del empresa
        /// </summary>

        
        [MaxLength(50, ErrorMessage = "API.ERROR.ENTERPISE.NAME.MAXLENGTH")]
        public string Name { get; set; }

        /// <summary>
        /// CIF de la empresa
        /// </summary>
        [MaxLength(50, ErrorMessage = "API.ERROR.ENTERPISE.CIF.MAXLENGTH")]
        public string Cif { get; set; }

        /// <summary>
        /// RazonSocial de la empresa
        /// </summary>
        /// 
        [MaxLength(50, ErrorMessage = "API.ERROR.ENTERPISE.CIF.MAXLENGTH")]

        public string RaxonSocial { get; set; }

        /// <summary>
        /// Campo activo de la empresa
        /// </summary>
        public bool? Active { get; set; }

        public int ResponsableId { get; set; }
    }
}
