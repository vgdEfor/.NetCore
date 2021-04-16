using System;
using System.Collections.Generic;

namespace es.efor.PryBase.Data.Database
{
    public partial class UserDepartment
    {
        public UserDepartment()
        {
            Permissions = new HashSet<Permissions>();
            User = new HashSet<User>();
            Role = new HashSet<Role>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? DeleteDate { get; set; }
        public string DeleteUser { get; set; }

        public virtual ICollection<Permissions> Permissions { get; set; }
        public virtual ICollection<User> User { get; set; }
        public virtual ICollection<Role> Role { get; set; }
    }
}