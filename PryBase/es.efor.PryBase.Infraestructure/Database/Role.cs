using es.efor.PryBase.Data.Database;
using System;
using System.Collections.Generic;
using System.Text;
using es.efor.Auth.Models.Entities;

namespace es.efor.PryBase.Data.Database
{
    public class Role: Role<Guid>
    {
        //public int Id { get; set; }

        public virtual UserDepartment DepartmentNavigation { get; set; }
        public virtual UserLevel LevelNavigation { get; set; }
    }
}
