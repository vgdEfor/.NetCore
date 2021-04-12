using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using static es.efor.PryBase.Infraestructure.DTO.Employees.ProjectDTO;

namespace es.efor.PryBase.Infraestructure.Database
{
    public partial class Project
    {

        [NotMapped]
        public Priority_Enum Priority
        {
            get
            {
                if (this.PriorityType.HasValue)
                {
                    return (Priority_Enum)this.PriorityType.Value;
                }
                else return Priority_Enum.Medium;
            }
            set
            {
                this.PriorityType = (int)value;
            }
        }

    }
}
