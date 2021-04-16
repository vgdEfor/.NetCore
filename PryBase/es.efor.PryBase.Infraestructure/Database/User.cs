using es.efor.Auth.Models.Entities;
using System;
using System.Collections.Generic;

namespace es.efor.PryBase.Data.Database
{
    public partial class User: User<Guid>
    {
        //public int Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public int Department { get; set; }
        public int Level { get; set; }
        public DateTime? DeleteDate { get; set; }
        public string DeleteUser { get; set; }

        public virtual UserDepartment DepartmentNavigation { get; set; }
        public virtual UserLevel LevelNavigation { get; set; }
    }
}