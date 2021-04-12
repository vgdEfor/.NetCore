using AutoMapper;
using es.efor.PryBase.Employees.Business.Services.Employees;
using es.efor.PryBase.Infraestructure.Database;
using es.efor.PryBase.Infraestructure.DTO.Employees;
using es.efor.Utilities.Database.Models;
using es.efor.Utilities.General;
using es.efor.Utilities.Linq.Models.Filters;
using es.efor.Utilities.Linq.Models.Sorts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es.efor.PryBase.MainGateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : Utilities.Web.Controllers.BaseEforController
    {
        IEmployeesService employeesSV;
        public EmployeesController(IAuthorizationService authService, IMapper mapper,
            IEmployeesService employeesService
            )
            : base(authService, mapper)
        {
            employeesSV = employeesService;
        }

        #region GET
        /// <summary>
        /// Obtiene un empleado con la id seleccionada
        /// </summary>
        /// <param name="id">ID del empleado a buscar</param>
        /// <returns></returns>
        [HttpGet("GetById")]
        [ProducesResponseType(typeof(Employee), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await employeesSV.GetByIdAsync(id);
            return Ok(result);

        }

        /// <summary>
        /// Obtiene la lista de empleados
        /// </summary>
        /// <returns></returns>
        [HttpPost("GetList")]
        [ProducesResponseType(typeof(CollectionList<Employee>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetList()
        {
            var result = employeesSV.GetList();
            return Ok(result);
        }

        /// <summary>
        /// Obtiene la lista de empleados
        /// </summary>
        /// <returns></returns>
        [HttpPost("GetListCompleta")]
        [ProducesResponseType(typeof(CollectionList<Employee>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetListCompleta()
        {
            var result = employeesSV.GetCollectionListB();
            return Ok(result);
        }

        [HttpGet ("positionlist")]
        [ProducesResponseType(typeof(IEnumerable<LabelAndValue<int>>), StatusCodes.Status200OK)]
        public IActionResult GetEnumCodTypes()
        {
            var enums = EnumHelper.GetEnumValues<Position_Enum>().ToList();

            //return Ok(enums);
            var result = enums.Select(e => new LabelAndValue<int>(e.GetDescription(), (int)e, data: e));
            return Ok(result);
        }

        [HttpPost("datatable")]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(CollectionList<Employee>), StatusCodes.Status200OK)]
        //[AuthorizeExtended(Policies = new string[] { nameof(PostPolicies.PostList), nameof(PostPolicies.PostListOwner) })]
        public async Task<IActionResult> GetDatatableAsync(
            [FromBody] IEnumerable<FilterCriteria> filters,
            [FromQuery(Name = "pi")] int pageIndex = 0, [FromQuery(Name = "ps")] int pageSize = 20,
            [FromQuery(Name = "sn")] string sortName = null, [FromQuery(Name = "sd")] bool sortDescending = false)
        {
            var sorts = new List<SortCriteria>();

            if (!string.IsNullOrEmpty(sortName))
                sorts.Add(new SortCriteria() { Field = sortName, SortOp = sortDescending ? SortOperator.Descending : SortOperator.Ascending });
            else
            
            {
                sorts.Add(new SortCriteria() { Field = nameof(Employee.Name), SortOp = SortOperator.Ascending });
                sorts.Add(new SortCriteria() { Field = nameof(Employee.Surname), SortOp = SortOperator.Ascending });
            }
            var result = employeesSV.GetCollectionList(filters, pageIndex, pageSize, sorts);

            if (result.Total == 0)
                return NotFound(result);

            return Ok(result);
        }

        /// <summary>
        /// Obtiene la lista de empleados filtrada por name Contains
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetListCombolist")]
        [ProducesResponseType(typeof(List<Employee>), StatusCodes.Status200OK)]

        public async Task<IActionResult> GetListCombolist(string filtro)
        {
            var result = employeesSV.GetComboList(filtro);
            return Ok(result);
        }


        #endregion

        #region POST

        /// <summary>
        /// Crea un nuevo empleado en la BD
        /// </summary>
        /// <param name="data">Datos del nuevo empleado</param>
        /// <param name="commit">Establece si se hara un commit en la BD</param>
        /// <returns>Devuelve los datos del nuevo empleado</returns>
        [HttpPost("Insert")]
        [ProducesResponseType(typeof(Employee), StatusCodes.Status200OK)]
        public async Task<IActionResult> Insert([FromBody] Employee data, bool commit = true)
        {
            if (!ModelState.IsValid)
            {
                // Errores en el modelo
                return BadRequest(ModelState);
            }

            if (ControlErrores(data))
            {
                return BadRequest(ModelState);
            }

            var result = await employeesSV.InsertAsync(data, commit);
            return Ok(result);
        }

        /// <summary>
        /// Busca al antiguo empleado en la BD y actualiza sus datos
        /// </summary>
        /// <param name="data">Datos del nuevo empleado</param>
        /// <param name="commit">Establece si se hara un commit en la BD</param>
        /// <returns>Devuelve los datos del nuevo empleado</returns>
        [HttpPost("Update")]
        [ProducesResponseType(typeof(Employee), StatusCodes.Status200OK)]
        public async Task<IActionResult> Update([FromBody] Employee data, bool commit = true)
        {

            if (!ModelState.IsValid)
            {
                // Errores en el modelo
                return BadRequest(ModelState);
            }

            if (ControlErrores(data))
            {
                return BadRequest(ModelState);
            }

            var result = await employeesSV.UpdateAsync(data, commit);
            return Ok(result);
        }

        #endregion

        /// <summary>
        /// Borra un empleado de la BD
        /// </summary>
        /// <param name="id">ID del empleado a borrar</param>
        /// <param name="commit">Establece si se hara un commit en la BD</param>
        /// <returns>Devuelve los datos del antiguo empleado</returns>
        #region DELETE
        [HttpDelete("Delete")]
        [ProducesResponseType(typeof(Employee), StatusCodes.Status200OK)]
        public async Task<IActionResult> Delete(int id, bool commit = true)
        {
            var result = await employeesSV.DeleteAsync(id, commit);
            return Ok(result);
        }
        #endregion

        /// <summary>
        /// Validaciones extra del modelo de datos
        /// </summary>
        /// <param name="data">Datos del empleado</param>
        /// <returns>Devuelve si ha habido o no errores adicionales</returns>
        [NonAction]
        public bool ControlErrores(Employee data)
        {
            bool errores = false;

            // La fecha de nacimiento debe ser inferior a la de comienzo
            if (data.Dbirth >= data.Dstart)
            {
                ModelState.AddModelError("rangofechas", "La fecha de nacimiento debe ser inferior a la de comienzo.");
                errores = true;
            }

            return errores;
        }

    }


}
