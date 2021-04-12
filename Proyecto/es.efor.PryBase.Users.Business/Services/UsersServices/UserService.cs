using AutoMapper;
using es.efor.PryBase.Data.Context;
using es.efor.PryBase.Data.Database;
using es.efor.PryBase.Infraestructure.DTO.UserDTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;
using System.Linq;
using System.Threading.Tasks;

namespace es.efor.PryBase.Users.Model.Services.UsersServices
{
    public class UserService : IUserService
    {
        #region Propiedades privadas
        private PryBaseContext _NexusContext;
        private readonly IMapper _Mapper;
        private readonly ILogger log = null;
        #endregion

        #region Constructor
        public UserService(PryBaseContext NexusContext, IMapper mapper,
            ILogger<UserService> logger)
        {
            this._NexusContext = NexusContext;
            this._Mapper = mapper;
        }
        #endregion

        #region Miembros de IUsersService
        /// <summary>
        /// Returns user of Active Directory
        /// </summary>
        /// <param name="samAccountName"></param>
        /// <returns></returns>
        public Task<ADUserDTO> GetAdUser(string samAccountName)
        {
            return Task.Run(() =>
            {
                try
                {
                    PrincipalContext context = new PrincipalContext(ContextType.Domain);
                    UserPrincipal principal = new UserPrincipal(context);

                    if (context != null)
                        principal = UserPrincipal.FindByIdentity(context, IdentityType.SamAccountName, samAccountName);

                    return ADUserDTO.CastToAdUser(principal);
                }
                catch (Exception ex)
                {
                    log.LogError("UserService.GetAdUser - Error: " + ex.Message);
                    throw new Exception("Error retrieving AD User", ex);
                }
            });
        }

        /// <summary>
        /// Returns a list of registered users
        /// </summary>
        /// <returns></returns>
        public async Task<List<UserDTO>> GetAllUsers()
        {
            /*List<User> results = await _NexusContext.User
                .Where(x => x.DeleteDate == null && x.Id != Guid.Empty)
                .Include(x => x.DepartmentNavigation)
                .Include(x => x.LevelNavigation)
                .ToListAsync();

            return _Mapper.Map<List<UserDTO>>(results);*/
            return null;

        }

        /// <summary>
        /// Returns userDTO for the username specified
        /// </summary>
        /// <param name="user">Username to lookup</param>
        /// <returns></returns>
        public async Task<UserDTO> GetUserByName(string user)
        {
            //User results = await _NexusContext.User
            //    .Include(x => x.DepartmentNavigation)
            //    .Include(x => x.LevelNavigation)
            //    .SingleOrDefaultAsync(x => x.Name == user && x.DeleteDate == null);

            //return _Mapper.Map<UserDTO>(results);
            return null;
        }

        /// <summary>
        /// Returns userDTO for the user with the specified id
        /// </summary>
        /// <param name="id">User ID to lookup</param>
        /// <returns></returns>
        public async Task<UserDTO> GetUserById(Guid id)
        {
            //User results = await _NexusContext.User
            //    .Include(x => x.DepartmentNavigation)
            //    .Include(x => x.LevelNavigation)
            //    .SingleOrDefaultAsync(x => x.Id == id && x.DeleteDate == null);

            //return _Mapper.Map<UserDTO>(results);
            return null;
        }

        /// <summary>
        /// Returns number of users by department Id
        /// </summary>
        /// <param name="departmentId">Department Id</param>
        /// <returns></returns>
        public async Task<int> GetUsersByDepartment(int departmentId)
        {
            //List<User> users = await _NexusContext.User.Where(x => x.Department == departmentId).ToListAsync();

            // return users.Count;

            return 0;

        }

        /// <summary>
        /// Return all users of AD
        /// </summary>
        /// <returns></returns>
        public Task<List<ADUserDTO>> GetAllAD(string ADGroup)
        {
            return this.GetDomainUsers(ADGroup);
        }

        /// <summary>
        /// Returns all departments
        /// </summary>
        /// <returns></returns>
        public async Task<List<UserDepartmentDTO>> GetAllDepartments()
        {
            //List<UserDepartment> department = await _NexusContext.UserDepartment.Where(x => x.Id != 1 && x.DeleteDate == null).ToListAsync();
            //return _Mapper.Map<List<UserDepartmentDTO>>(department);
            return null;
        }

        /// <summary>
        /// Returns all levels
        /// </summary>
        /// <returns></returns>
        public async Task<List<UserLevelDTO>> GetAllLevels()
        {
            //List<UserLevel> levels = await _NexusContext.UserLevel.ToListAsync();
            //return _Mapper.Map<List<UserLevelDTO>>(levels); ;
            return null;
        }

        /// <summary>
        /// Saves the user to DB. If the user already exist, update it
        /// Search for the user is by Name or ID
        /// </summary>
        /// <param name="user">User to save</param>
        /// <returns>Status of the task</returns>
        public async Task<bool> SetUser(UserDTO user)
        {
            //    bool Result = false;

            //    try
            //    {
            //        User userDB = _NexusContext.User.SingleOrDefault(x => (x.Name == user.Name || x.Id == user.Id));
            //        if (userDB == null)
            //        {
            //            User userEntity = _Mapper.Map<User>(user);
            //            _NexusContext.User.Add(userEntity);
            //        }
            //        else
            //        {
            //            if (userDB.DeleteDate != null)
            //            {
            //                userDB.DeleteDate = null;
            //                userDB.DeleteUser = null;
            //                _NexusContext.Update(userDB);
            //                _NexusContext.SaveChanges();
            //            }

            //            user.Id = userDB.Id;
            //            _NexusContext.Entry(userDB).CurrentValues.SetValues(_Mapper.Map<User>(user));
            //        }

            //        await _NexusContext.SaveChangesAsync();
            //        Result = true;

            //    }
            //    catch (Exception ex)
            //    {
            //        log.LogError("UserService.Set - Error: " + ex.Message);
            //        Result = false;
            //    }
            //    return Result;
            return false;
        }

