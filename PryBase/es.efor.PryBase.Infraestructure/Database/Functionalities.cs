﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace es.efor.PryBase.Data.Database
{
    public partial class Functionalities
    {
        public Functionalities()
        {
            Details = new HashSet<Details>();
            Permissions = new HashSet<Permissions>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Module { get; set; }
        public string Link { get; set; }

        public virtual Modules ModuleNavigation { get; set; }
        public virtual ICollection<Details> Details { get; set; }
        public virtual ICollection<Permissions> Permissions { get; set; }
    }
}