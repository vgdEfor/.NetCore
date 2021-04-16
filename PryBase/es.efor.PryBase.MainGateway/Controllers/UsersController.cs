using es.efor.PryBase.Infraestructure.DTO.PermissionsDTOs;
using es.efor.PryBase.Infraestructure.DTO.UserDTOs;
using es.efor.PryBase.Users.Model.Services;
using es.efor.PryBase.Users.Model.Services.PermissionsServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es.efor.PryBase.MainGateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        #region Propiedades privadas
        private readonly IUserService _usersService = null;
        private readonly IPermissionService _permissionService = null;
        private readonly IConfiguration _Configuration = null;
        private readonly ILogger _Logger = null;
        #endregion

        #region Constructor
        public UsersController(IUserService usersService, IPermissionService permissionService, IConfiguration configuration,
            ILogger<UsersController> logger)
        {
            this._usersService = usersService;
            this._permissionService = permissionService;
            _Configuration = configuration;

            this._Logger = logger;
        }
        #endregion

        #region GET

        /// <summary>
        /// Returns a list of registered users
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllUsers")]
        public async Task<ActionResult<List<UserDTO>>> GetAllUsers()
        {
            try
            {
                return Ok(await this._usersService.GetAllUsers());
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetAllUsers - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns userDTO for the username specified
        /// </summary>
        /// <param name="user">Username to lookup</param>
        /// <returns></returns>
        [HttpGet("GetUserByName")]
        public async Task<ActionResult<UserDTO>> GetUserByName(string user)
        {
            try
            {
                if (!string.IsNullOrEmpty(user))
                {
                    return Ok(await this._usersService.GetUserByName(user));
                }
                else
                {
                    return NoContent();
                }
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetUserByName - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns userDTO for the user with the specified id
        /// </summary>
        /// <param name="id">User ID to lookup</param>
        /// <returns></returns>
        [HttpGet("GetUserById")]
        public async Task<ActionResult<UserDTO>> GetUserById(Guid id)
        {
            try
            {
                if (id != Guid.Empty)
                    return Ok(await this._usersService.GetUserById(id));
                else
                    return NoContent();
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetUserById - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns a number of users by department Id
        /// </summary>
        /// <param name="departmentId">Department Id</param>
        /// <returns></returns>
        [HttpGet("GetUsersByDepartment")]
        public async Task<int> GetUsersByDepartment(int departmentId)
        {
            try
            {
                if (departmentId > 0)
                    return await this._usersService.GetUsersByDepartment(departmentId);
                else
                    return 0;
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetUsersByDepartment - Error: " + ex.Message);
                return 0;
            }
        }

        /// <summary>
        /// Return list of all users of Active Directory
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllADUsers")]
        public async Task<ActionResult<List<string>>> GetAllADUsers()
        {
            try
            {
                string ADGroup = _Configuration.GetValue<string>("ADGroup");
                if (String.IsNullOrEmpty(ADGroup))
                    throw new Exception("No existe un grupo de AD configurado en appsettings. Por favor, revise su configuración.");

                List<ADUserDTO> adUser = await this._usersService.GetAllAD(ADGroup);
                if (adUser.Count == 0)
                    throw new Exception("No existen usuarios para el grupo de AD configurado en appsettings. Por favor, revise su configuración.");

                List<string> stringAD = new List<string>();
                foreach (ADUserDTO _adUser in adUser)
                {
                    stringAD.Add(_adUser.DisplayName + ", " + _adUser.SamAccountName + "##" + _adUser.SamAccountName);
                }

                return Ok(stringAD);
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetAllAD - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns the menu nodes for the user
        /// </summary>
        /// <param name="user">Selected user</param>
        /// <returns></returns>
        [HttpGet("GetMenuByUser")]
        public async Task<ActionResult<MenuDTO>> GetMenuByUser(string user)
        {
            try
            {
                if (!string.IsNullOrEmpty(user))
                    return Ok(await this._permissionService.GetMenuByUser(user));
                else
                    return Ok();
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetMenuByUser - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns all departments
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllDepartments")]
        public async Task<ActionResult<List<UserDepartmentDTO>>> GetAllDepartments()
        {
            try
            {
                return Ok(await this._usersService.GetAllDepartments());
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetAllDepartments - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns all levels
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllLevels")]
        public async Task<ActionResult<List<UserLevelDTO>>> GetAllLevels()
        {
            try
            {
                return Ok(await this._usersService.GetAllLevels());
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetAllLevels - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns UserDepartmentDTO for the department with the specified id
        /// </summary>
        /// <param name="id">Department ID to lookup</param>
        /// <returns></returns>
        [HttpGet("GetDepartmentById")]
        public async Task<ActionResult<UserDepartmentDTO>> GetDepartmentById(int id)
        {
            try
            {
                return Ok(await this._usersService.GetDepartmentById(id));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetDepartmentById - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns UserLevelDTO for the level with the specified id
        /// </summary>
        /// <param name="id">Level ID to lookup</param>
        /// <returns></returns>
        [HttpGet("GetLevelById")]
        public async Task<ActionResult<UserLevelDTO>> GetLevelById(int id)
        {
            try
            {
                return Ok(await this._usersService.GetLevelById(id));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetLevelById - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns all modules
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllModules")]
        public async Task<ActionResult<List<ModuleDTO>>> GetAllModules()
        {
            try
            {
                return Ok(await this._permissionService.GetAllModules());
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetAllModules - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns all functionalities
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllFunctionalities")]
        public async Task<ActionResult<List<FunctionalityDTO>>> GetAllFunctionalities()
        {
            try
            {
                return Ok(await this._permissionService.GetAllFunctionalities());
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetAllFunctionalities - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns all details
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllDetails")]
        public async Task<ActionResult<List<DetailDTO>>> GetAllDetails()
        {
            try
            {
                return Ok(await this._permissionService.GetAllDetails());
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetAllDetails - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns the permission by filter
        /// </summary>
        /// <param name="department">Department to search permissions</param>
        /// <param name="level">Level to search permissions</param>
        /// <param name="functionality">Functionality to search permissions</param>
        /// <param name="detail">Detail to search permissions</param>
        /// <returns></returns>
        [HttpGet("GetPermissionByFilter")]
        public async Task<ActionResult<PermissionDTO>> GetPermissionByFilter(int department, int level, int functionality, int detail)
        {
            try
            {
                return Ok(await this._permissionService.GetPermissionByFilter(department, level, functionality, detail));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetPermissionByFilter - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns number of permissions by department Id
        /// </summary>
        /// <param name="departmentId">Department Id</param>
        /// <returns></returns>
        [HttpGet("GetPermissionsByDepartment")]
        public async Task<int> GetPermissionsByDepartment(int departmentId)
        {
            try
            {
                if (departmentId > 0)
                    return await this._permissionService.GetPermissionsByDepartment(departmentId);
                else
                    return 0;
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetPermissionsByDepartment - Error: " + ex.Message);
                return 0;
            }
        }
        #endregion

        #region POST

        /// <summary>
        /// Saves the user to DB. If the user already exist, update it
        /// </summary>
        /// <param name="user">User to save</param>
        /// <returns>Status of the task</returns>
        [HttpPost("SetUser")]
        public async Task<ActionResult<bool>> SetUser([FromBody]UserDTO user)
        {
            try
            {
                return Ok(await this._usersService.SetUser(user));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.Set - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Saves the department to DB. If the department already exist, update it
        /// </summary>
        /// <param name="department">Department to save</param>
        /// <returns>Status of the task</returns>
        [HttpPost("SetDepartment")]
        public async Task<ActionResult<bool>> SetDepartment([FromBody] UserDepartmentDTO department)
        {
            try
            {
                return Ok(await this._usersService.SetDepartment(department));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.SetDepartment - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns all the permission for the specified user
        /// </summary>
        /// <param name="departments">Department</param>
        /// <param name="level">Level to search permissions</param>
        /// <returns></returns>
        [HttpPost("GetPermissions")]
        public async Task<ActionResult<List<PermissionDTO>>> GetPermissions([FromBody]string[] departments, [FromQuery] int level)
        {
            try
            {
                return Ok(await this._permissionService.GetPermissions(departments, level));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.GetPermissions - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Saves the lines for a set of permissions to DB.
        /// </summary>
        /// <param name="permissions">Department to save</param>
        /// <returns>Status of the task</returns>
        [HttpPost("SetPermissions")]
        public async Task<ActionResult<bool>> SetPermissions([FromBody]List<PermissionDTO> permissions)
        {
            try
            {
                return Ok(await this._permissionService.SetPermissions(permissions));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.SetPermissions - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }
        #endregion

        #region DELETE

        /// <summary>
        /// Logic delete the user from DB. 
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Status of the task</returns>
        [HttpDelete("DeleteUser")]
        public async Task<ActionResult<bool>> DeleteUser(Guid id)
        {
            try
            {
                string user = User.Identity?.Name;
                if (user.Split("\\").Count() > 0)
                {
                    user = user.Split("\\")[1];
                }
                return Ok(await this._usersService.DeleteUser(id, user));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.Delete - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Logic delete the department from DB. 
        /// </summary>
        /// <param name="id">Department ID to delete</param>
        /// <returns>Status of the task</returns>
        [HttpDelete("DeleteDepartment")]
        public async Task<ActionResult<bool>> DeleteDepartment(int id)
        {
            try
            {
                string user = User.Identity?.Name;
                if (user.Split("\\").Count() > 0)
                {
                    user = user.Split("\\")[1];
                }
                return Ok(await this._usersService.DeleteDepartment(id, user));
            }
            catch (Exception ex)
            {
                this._Logger.LogError("Gateway.UsersController.DeleteDepartment - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        #endregion
    }
}