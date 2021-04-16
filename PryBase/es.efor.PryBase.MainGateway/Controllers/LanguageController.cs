using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using es.efor.PryBase.Infraestructure.DTO.LanguageDTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace es.efor.PryBase.MainGateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ProducesResponseType(typeof(IEnumerable<Language_Dto>), StatusCodes.Status200OK)]
    public class LanguageController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var asView = new List<Language_Dto>();
            return Ok(asView);
        }
    }
}
