using Microsoft.AspNetCore.Identity;
using System;

namespace es.efor.Auth.Models.Entities
{
    /// <summary>
    /// Clase de implementación para Users de Identity.
    /// Utilizar esta clase en lugar de la tipificada en la medida de lo posible.
    /// De ser necesario editar el tipo de clave primaria, hacerlo en la definición de esta clase.
    /// </summary>
    public class User : User<Guid>
    {
        public User() : base() { }
        public User(string userName) : base(userName) { }
    }

    /// <summary>
    /// Clase de implementación para Usuarios de Identity.
    /// Utilizar User sin tipo de clave especificado en la medida de lo posible.
    /// </summary>
    /// <typeparam name="TId">Tipo de clave primaria a asignar en el contexto de la base de datos</typeparam>
    public class User<TId> : IdentityUser<TId>
        where TId : IEquatable<TId>
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public new TId Id { get { return base.Id; } set { base.Id = value; } }

        //[PersonalData]
        //public string Name { get; set; }
        //public DateTimeOffset? DeleteDate { get; set; }

        public User() : base() { }
        public User(string userName) : base(userName) { }
    }
}