        /// <summary>
        /// Returns UserDepartmentDTO for the department with the specified id
        /// </summary>
        /// <param name="id">Department ID to lookup</param>
        /// <returns></returns>
        public async Task<UserDepartmentDTO> GetDepartmentById(int id)
        {
            //UserDepartment results = await _NexusContext.UserDepartment.SingleOrDefaultAsync(x => x.Id == id);
            //return _Mapper.Map<UserDepartmentDTO>(results);
            return null;
        }

        /// <summary>
        /// Saves the department to DB. If the department already exist, update it
        /// </summary>
        /// <param name="department">Department to save</param>
        /// <returns>Status of the task</returns>
        public async Task<bool> SetDepartment(UserDepartmentDTO department)
        {
            bool Result = false;

            //try
            //{
            //    UserDepartment departmentDB = this._NexusContext.UserDepartment.SingleOrDefault(x => x.Id == department.Id);
            //    if (departmentDB == null)
            //    {
            //        departmentDB = _Mapper.Map<UserDepartment>(department);
            //        _NexusContext.UserDepartment.Add(departmentDB);
            //    }
            //    else
            //    {
            //        _NexusContext.Entry(departmentDB).CurrentValues.SetValues(_Mapper.Map<UserDepartment>(department));
            //    }

            //    await _NexusContext.SaveChangesAsync();
            //    Result = true;
            //}
            //catch (Exception ex)
            //{
            //    log.LogError("UserService.SetDepartment - Error: " + ex.Message);
            //    Result = false;
            //}
            return Result;
        }

        /// <summary>
        /// Returns UserLevelDTO for the level with the specified id
        /// </summary>
        /// <param name="id">Level ID to lookup</param>
        /// <returns></returns>
        public async Task<UserLevelDTO> GetLevelById(int id)
        {
            //UserLevel results = await _NexusContext.UserLevel.SingleOrDefaultAsync(x => x.Id == id);
            //return _Mapper.Map<UserLevelDTO>(results);
            return null;
        }

        /// <summary>
        /// Logic delete the user from DB. 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="username">Username that requests the delete</param>
        /// <returns>Status of the task</returns>
        public async Task<bool> DeleteUser(Guid id, string username)
        {
            bool Result = false;

            //try
            //{
            //    User userDB = _NexusContext.User.SingleOrDefault(x => x.Id == id);
            //    if (userDB != null)
            //    {
            //        userDB.DeleteDate = DateTime.Now;
            //        userDB.DeleteUser = username;
            //        _NexusContext.Update(userDB);
            //        await _NexusContext.SaveChangesAsync();
            //        Result = true;
            //    }
            //}
            //catch (Exception ex)
            //{
            //    log.LogError("UserService.Delete - Error: " + ex.Message);
            //    Result = false;
            //}
            return Result;
        }

        /// <summary>
        /// Logic delete the department from DB. 
        /// </summary>
        /// <param name="id">Department ID to delete</param>
        /// <param name="username">Username that requests the delete</param>
        /// <returns>Status of the task</returns>
        public async Task<bool> DeleteDepartment(int id, string username)
        {
            bool Result = false;

            //try
            //{
            //    UserDepartment departmentDB = _NexusContext.UserDepartment.SingleOrDefault(x => x.Id == id);
            //    if (departmentDB != null)
            //    {
            //        departmentDB.DeleteDate = DateTime.Now;
            //        departmentDB.DeleteUser = username;
            //        _NexusContext.Update(departmentDB);
            //        await _NexusContext.SaveChangesAsync();
            //        Result = true;
            //    }
            //}
            //catch (Exception ex)
            //{
            //    log.LogError("UserService.DeleteDepartment - Error: " + ex.Message);
            //    Result = false;
            //}
            return Result;
        }
        #endregion

        #region Metodos privados
        /// <summary>
        /// Returns a list of domain users
        /// </summary>
        /// <returns></returns>
        private Task<List<ADUserDTO>> GetDomainUsers(string ADGroup)
        {
            List<ADUserDTO> users = new List<ADUserDTO>();

            return Task.Run(() =>
            {
                PrincipalContext context = new PrincipalContext(ContextType.Domain);
                GroupPrincipal GP = GroupPrincipal.FindByIdentity(context, ADGroup);
                if (GP == null)
                    return users;

                foreach (Principal P in GP.Members)
                {
                    ADUserDTO user = new ADUserDTO();
                    user.DisplayName = P.DisplayName;
                    user.DistinguishedName = P.DistinguishedName;
                    user.Guid = P.Guid;
                    user.Name = P.Name;
                    user.SamAccountName = P.SamAccountName;

                    users.Add(user);
                }

                return users.OrderBy(x => x.Name).ToList();
            });
        }

        #endregion
    }
}
