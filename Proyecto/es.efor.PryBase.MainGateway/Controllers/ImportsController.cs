using es.efor.PryBase.Imports.Model.Services.ImportServices;
using es.efor.PryBase.Imports.Model.Services.LogImportsServices;
using es.efor.PryBase.Infraestructure.DTO.LogImportsDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace es.efor.PryBase.MainGateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ImportsController : ControllerBase
    {
        #region Propiedades privadas
        private readonly ILogImportService _logImportService = null;
        private readonly IImportService _importService = null;
        private readonly ILogger _logger = null;
        #endregion

        #region Constructor
        public ImportsController(ILogImportService logImportService, IImportService importService,
            ILogger<ImportsController> logger)
        {
            this._logImportService = logImportService;
            this._importService = importService;

            this._logger = logger;
        }
        #endregion

        #region GET

        /// <summary>
        /// Returns a list of logs
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAll")]
        public async Task<ActionResult<List<LogImportDTO>>> GetAll()
        {
            try
            {
                return Ok(await this._logImportService.GetAll());
            }
            catch (Exception ex)
            {
                this._logger.LogError("Gateway.ImportsController.GetAll - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns a list of logs with filters
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetLogImports")]
        public async Task<ActionResult<List<LogImportDTO>>> GetLogImports(string dateFrom = "", string dateTo = "")
        {
            try
            {
                return Ok(await this._logImportService.GetLogImports(dateFrom, dateTo));
            }
            catch (Exception ex)
            {
                this._logger.LogError("Gateway.ImportsController.GetLogImports - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Returns LogImportDTO with the specified id
        /// </summary>
        /// <param name="id">Log ID to lookup</param>
        /// <returns></returns>
        [HttpGet("GetLogImportById")]
        public async Task<ActionResult<LogImportDTO>> GetLogImportById(int id)
        {
            try
            {
                if (id > 0)
                    return Ok(await this._logImportService.GetLogImportById(id));
                else
                    return NoContent();
            }
            catch (Exception ex)
            {
                this._logger.LogError("Gateway.ImportsController.GetLogImportById - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        /// <summary>
        /// Process to import files
        /// </summary>
        /// <returns></returns>
        [HttpGet("ImportFiles")]
        public async Task<ActionResult<bool>> ImportFiles(string path)
        {
            try
            {
                return Ok(await this._importService.ImportEmployees(path));
            }
            catch (Exception ex)
            {
                this._logger.LogError("Gateway.ImportsController.ImportFiles - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }

        #endregion

        #region POST
        /// <summary>
        /// Saves the log to DB. If the log already exist, update it
        /// </summary>
        /// <param name="log">Log to save</param>
        /// <returns>Status of the task</returns>
        [HttpPost("Set")]
        public async Task<ActionResult<bool>> SetLogImport([FromBody]LogImportDTO log)
        {
            try
            {
                return Ok(await this._logImportService.Set(log));
            }
            catch (Exception ex)
            {
                this._logger.LogError("Gateway.ImportsController.SetLogImport - Error: " + ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor. No se pudo procesar la solicitud.");
            }
        }
        #endregion
    }
}