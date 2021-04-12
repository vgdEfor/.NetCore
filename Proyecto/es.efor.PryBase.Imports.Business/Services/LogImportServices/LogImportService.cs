using AutoMapper;
using es.efor.PryBase.Data.Context;
using es.efor.PryBase.Data.Database;
using es.efor.PryBase.Infraestructure.DTO.LogImportsDTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es.efor.PryBase.Imports.Model.Services.LogImportsServices
{
    public class LogImportService : ILogImportService
    {
        #region Propiedades privadas
        private PryBaseContext _NexusContext;
        private readonly IMapper _Mapper;
        private readonly ILogger _Logger;
        #endregion

        #region Constructor
        public LogImportService(PryBaseContext NexusContext, IMapper mapper, ILogger<LogImportService> logger)
        {
            this._NexusContext = NexusContext;
            this._Mapper = mapper;

            this._Logger = logger;
        }
        #endregion

        #region Miembros de IImportService
        /// <summary>
        /// Returns a list of logs
        /// </summary>
        /// <returns></returns>
        public async Task<List<LogImportDTO>> GetAll()
        {
            //List<LogImports> results = await _NexusContext.LogImports
            //    .Include(x => x.ModuleNavigation)
            //    .ToListAsync();
            //return _Mapper.Map<List<LogImportDTO>>(results);
            return null;
        }

        /// <summary>
        /// Returns a list of logs imports with filters
        /// </summary>
        /// <returns></returns>
        public async Task<List<LogImportDTO>> GetLogImports(string dateFrom = "", string dateTo = "")
        {
            //try
            //{
                //    IQueryable<LogImports> query = from x in _NexusContext.LogImports select x;

                //    //Date From
                //    if (!string.IsNullOrEmpty(dateFrom))
                //    {
                //        DateTime date = DateTime.Parse(dateFrom);
                //        query = query.Where(x => x.Date >= date);
                //    }

                //    //Date To
                //    if (!string.IsNullOrEmpty(dateTo))
                //    {
                //        DateTime date = DateTime.Parse(dateTo).AddHours(23).AddMinutes(59).AddSeconds(59);
                //        query = query.Where(x => x.Date <= date);
                //    }

                //    List<LogImports> results = await query.Include(x => x.ModuleNavigation)
                //                                          .ToListAsync();

                //    return _Mapper.Map<List<LogImportDTO>>(results);
                //}
                //catch (Exception ex)
                //{
                //    _Logger.LogError("LogImportService.GetLogImports - Error: " + ex.Message);
                //    return new List<LogImportDTO>();
                //}
                return null;
        }

        /// <summary>
        /// Returns LogImportDTO with the specified id
        /// </summary>
        /// <param name="id">Log ID to lookup</param>
        /// <returns></returns>
        public async Task<LogImportDTO> GetLogImportById(int id)
        {
            //LogImports results = await _NexusContext.LogImports
            //    .Include(x => x.ModuleNavigation)
            //    .SingleOrDefaultAsync(x => x.Id == id);

            //return _Mapper.Map<LogImportDTO>(results);
            return null;
        }

        /// <summary>
        /// Saves the log to DB. If the log already exist, update it
        /// </summary>
        /// <param name="logImport">Log to save</param>
        /// <returns>Status of the task</returns>
        public async Task<bool> Set(LogImportDTO logImport)
        {
            //bool Result = false;
            //try
            //{
            //    if (logImport == null)
            //        return Result;

            //    LogImports logDB = null;
            //    logDB = this._NexusContext.LogImports.SingleOrDefault(x => x.Id == logImport.Id);

            //    if (logDB == null)
            //    {
            //        this._NexusContext.Entry(logDB).CurrentValues.SetValues(_Mapper.Map<LogImports>(logImport));
            //        await this._NexusContext.SaveChangesAsync();
            //        Result = true;
            //    }
            //    else
            //    {
            //        logDB = _Mapper.Map<LogImports>(logImport);

            //        this._NexusContext.LogImports.Add(logDB);
            //        await this._NexusContext.SaveChangesAsync();
            //        Result = true;
            //    }
            //}
            //catch (Exception ex)
            //{
            //    _Logger.LogError("LogImportService.Set - Error: " + ex.Message);
            //    Result = false;
            //}
            //return Result;
            return true;
        }
        #endregion

        #region Metodos privados
        #endregion
    }
}
