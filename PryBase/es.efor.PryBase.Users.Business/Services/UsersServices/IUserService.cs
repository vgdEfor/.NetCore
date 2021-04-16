using es.efor.PryBase.Infraestructure.DTO.UserDTOs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace es.efor.PryBase.Users.Model.Services
{
    public interface IUserService
    {
        /// <summary>
        /// Returns user of Active Directory
        /// </summary>
        /// <param name="samAccountName"></param>
        /// <returns></returns>
        Task<ADUserDTO> GetAdUser(string samAccountName);

        /// <summary>
        /// Returns a list of registered users
        /// </summary>
        /// <returns></returns>
        Task<List<UserDTO>> GetAllUsers();

        /// <summary>
        /// Returns userDTO for the username specified
        /// </summary>
        /// <param name="user">Username to lookup</param>
        /// <returns></returns>
        Task<UserDTO> GetUserByName(string user);

        /// <summary>
        /// Returns userDTO for the user with the specified id
        /// </summary>
        /// <param name="id">User ID to lookup</param>
        /// <returns></returns>
        Task<UserDTO> GetUserById(Guid id);

        /// <summary>
        /// Returns number of users by department Id
        /// </summary>
        /// <param name="departmentId">Department Id</param>
        /// <returns></returns>
        Task<int> GetUsersByDepartment(int departmentId);

        /// <summary>
        /// Get all Active Directory users
        /// </summary>
        /// <returns></returns>
        Task<List<ADUserDTO>> GetAllAD(string ADGroup);

        /// <summary>
        /// Returns all departments
        /// </summary>
        /// <returns></returns>
        Task<List<UserDepartmentDTO>> GetAllDepartments();

        /// <summary>
        /// Returns all levels
        /// </summary>
        /// <returns></returns>
        Task<List<UserLevelDTO>> GetAllLevels();

        /// <summary>
        /// Saves the user to DB. If the user already exist, update it
        /// </summary>
        /// <param name="user">User to save</param>
        /// <returns>Status of the task</returns>
        Task<bool> SetUser(UserDTO user);

        /// <summary>
        /// Returns UserDepartmentDTO for the department with the specified id
        /// </summary>
        /// <param name="id">Department ID to lookup</param>
        /// <returns></returns>
        Task<UserDepartmentDTO> GetDepartmentById(int id);

        /// <summary>
        /// Saves the department to DB. If the department already exist, update it
        /// </summary>
        /// <param name="department">Department to save</param>
        /// <returns>Status of the task</returns>
        Task<bool> SetDepartment(UserDepartmentDTO department);

        /// <summary>
        /// Returns UserLevelDTO for the level with the specified id
        /// </summary>
        /// <param name="id">Level ID to lookup</param>
        /// <returns></returns>
        Task<UserLevelDTO> GetLevelById(int id);

        /// <summary>
        /// Logic delete the user from DB. 
        /// </summary>
        /// <param name="id">User ID to delete</param>
        /// <param name="username">Username that requests the delete</param>
        /// <returns>Status of the task</returns>
        Task<bool> DeleteUser(Guid id, string username);

        /// <summary>
        /// Logic delete the department from DB. 
        /// </summary>
        /// <param name="id">Department ID to delete</param>
        /// <param name="username">Username that requests the delete</param>
        /// <returns>Status of the task</returns>
        Task<bool> DeleteDepartment(int id, string username);
    }
}
