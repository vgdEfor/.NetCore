using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.PryBase.Infraestructure.DTO.Employees
{
    public class ProjectDTO
    {

        #region Constructor
        public ProjectDTO()
        {

        }
        #endregion

        public int Id { get; set; }
        public string Name { get; set; }
        public int ResponsableId { get; set; }
        public int PriorityType { get; set; }

        [NotMapped]
        public Priority_Enum Priority
        {
            get
            {
                return (Priority_Enum)this.PriorityType;
            }
            set
            {
                this.PriorityType = (int)value;
            }
        }
        public DateTime Dstart { get; set; }
        public DateTime Dend { get; set; }

        public virtual EmployeeDTO Responsable { get; set; }


        public enum Priority_Enum
        {
            [Description("Low")] Low = 0,
            [Description("Medium")] Medium = 1,
            [Description("High")] High = 2,

        }

    }
}
