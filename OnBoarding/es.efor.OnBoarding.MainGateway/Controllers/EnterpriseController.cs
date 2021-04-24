using es.efor.OnBoarding.Business.DTO.EnterpriseDTOs;
using es.efor.OnBoarding.Business.Services.EnterpriseServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using es.efor.OnBoarding.Business.DTO.FrontDTOs;
using es.efor.OnBoarding.Business.DTO.UsersDTOs;
using es.efor.Utilities.General;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace es.efor.OnBoarding.MainGateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EnterpriseController : ControllerBase
    {

        private readonly IEnterpriseService _EnterpriseService;

        public EnterpriseController(IEnterpriseService enterpriseService)
        {
            _EnterpriseService = enterpriseService;
        }

        /// <summary>
        /// Obtiene el listado de empresas de la aplicación
        /// </summary>
        /// <param name="Filters">filtros de búsqueda</param>
        /// <returns>Listado de empresas</returns>
        /// <response code="200">La solicitud ha ido correctamente</response>
        /// <response code="401">La empresa no ha iniciado sesión</response>
        
        [HttpPost("datatable")]
        [Authorize]
        [ProducesResponseType(typeof(CollectionList<EnterpriseGridDTO>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetDatatableEnterpriseAsync(
            [FromBody] DatatableDTO<EnterpriseFilterDTO> Filters)
        {
            Filters.filters ??= new EnterpriseFilterDTO();
            CollectionList<EnterpriseGridDTO> enterprises = await _EnterpriseService.Datatable(Filters.filters, Filters.pageIndex, Filters.pageSize, Filters.sortName, Filters.sortDescending);
            return Ok(enterprises);
        }

        /// <summary>
        /// Obtiene una empresa a partir de su Id
        /// </summary>
        /// <param name="id">Id de la empresa</param>
        /// <returns>Empresa especificada</returns>
        /// <response code="200">La solicitud ha ido correctamente</response>
        /// <response code="401">El usuario no ha iniciado sesión</response>
        /// <response code="404">No se ha encontrado la empresa especificada</response>
        [HttpGet("{id}")]
        [Authorize]
        [ProducesResponseType(typeof(EnterpriseDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetEnterpriseAsync(int id)
        {
            EnterpriseDTO enterprise = await _EnterpriseService.Get(id);
            if (enterprise != null)
            {
                return Ok(enterprise);
            }

            return NotFound();
        }

        /// <summary>
        /// Obtiene una empresa a partir de su nombre
        /// </summary>
        /// <param name="name">Id de la empresa</param>
        /// <returns>Usuario especificada</returns>
        /// <response code="200">La solicitud ha ido correctamente</response>
        /// <response code="401">El usuario no ha iniciado sesión</response>
        /// <response code="404">No se ha encontrado la empresa especificada</response>
        [HttpGet("{id}")]
        [Authorize]
        [ProducesResponseType(typeof(EnterpriseDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetEnterpriseAsync(string name)
        {
            EnterpriseDTO enterprise = await _EnterpriseService.Get(name);
            if (enterprise != null)
            {
                return Ok(enterprise);
            }

            return NotFound();
        }

        /// <summary>
        /// Guarda los datos de una empresa
        /// </summary>
        /// <param name="enterprise">Datos de la empresa</param>
        /// <returns>Booleano con el resultado de la solicitud</returns>
        /// <response code="200">La solicitud ha ido correctamente</response>
        /// <response code="400">Los datos de la empresa no son correctos</response>
        /// <response code="401">El usuario no ha iniciado sesión</response>
        [HttpPost]
        [Authorize]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> SaveEnterpriseAsync([FromBody] EnterpriseDTO enterprise)
        {

            //Comprobar empresa disponible
            EnterpriseDTO enterpriseExists = await _EnterpriseService.Get(enterprise.Id);
            if (enterpriseExists != null)
            {
                if (enterpriseExists.Id != enterprise.Id)
                {
                    ModelState.AddModelError("Enterprise", "API.ERROR.USER.USERNAME.UNAVAILABLE");
                    return BadRequest(ModelState);
                }
            }

            /*//Comprobar contraseña
            if (user.Id == 0 && string.IsNullOrEmpty(user.Password))
            {
                ModelState.AddModelError("Password", "API.ERROR.USER.PASSWORD.REQUIRED");
                return BadRequest(ModelState);
            }*/

            bool resp = await _EnterpriseService.Set(enterpriseExists);
            return Ok(resp);
        }

        /// <summary>
        /// Elimina una empresa
        /// </summary>
        /// <param name="Id">Id de la empresa</param>
        /// <returns>>Booleano con el resultado de la solicitud</returns>
        /// <response code="200">La solicitud ha ido correctamente</response>
        /// <response code="401">El usuario no ha iniciado sesión</response>
        /// <response code="404">No se ha encontrado la empresa</response>   
        [HttpDelete]
        [Authorize]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteEnterpriseAsync(int Id)
        {
            EnterpriseDTO user = await _EnterpriseService.Get(Id);

            if (user != null)
            {
                bool success = await _EnterpriseService.Delete(Id);
                return Ok(success);
            }

            return NotFound();
        }
    }
}
