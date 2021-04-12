using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using es.efor.PryBase.Auth.Authorization.Policies.Menu;
using es.efor.PryBase.Auth.Authorization.Policies;
using AutoMapper;
using es.efor.Auth.Controllers;
using es.efor.Auth.Identity.Models.Api;
using es.efor.Auth.Utilities;
using es.efor.Utilities.Web.Models.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace es.efor.PryBase.MainGateway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public sealed class AccountController : AccountSimpleController // /* Not available when using SimpleAuthentication --> */ : Identity.Controllers.AccountIdentityController<User, Guid>
    {
        private const string MOCKUP_USERNAME = "admin";
        private const string MOCKUP_PASSWORD = "admin";

        public AccountController(IAuthorizationService authService, IMapper mapper)
            : base(authService, mapper)
        //public AccountController(IAuthorizationService authService, IMapper mapper, SignInManager<User> signInManager, UserManager<User> userManager)
        //    : base(authService, mapper, signInManager, userManager)
        { }

        #region JWT
        /// <inheritdoc cref="AccountSimpleController.JwtTokenAsync(AccountLoginRequest)"/>
        [HttpPost("token")]
        [ProducesResponseType(typeof(JsonWebTokenResponse), StatusCodes.Status200OK)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        [Consumes("application/json")]
        public override async Task<IActionResult> JwtTokenAsync([FromBody] AccountLoginRequest data)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var result = await CheckUserPassword(data);
            if (result.Succeeded)
            {
                // Example setup of manual policy claims.
                // As this is inheriting AccountSimpleController, the developer is expected to
                // setup the claims without Identity's SignInManager nor the UserManager.
                var postPolicyClaims = AppIdentityPolicies.GetAllPolicyClaimsByPolicyEnum<Auth.Authorization.Policies.Enums.PostPolicies>();
                var claimsForUser = postPolicyClaims
                    .SelectMany(policyMenu => policyMenu.Claims)
                    .GroupBy(c => new { c.Type, c.Value }).Select(g => g.First())
                    .ToList();

                //var user = await _userManager.FindByNameAsync(data.Username);
                var response = await JwtUtilities.GetAuthBearerToken(data.Username, data.Username, extraClaims: claimsForUser);
                return Ok(response);
            }
            else if (result.IsLockedOut)
            {
                //if (user.LockoutEnd.HasValue) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED_UNTIL", user.LockoutEnd.Value.ToString());
                return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");
            }
            else if (result.IsNotAllowed) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");

            return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");
        }

        /// <inheritdoc cref="AccountSimpleController.JwtTokenAsync(AccountLoginRequest)"/>
        [HttpPost("token")]
        [ProducesResponseType(typeof(JsonWebTokenResponse), StatusCodes.Status200OK)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        [Consumes("application/x-www-form-urlencoded")]
        public async Task<IActionResult> JwtTokenFormAsync([FromForm] AccountLoginRequest data)
            => await JwtTokenAsync(data);
        #endregion

        #region COOKIES
        /// <inheritdoc cref="AccountSimpleController.LoginAsync(AccountLoginRequest)"/>
        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        [Consumes("application/json")]
        public override async Task<IActionResult> LoginAsync([FromBody] AccountLoginRequest data)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var result = await CheckUserPassword(data);

            if (result.Succeeded)
            {
                //var user = await _userManager.FindByNameAsync(data.Username);
                // // With full ASPNETCore Identity:
                //await _signInManager.SignInAsync(user, data.RememberMe);

                // Without ASPNETCore identity, only cookie auth:
                var principal = await GetSimpleSignInClaim(CookieAuthenticationDefaults.AuthenticationScheme, data);
                // using Microsoft.AspNetCore.Authentication;
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);
                return NoContent();
            }
            else if (result.IsLockedOut)
            {
                //if (user.LockoutEnd.HasValue) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED_UNTIL", user.LockoutEnd.Value.ToString());
                return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");
            }
            else if (result.IsNotAllowed) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");

            return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");
        }

        //[HttpPost("login")]
        //[ProducesResponseType(StatusCodes.Status204NoContent)]
        //[ProducesErrorResponseType(typeof(BadRequestResult))]
        //[Consumes("application/x-www-form-urlencoded")]
        //public async Task<IActionResult> LoginFormAsync([FromForm] AccountLoginRequest data)
        //    => await LoginAsync(data);


        /// <summary>
        /// Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
        /// </summary>
        [HttpGet("policies")]
        [ProducesResponseType(typeof(IEnumerable<Auth.Authorization.Policies.Menu.PolicyMenu>), 200)]
        [ProducesResponseType(typeof(IEnumerable<Auth.Authorization.Policies.Enums.CategoryPolicies>), 201)]
        [ProducesResponseType(typeof(IEnumerable<Auth.Authorization.Policies.Enums.PostPolicies>), 202)]
        [ProducesResponseType(typeof(IEnumerable<Auth.Authorization.Policies.Enums.RoleManagementPolicies>), 203)]
        [ProducesResponseType(typeof(IEnumerable<Auth.Authorization.Policies.Enums.UserManagementPolicies>), 204)]
        [ProducesResponseType(typeof(IEnumerable<Auth.Authorization.Policies.Enums.ZityEntityPolicies>), 205)]
        public override async Task<IActionResult> GetPolicies()
        {
            return await base.GetPolicies();
        }

        #endregion

        [ApiExplorerSettings(IgnoreApi = true)]
        [NonAction]
        private async Task<System.Security.Claims.ClaimsPrincipal> GetSimpleSignInClaim(
            string schema,
            AccountLoginRequest data)
        {
            var claims = new List<System.Security.Claims.Claim>
            {
                new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.NameIdentifier, data.Username),
                new System.Security.Claims.Claim(System.Security.Claims.ClaimTypes.GivenName, data.Username)
            };

            var claimsIdentity = new System.Security.Claims.ClaimsIdentity(claims, schema);
            var principal = new System.Security.Claims.ClaimsPrincipal(claimsIdentity);

            await Task.CompletedTask;
            return principal;
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        [NonAction]
        protected override async Task<Microsoft.AspNetCore.Identity.SignInResult> CheckUserPassword(AccountLoginRequest data)
        {
            await Task.CompletedTask;
            //var user = await _userManager.FindByNameAsync(data.Username);
            //if (user == null) return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");

            //var result = await _signInManager.PasswordSignInAsync(user, data.Password, data.RememberMe, true);
            //var isValid = result.Succeeded;

            Microsoft.AspNetCore.Identity.SignInResult result;
            #region Mockup + Database
            result = (data.Username == MOCKUP_USERNAME && data.Password == MOCKUP_PASSWORD) ?
                Microsoft.AspNetCore.Identity.SignInResult.Success
                : Microsoft.AspNetCore.Identity.SignInResult.Failed;

            if (result.Succeeded)
            {
                //if (user == null)
                //{
                //    user = new Data.Database.User()
                //    {
                //        UserName = data.Username,
                //        Name = "Axular Etxeguren",
                //        DisplayName = "Axular Etxeguren",
                //        DepartmentNavigation = new UserDepartment()
                //        {
                //            Name = "Test dpt",
                //        },
                //        LevelNavigation = new UserLevel()
                //        {
                //            Name = "Test lebel",
                //        }
                //    };
                //    await _userManager.CreateAsync(user);
                //}
                //user.Email = "aetxeguren@efor.es";
                //user.EmailConfirmed = true;
                //user.LockoutEnabled = false;
                //await _userManager.UpdateAsync(user);

                //if (user.LockoutEnabled) result = Microsoft.AspNetCore.Identity.SignInResult.LockedOut;
                //else
                //{
                    result = Microsoft.AspNetCore.Identity.SignInResult.Success;
                //}
            }
            else
            {
                result = Microsoft.AspNetCore.Identity.SignInResult.Failed;
            }
            #endregion
            #region Active Directory + Identity + Database
            //var pc = new System.DirectoryServices.AccountManagement.PrincipalContext(System.DirectoryServices.AccountManagement.ContextType.Domain);
            //var isValid = pc.ValidateCredentials(data.Username, data.Password);
            //Microsoft.AspNetCore.Identity.SignInResult result;
            //if (isValid)
            //{
            //    var adUser = System.DirectoryServices.AccountManagement.UserPrincipal.FindByIdentity(pc, System.DirectoryServices.AccountManagement.IdentityType.SamAccountName, data.Username);
            //    if (user == null)
            //    {
            //        user = new Data.Database.User()
            //        {
            //            UserName = data.Username,
            //        };
            //        await _userManager.CreateAsync(user);
            //    }

            //    user.Email = adUser.EmailAddress;
            //    user.EmailConfirmed = true;
            //    user.LockoutEnabled = adUser.IsAccountLockedOut();
            //    await _userManager.UpdateAsync(user);

            //    if (user.LockoutEnabled) result = Microsoft.AspNetCore.Identity.SignInResult.LockedOut;
            //    else
            //    {
            //        await _signInManager.SignInAsync(user, data.RememberMe);
            //        result = Microsoft.AspNetCore.Identity.SignInResult.Success;
            //    }
            //}
            //else
            //{
            //    result = Microsoft.AspNetCore.Identity.SignInResult.Failed;
            //}
            #endregion

            return result;
        }
    }
}
