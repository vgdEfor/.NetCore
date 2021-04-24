using es.efor.OnBoarding.Business.DTO.UsersDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.OnBoarding.Business.DTO.EnterpriseDTOs
{
    public class EnterpriseGridDTO
    {
        /// <summary>
        /// Identificador del empresa
        /// </summary>

        public int Id { get; set; }

        /// <summary>
        /// Nombre del empresa
        /// </summary>

 
        public string Name { get; set; }

        /// <summary>
        /// CIF de la empresa
        /// </summary>

    
        public string Cif { get; set; }

        /// <summary>
        /// RazonSocial de la empresa
        /// </summary>
        /// 

        public string RaxonSocial { get; set; }

        /// <summary>
        /// Campo activo de la empresa
        /// </summary>
        public bool Active { get; set; }

        public int ResponsableId { get; set; }
    }
}
