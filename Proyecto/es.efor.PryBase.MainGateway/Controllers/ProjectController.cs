using AutoMapper;
using es.efor.PryBase.Infraestructure.Database;
using es.efor.PryBase.Employees.Business.Services.Employees;
using es.efor.PryBase.Employees.Business.Services.Projects;
using es.efor.Utilities.General;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using es.efor.Utilities.Linq.Models.Filters;
using static es.efor.PryBase.Infraestructure.DTO.Employees.ProjectDTO;
using es.efor.Utilities.Linq.Models.Sorts;
using es.efor.Utilities.Database.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace es.efor.PryBase.MainGateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : Utilities.Web.Controllers.BaseEforController
    {

        IProjectService iproject;
        IEmployeesService iemploye;
        public ProjectController(IAuthorizationService authService, IMapper mapper, IProjectService ips, IEmployeesService ems) : base(authService, mapper)
        {
            this.iproject = ips;
            this.iemploye = ems;
        }



        #region Post
        /// <summary>
        /// Añade un nuevo proyecto
        /// </summary>
        /// <param name="data"></param>
        /// <param name="commit"></param>
        /// <returns></returns>
        [HttpPost("Insert")]
        [ProducesResponseType(typeof(Project), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Insert([FromBody] Project data, bool commit = true)
        {
            Project result = null;
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest("Error en la insercción de datos");
            //}

            //if (data.Dend < data.Dstart)
            //{
            //    ModelState.AddModelError("fechainvalida", "Fecha finalizacion anterior a comienzo");
            //    return BadRequest(ModelState);
            //}

            if (isValid(data) == false)
            {
                return BadRequest(ModelState);
            }

            data.Responsable = await iemploye.GetByIdAsync(data.ResponsableId);
            if (data.Responsable == null || data.Responsable.Id <= 0)
            {

                return BadRequest("Responsable no encontrado");
            }
            else
            {
                result = await iproject.Insert(data, commit);
            }


            return Ok(result);
        }


        /// <summary>
        /// Edita un proyecto
        /// </summary>
        /// <param name="data"></param>
        /// <param name="commit"></param>
        /// <returns></returns>
        [HttpPost("Update")]
        [ProducesResponseType(typeof(Project), StatusCodes.Status200OK)]
        public async Task<IActionResult> Update([FromBody] Project data, bool commit = true)
        {

            if(isValid(data) == false)
            {
                return BadRequest(ModelState);
            }

            data.Responsable = await iemploye.GetByIdAsync(data.ResponsableId);
            var result = await iproject.Update(data, commit);
            return Ok(result);
        }

        [NonAction]
        public bool isValid(Project data)
        {
            var tipoError = true;

            if (!ModelState.IsValid)
            {
                
            }

            if (data.Dend < data.Dstart)
            {
                ModelState.AddModelError("fechainvalida", "Fecha finalizacion anterior a comienzo");
                return false;
            }


            return tipoError;
        }

        #endregion

        #region Delete
        /// <summary>
        /// Borra proyecto
        /// </summary>
        /// <param name="data"></param>
        /// <param name="commit"></param>
        /// <returns></returns>
        [HttpDelete("Delete")]
        [ProducesResponseType(typeof(Project), StatusCodes.Status200OK)]

        public async Task<IActionResult> Delete(int data, bool commit = true)
        
        {
            var result = await iproject.DeleteAsync(data, commit);
            return Ok(result);
        }
        #endregion

        #region GET
        /// <summary>
        /// Get project by Id
        /// </summary>
        /// <param name="clave"></param>
        /// <returns></returns>
        [HttpGet("GetById")]
        [ProducesResponseType(typeof(Project), StatusCodes.Status200OK)]

        public async Task<IActionResult> GetById(int clave)
        {
            var result = await iproject.GetByIdAsync(clave);
            return Ok(result);
        }

        /// <summary>
        /// Get Project 
        /// </summary>
        [HttpPost("GetList")]
        [ProducesResponseType(typeof(CollectionList<Project>), StatusCodes.Status200OK)]
        public IActionResult GetList()
        {
            var result = iproject.GetCollectionList();
            return Ok(result);
        }


        [HttpGet("prioritylist")]
        [ProducesResponseType(typeof(IEnumerable<LabelAndValue<int>>), StatusCodes.Status200OK)]
        public IActionResult GetEnumCodTypes()
        {
            var enums = EnumHelper.GetEnumValues<Priority_Enum>().ToList();
            var result = enums.Select(e => new LabelAndValue<int>(e.GetDescription(), (int)e, data: e));
            //return Ok(enums); enums.Select(e => new LabelAndValue<int>(e.GetDescription(), (int)e)))
            return Ok(result);
        }

        [HttpPost("datatable")]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(CollectionList<Project>), StatusCodes.Status200OK)]
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
                //añadiendo al sorts se añaden filtros
                sorts.Add(new SortCriteria() { Field = nameof(Project.Name), SortOp = SortOperator.Ascending });

            }
            var result = iproject.GetCollectionList(filters, pageIndex, pageSize, sorts);

            if (result.Total == 0)
                return NotFound(result);

            return Ok(result);
        }

        #endregion
    }
}
