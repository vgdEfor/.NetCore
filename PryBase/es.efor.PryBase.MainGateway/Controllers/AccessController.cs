using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace es.efor.PryBase.MainGateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessController : es.efor.Auth.Controllers.AccessController
    {
        public AccessController(IAuthorizationService authService, IMapper mapper)
            : base(authService, mapper)
        { }
    }
}
