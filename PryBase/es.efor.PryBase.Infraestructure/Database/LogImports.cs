// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace es.efor.PryBase.Data.Database
{
    public partial class LogImports
    {
        public int Id { get; set; }
        public int Module { get; set; }
        public DateTime? Date { get; set; }
        public string Status { get; set; }
        public string Observations { get; set; }

        public virtual Modules ModuleNavigation { get; set; }
    }
}