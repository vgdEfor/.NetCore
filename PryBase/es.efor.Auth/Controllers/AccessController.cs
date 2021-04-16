using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using es.efor.Utilities.Web.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace es.efor.Auth.Controllers
{
    public abstract class AccessController : BaseEforController
    {
        public AccessController(IAuthorizationService authService, IMapper mapper)
            : base(authService, mapper)
        { }

        [HttpGet("access")]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        public virtual async Task<IActionResult> CheckAccess([FromQuery(Name = "p")] string path)
        {
            var hasAccess = true;

            hasAccess = User.Identity.IsAuthenticated;

            await Task.CompletedTask;
            return Ok(hasAccess);
        }
    }
}
