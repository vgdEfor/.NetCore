using es.efor.PryBase.Infraestructure.DTO.LogImportsDTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace es.efor.PryBase.Imports.Model.Services.LogImportsServices
{
    public interface ILogImportService
    {
        /// <summary>
        /// Returns a list of logs
        /// </summary>
        /// <returns></returns>
        Task<List<LogImportDTO>> GetAll();

        /// <summary>
        /// Returns a list of logs with filter
        /// </summary>
        /// <returns></returns>
        Task<List<LogImportDTO>> GetLogImports(string dateFrom, string dateTo);

        /// <summary>
        /// Returns LogImportDTO with the specified id
        /// </summary>
        /// <param name="id">Log ID to lookup</param>
        /// <returns></returns>
        Task<LogImportDTO> GetLogImportById(int id);

        /// <summary>
        /// Saves the log to DB. If the log already exist, update it
        /// </summary>
        /// <param name="logImport">Log to save</param>
        /// <returns>Status of the task</returns>
        Task<bool> Set(LogImportDTO logImport);

    }
}
