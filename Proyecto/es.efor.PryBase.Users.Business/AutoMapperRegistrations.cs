using AutoMapper;
using es.efor.PryBase.Data.Database;
using es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs;
using es.efor.PryBase.Infraestructure.DTO.UserDTOs;

namespace es.efor.PryBase.Users.Model
{
    public sealed class MapperProfileUsers : Profile
    {
        public MapperProfileUsers()
        {
            #region Users
            CreateMap<User, UserDTO>()
                .ForMember(dst => dst.Department, src => src.MapFrom(prov => prov.DepartmentNavigation))
                .ForMember(dst => dst.Level, src => src.MapFrom(prov => prov.LevelNavigation));

            CreateMap<UserDTO, User>()
                .ForMember(dst => dst.Department, src => src.MapFrom(prov => prov.Department.Id))
                .ForMember(dst => dst.Level, src => src.MapFrom(prov => prov.Level.Id));
            #endregion

            #region Department
            CreateMap<UserDepartment, UserDepartmentDTO>();
            CreateMap<UserDepartmentDTO, UserDepartment>();
            #endregion

            #region Level
            CreateMap<UserLevel, UserLevelDTO>();
            CreateMap<UserLevelDTO, UserLevel>();
            #endregion

            #region Permissions
            CreateMap<Modules, ModuleDTO>();
            CreateMap<ModuleDTO, Modules>();

            CreateMap<Functionalities, FunctionalityDTO>()
                .ForMember(dst => dst.Module, src => src.MapFrom(prov => prov.ModuleNavigation)); ;
            CreateMap<FunctionalityDTO, Functionalities>()
                .ForMember(dst => dst.Module, src => src.MapFrom(prov => prov.Module.Id));

            CreateMap<Details, DetailDTO>()
               .ForMember(dst => dst.Functionality, src => src.MapFrom(prov => prov.FunctionalityNavigation));
            CreateMap<DetailDTO, Details>()
                .ForMember(dst => dst.Functionality, src => src.MapFrom(prov => prov.Functionality.Id));

            CreateMap<Permissions, PermissionDTO>()
               .ForMember(dst => dst.Department, src => src.MapFrom(prov => prov.DepartmentNavigation))
               .ForMember(dst => dst.Level, src => src.MapFrom(prov => prov.LevelNavigation))
               .ForMember(dst => dst.Functionality, src => src.MapFrom(prov => prov.FunctionalityNavigation))
               .ForMember(dst => dst.Detail, src => src.MapFrom(prov => prov.DetailNavigation));
            CreateMap<PermissionDTO, Permissions>()
               .ForMember(dst => dst.Department, src => src.MapFrom(prov => prov.Department.Id))
               .ForMember(dst => dst.Level, src => src.MapFrom(prov => prov.Level.Id))
               .ForMember(dst => dst.Functionality, src => src.MapFrom(prov => prov.Functionality.Id))
               .ForMember(dst => dst.Detail, src => src.MapFrom(prov => prov.Detail.Id));
            #endregion
        }
    }
}
