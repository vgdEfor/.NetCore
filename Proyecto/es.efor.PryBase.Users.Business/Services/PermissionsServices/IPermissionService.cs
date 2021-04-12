using es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs;
using es.efor.PryBase.Infraestructure.DTO.UserDTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.PryBase.Users.Model.Services.PermissionsServices
{
    public interface IPermissionService
    {
        /// <summary>
        /// Returns the menu nodes for the user
        /// </summary>
        /// <param name="user">Selected user</param>
        /// <returns></returns>
        Task<MenuDTO> GetMenuByUser(string user);

        /// <summary>
        /// Returns all modules
        /// </summary>
        /// <returns></returns>
        Task<List<ModuleDTO>> GetAllModules();

        /// <summary>
        /// Returns all functionalities
        /// </summary>
        /// <returns></returns>
        Task<List<FunctionalityDTO>> GetAllFunctionalities();

        /// <summary>
        /// Returns all details
        /// </summary>
        /// <returns></returns>
        Task<List<DetailDTO>> GetAllDetails();

        /// <summary>
        /// Returns all the permission for the specified departments and level
        /// </summary>
        /// <param name="departments"></param>
        /// <param name="level"></param>
        /// <returns></returns>
        Task<List<PermissionDTO>> GetPermissions(string[] departments, int level);

        /// <summary>
        /// Returns the permission for the specified filter
        /// </summary>
        /// <param name="department"></param>
        /// <param name="level"></param>
        /// <param name="functionality"></param>
        /// <param name="detail"></param>
        /// <returns></returns>
        Task<PermissionDTO> GetPermissionByFilter(int department, int level, int functionality, int detail);

        /// <summary>
        /// Returns number of permissions by department Id
        /// </summary>
        /// <param name="departmentId">Department Id</param>
        /// <returns></returns>
        Task<int> GetPermissionsByDepartment(int departmentId);

        /// <summary>
        /// Saves the lines for a set of permissions to DB.
        /// </summary>
        /// <param name="permission">Department to save</param>
        /// <returns>Status of the task</returns>
        Task<bool> SetPermissions(List<PermissionDTO> permission);
    }
}
