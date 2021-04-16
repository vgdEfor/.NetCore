using es.efor.PryBase.Infraestructure.DTO.Employees;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace es.efor.PryBase.Infraestructure.Database
{
    public partial class Employee
    {
        [NotMapped]
        public Position_Enum Position
        {
            get
            {
              /*  if (this.PositionType.HasValue)
                {*/
                    return (Position_Enum)this.PositionType;
               /* } else
                {
                    return Position_Enum.Chief;
                }*/
            }
            set
            {
                this.PositionType = (int)value;
            }
        }
    }
}
