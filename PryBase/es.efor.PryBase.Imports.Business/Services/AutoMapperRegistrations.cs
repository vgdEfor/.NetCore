using AutoMapper;
using es.efor.PryBase.Data.Database;
using es.efor.PryBase.Infraestructure.DTO.LogImportsDTOs;

namespace es.efor.PryBase.Imports.Model.Services
{
    public sealed class MapperProfileImports : Profile
    {
        public MapperProfileImports()
        {
            #region Employees
            //CreateMap<Employees, EmployeeDTO>();
            //CreateMap<EmployeeDTO, Employees>();
            #endregion

            #region LogImports
            CreateMap<LogImports, LogImportDTO>()
                .ForMember(dst => dst.Module, src => src.MapFrom(prov => prov.ModuleNavigation));
            CreateMap<LogImportDTO, LogImports>()
                .ForMember(dst => dst.Module, src => src.MapFrom(prov => prov.Module.Id));
            #endregion
        }
    }
}
