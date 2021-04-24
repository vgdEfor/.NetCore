using AutoMapper;
using es.efor.OnBoarding.Business.DTO.AuthDTOs;
using es.efor.OnBoarding.Business.DTO.EnterpriseDTOs;
using es.efor.OnBoarding.Business.DTO.RolesDTOs;
using es.efor.OnBoarding.Business.DTO.UsersDTOs;
using es.efor.OnBoarding.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace es.efor.OnBoarding.Business
{
    public sealed class MapperProfileRegistrations : Profile
    {
        public MapperProfileRegistrations()
        {
            #region Usuarios
            // Map UsuariosDB to UsuariosDTO
            CreateMap<Usuarios, UserDTO>()
                .ForMember(dst => dst.Id, src => src.MapFrom(usr => usr.Id))
                .ForMember(dst => dst.Username, src => src.MapFrom(usr => usr.Usuario))
                .ForMember(dst => dst.Password, src => src.MapFrom(usr => usr.Clave))
                .ForMember(dst => dst.Name, src => src.MapFrom(usr => usr.Nombre))
                .ForMember(dst => dst.Surnames, src => src.MapFrom(usr => usr.Apellidos))
                .ForMember(dst => dst.Email, src => src.MapFrom(usr => usr.Email))
                .ForMember(dst => dst.RoleId, src => src.MapFrom(usr => usr.RoleId))
                .ForMember(dst => dst.Active, src => src.MapFrom(usr => usr.Activo))
                .ForMember(dst => dst.Enterprise, src => src.MapFrom(usr => usr.Empresa.Nombre))
                .ForMember(dst => dst.EnterpriseId, src => src.MapFrom(usr => usr.EmpresaId));

            // Map UsuariosDTO to UsuariosDB
            CreateMap<UserDTO, Usuarios>()
                .ForMember(dst => dst.Id, src => src.MapFrom(usr => usr.Id))
                .ForMember(dst => dst.Usuario, src => src.MapFrom(usr => usr.Username))
                .ForMember(dst => dst.Clave, src => src.MapFrom(usr => usr.Password))
                .ForMember(dst => dst.Nombre, src => src.MapFrom(usr => usr.Name))
                .ForMember(dst => dst.Apellidos, src => src.MapFrom(usr => usr.Surnames))
                .ForMember(dst => dst.Email, src => src.MapFrom(usr => usr.Email))
                .ForMember(dst => dst.RoleId, src => src.MapFrom(usr => usr.RoleId))
                .ForMember(dst => dst.Activo, src => src.MapFrom(usr => usr.Active))
                .ForMember(dst => dst.EmpresaId, src => src.MapFrom(usr => usr.EnterpriseId));

            CreateMap<RegisterModelDTO, Usuarios>()
              .ForMember(dst => dst.Usuario, src => src.MapFrom(usr => usr.User))
              .ForMember(dst => dst.Clave, src => src.MapFrom(usr => usr.Password))
              .ForMember(dst => dst.Nombre, src => src.MapFrom(usr => usr.Name))
              .ForMember(dst => dst.Apellidos, src => src.MapFrom(usr => usr.Surname))
              .ForMember(dst => dst.RoleId, src => src.MapFrom(usr => usr.RoleId))
              .ForMember(dst => dst.Activo, src => src.MapFrom(usr => true));

            CreateMap<Usuarios, UserGridDTO>()
                .ForMember(dst => dst.Id, src => src.MapFrom(usr => usr.Id))
                .ForMember(dst => dst.Username, src => src.MapFrom(usr => usr.Usuario))
                .ForMember(dst => dst.Name, src => src.MapFrom(usr => usr.Nombre))
                .ForMember(dst => dst.Surnames, src => src.MapFrom(usr => usr.Apellidos))
                .ForMember(dst => dst.Email, src => src.MapFrom(usr => usr.Email))
                .ForMember(dst => dst.RoleName, src => src.MapFrom(usr => usr.Role.Nombre))
                .ForMember(dst => dst.Active, src => src.MapFrom(usr => usr.Activo));
            #endregion

            #region Roles
            CreateMap<Roles, RoleDTO>()
                .ForMember(dst => dst.Id, src => src.MapFrom(sc => sc.Id))
                .ForMember(dst => dst.Name, src => src.MapFrom(sc => sc.Nombre));
            #endregion

            #region Empresas
            CreateMap<Empresas, EnterpriseDTO>()
                .ForMember(dst => dst.Id, src => src.MapFrom(ent => ent.Id))
                .ForMember(dst => dst.Name, src => src.MapFrom(ent => ent.Nombre))
                .ForMember(dst => dst.Cif, src => src.MapFrom(ent => ent.Cif))
                .ForMember(dst => dst.RaxonSocial, src => src.MapFrom(ent => ent.RazonSocial))
                .ForMember(dst => dst.Active, src => src.MapFrom(ent => ent.Activo))
                .ForMember(dst => dst.ResponsableId, src => src.MapFrom(ent => ent.ResponsableId))
                .ForMember(dst => dst.Responsable, src => src.MapFrom(ent => ent.Responsable));
                

            CreateMap<EnterpriseDTO,Empresas>()
                .ForMember(dst => dst.Id, src => src.MapFrom(ent => ent.Id))
                .ForMember(dst => dst.Nombre, src => src.MapFrom(ent => ent.Name))
                .ForMember(dst => dst.Cif, src => src.MapFrom(ent => ent.Cif))
                .ForMember(dst => dst.RazonSocial, src => src.MapFrom(ent => ent.RaxonSocial))
                .ForMember(dst => dst.Activo, src => src.MapFrom(ent => ent.Active))
                .ForMember(dst => dst.ResponsableId, src => src.MapFrom(ent => ent.ResponsableId))
                .ForMember(dst => dst.Responsable, src => src.MapFrom(ent => ent.Responsable));

            #endregion
        }
    }
}
