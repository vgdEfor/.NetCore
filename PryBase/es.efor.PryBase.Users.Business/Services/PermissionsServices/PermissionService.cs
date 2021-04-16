using AutoMapper;
using es.efor.PryBase.Data.Context;
using es.efor.PryBase.Data.Database;
using es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es.efor.PryBase.Users.Model.Services.PermissionsServices
{
    public class PermissionService : IPermissionService
    {
        #region Propiedades privadas

        private PryBaseContext _PryBaseContext;
        private readonly IMapper _Mapper;
        private readonly IUserService _usersService = null;
        private readonly ILogger log = null;
        #endregion

        #region Constructor
        public PermissionService(PryBaseContext PryBaseContext, IMapper mapper, IUserService usersService,
            ILogger<PermissionService> logger)
        {
            this._PryBaseContext = PryBaseContext;
            this._Mapper = mapper;
            this._usersService = usersService;

            this.log = logger;
        }
        #endregion

        #region Miembros de IPermissionService
        /// <summary>
        /// Returns the menu nodes for the user
        /// </summary>
        /// <param name="user">Selected user</param>
        /// <returns></returns>
        public async Task<MenuDTO> GetMenuByUser(string user)
        {
            MenuDTO result = new MenuDTO();
            try
            {
                if (!string.IsNullOrEmpty(user))
                {
                    /*int userDepartment = _PryBaseContext.User
                        .Include(x => x.DepartmentNavigation)
                        .SingleOrDefault(x => x.Name == user && x.DeleteDate == null)
                        .Department;


                    int userLevel = _PryBaseContext.User
                        .Include(x => x.LevelNavigation)
                        .SingleOrDefault(x => x.Name == user && x.DeleteDate == null)
                        .Level;


                    List<Permissions> permissions = await _PryBaseContext.Permissions
                        .Include(x => x.FunctionalityNavigation)
                        .Include(x => x.DetailNavigation)
                        .Where(x => x.Level == userLevel && x.Department == userDepartment && x.Enabled == true)
                        .ToListAsync();

                    foreach (Permissions _perm in permissions)
                    {
                        Functionalities functionality = _PryBaseContext.Functionalities
                        .Include(x => x.ModuleNavigation)
                        .Where(x => x.Id == _perm.Functionality)
                        .SingleOrDefault();

                        FunctionalityDTO func = _Mapper.Map<FunctionalityDTO>(functionality);
                        if (!result.Functionalities.Exists(x => x.Id == func.Id))
                            result.Functionalities.Add(func);

                        ModuleDTO mod = _Mapper.Map<ModuleDTO>(func.Module);
                        if (!result.Modules.Exists(x => x.Id == mod.Id))
                            result.Modules.Add(mod);
                    }

                    result.Modules.OrderBy(x => x.Id);
                    result.Functionalities.OrderBy(x => x.Id);

                    result.LoginDisplayName = this._usersService.GetAdUser(user).Result.DisplayName;*/
                }
            }
            catch (Exception ex)
            {
                log.LogError("UserService.GetUserMenu - Error: " + ex.Message);
            }
            return result;
        }

        /// <summary>
        /// Returns all modules
        /// </summary>
        /// <returns></returns>
        public async Task<List<ModuleDTO>> GetAllModules()
        {

            //List<Modules> modules = await _PryBaseContext.Modules.ToListAsync();
            // return _Mapper.Map<List<ModuleDTO>>(modules); ;
            return null;
        }

        /// <summary>
        /// Returns all functionalities
        /// </summary>
        /// <returns></returns>
        public async Task<List<FunctionalityDTO>> GetAllFunctionalities()
        {
            //List<Functionalities> functionalities = await _PryBaseContext.Functionalities.ToListAsync();
            //return _Mapper.Map<List<FunctionalityDTO>>(functionalities);
            return null;
        }

        /// <summary>
        /// Returns all details
        /// </summary>
        /// <returns></returns>
        public async Task<List<DetailDTO>> GetAllDetails()
        {
            //List<Details> details = await _PryBaseContext.Details.Include(x => x.FunctionalityNavigation).ToListAsync();
            //return _Mapper.Map<List<DetailDTO>>(details);
            return null;
        }

        /// <summary>
        /// Returns all permission for the specified department and level
        /// </summary>
        /// <param name="departments"></param>
        /// <param name="level"></param>
        /// <returns></returns>
        public async Task<List<PermissionDTO>> GetPermissions(string[] departments, int level)
        {
            //List<PermissionDTO> result = new List<PermissionDTO>();
            //try
            //{
            //    List<int> listDepartment = new List<int>();
            //    foreach (string x in departments[0].Split(','))
            //    {
            //        listDepartment.Add(Convert.ToInt32(x));
            //    }

            //    List<Permissions> permissions = await _PryBaseContext.Permissions
            //            .Include(x => x.DepartmentNavigation)
            //            .Include(x => x.LevelNavigation)
            //            .Include(x => x.FunctionalityNavigation)
            //            .Include(x => x.DetailNavigation)
            //            .Where(x => x.Level == level && listDepartment.Contains(x.Department) && x.Enabled == true)
            //            .OrderBy(x => x.Department)
            //            .ToListAsync();

            //    result = _Mapper.Map<List<PermissionDTO>>(permissions);
            //}
            //catch (Exception ex)
            //{
            //    log.LogError("PermissionService.GetPermissions - Error: " + ex.Message);
            //}
            //return result;
            return null;
        }

        /// <summary>
        /// Returns the permission for the specified filter
        /// </summary>
        /// <param name="department"></param>
        /// <param name="level"></param>
        /// <param name="functionality"></param>
        /// <param name="detail"></param>
        /// <returns></returns>
        public async Task<PermissionDTO> GetPermissionByFilter(int department, int level, int functionality, int detail)
        {
            //PermissionDTO result = new PermissionDTO();
            //try
            //{
            //    Permissions permission = await _PryBaseContext.Permissions
            //            .Include(x => x.DepartmentNavigation)
            //            .Include(x => x.LevelNavigation)
            //            .Include(x => x.FunctionalityNavigation)
            //            .Include(x => x.DetailNavigation)
            //            .Where(x => x.Level == level && x.Department == department && x.Functionality == functionality && x.Detail == detail)
            //            .SingleOrDefaultAsync();

            //    result = _Mapper.Map<PermissionDTO>(permission);
            //}
            //catch (Exception ex)
            //{
            //    log.LogError("PermissionService.GetPermissionByFilter - Error: " + ex.Message);
            //}
            //return result;
            return null;
        }

        /// <summary>
        /// Returns number of permissions by department Id
        /// </summary>
        /// <param name="departmentId">Department Id</param>
        /// <returns></returns>
        public async Task<int> GetPermissionsByDepartment(int departmentId)
        {
            //List<Permissions> permissions = await _PryBaseContext.Permissions.Where(x => x.Department == departmentId).ToListAsync();

            //return permissions.Count;
            return 0;
        }

        /// <summary>
        /// Saves the lines for a set of permissions to DB.
        /// </summary>
        /// <param name="permissions">Department to save</param>
        /// <returns>Status of the task</returns>
        public async Task<bool> SetPermissions(List<PermissionDTO> permissions)
        {
            //bool Result = false;

            //try
            //{
            //    if (permissions == null || permissions.Count == 0)
            //        return Result;

            //    foreach (PermissionDTO permission in permissions)
            //    {
            //        Permissions oldPermission = _PryBaseContext.Permissions.Where(x => x.Id == permission.Id).SingleOrDefault();
            //        if (oldPermission == null)
            //        {
            //            Permissions permissionDB = _Mapper.Map<PermissionDTO, Permissions>(permission);
            //            _PryBaseContext.Permissions.Add(permissionDB);
            //        }
            //        else
            //        {
            //            oldPermission.Enabled = permission.Enabled;
            //            _PryBaseContext.Permissions.Update(oldPermission);
            //        }
            //    }

            //    await this._PryBaseContext.SaveChangesAsync();
            //    Result = true;
            //}
            //catch (Exception ex)
            //{
            //    log.LogError("PermissionService.SetPermissions - Error: " + ex.Message);
            //    Result = false;
            //}
            //return Result;
            return true;
        }

        #endregion

    }
}
