using Microsoft.AspNetCore.Identity;
using System;

namespace es.efor.Auth.Models.Entities
{
    /// <summary>
    /// Clase de implementación para Roles de Identity.
    /// Utilizar esta clase en lugar de la tipificada en la medida de lo posible.
    /// De ser necesario editar el tipo de clave primaria, hacerlo en la definición de esta clase.
    /// </summary>
    public class Role : Role<Guid>
    {
        public Role() : base() { }
        public Role(string roleName) : base(roleName) { }
    }

    /// <summary>
    /// Clase de implementación para Roles de Identity.
    /// Utilizar Role sin tipo de clave especificado en la medida de lo posible.
    /// </summary>
    /// <typeparam name="TId">Tipo de clave primaria a asignar en el contexto de la base de datos</typeparam>
    public class Role<TId> : IdentityRole<TId>
        where TId : IEquatable<TId>
    {
        // // Database First
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public new TId Id { get { return base.Id; } set { base.Id = value; } }

        public Role() : base() { }
        public Role(string roleName) : base(roleName) { }
    }
}
