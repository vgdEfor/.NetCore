using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.PryBase.Infraestructure.DTO.Employees
{
    public class EmployeeDTO
    {
        #region Constructor
        public EmployeeDTO() { }
        #endregion

        #region Propiedades

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime? BirthDate { get; set; }
        public DateTime? StartDate { get; set; }
        public int PositionType { get; set; }
        [NotMapped]
        public Position_Enum Position { 
            get {
                return (Position_Enum)this.PositionType;
            } 
            set {
                this.PositionType = (int) value;
            } }
        #endregion

    }

    public enum Position_Enum
    {
        [Description("Jefe")] Chief=0,
        [Description("Gerente")] Manager=1,
        [Description("Supervisor")] Supervisor=2,
        [Description("Desarrollador")] Developer=3,
        [Description("Testeador")]  Tester=4
    }
}
