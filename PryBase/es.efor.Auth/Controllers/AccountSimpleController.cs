using AutoMapper;
using es.efor.Auth.Identity.Models.Api;
using es.efor.Auth.Utilities;
using es.efor.Utilities.Web.Controllers;
using es.efor.Utilities.Web.Models.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace es.efor.Auth.Controllers
{
    public abstract class AccountSimpleController : BaseEforController
    {
        public AccountSimpleController(
            IAuthorizationService authService,
            IMapper mapper)
            : base(authService, mapper)
        {
        }


        [HttpPost("token")]
        [ProducesResponseType(typeof(JsonWebTokenResponse), StatusCodes.Status200OK)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        public virtual async Task<IActionResult> JwtTokenAsync([FromBody] AccountLoginRequest data)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var result = await CheckUserPassword(data);
            if (result.Succeeded)
            {
                var response = await JwtUtilities.GetAuthBearerToken(data.Username, data.Username);
                return Ok(response);
            }
            else if (result.IsLockedOut)
            {
                return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");
            }
            else if (result.IsNotAllowed) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");

            return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");
        }


        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        public virtual async Task<IActionResult> LoginAsync([FromBody] AccountLoginRequest data)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var result = await CheckUserPassword(data);
            var isValid = result.Succeeded;

            if (isValid) return NoContent();
            else if (result.IsLockedOut)
            {
                return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");
            }
            else if (result.IsNotAllowed) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");

            return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");
        }


        [HttpPost("logout")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        public virtual async Task<IActionResult> LogoutAsync()
        {
            await HttpContext.SignOutAsync();
            return NoContent();
        }

        /// <summary>
        /// This method will provide the user's information
        /// and the permissions
        /// </summary>
        /// <returns></returns>
        [HttpGet("profile")]
        [ProducesResponseType(typeof(AuthenticationState), StatusCodes.Status200OK)]
        public virtual async Task<IActionResult> GetMyProfile()
        {
            var result = new AuthenticationState();
            result.IsAnonymous = !User.Identity.IsAuthenticated;
            result.Username = User.Identity.Name;

            // Recover all claims defined in policy enumerations
            var allPolicies = await GetProjectAuthClaimsByPolicyEnumName();
            // Now get only those that are applied to the user
            // --> User has policy if the User has ALL the claims for that policy
            var policiesForUser = allPolicies
                .Where(p => p.Value.All(c => User.Claims.Any(uc => uc.Type == c.Type && uc.Value == c.Value)))
                .ToList();
            result.Permissions = policiesForUser.Select(p => p.Key).ToList();

            await Task.CompletedTask;
            return Ok(result);
        }


        /// <summary>
        /// Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
        /// <para>SETUP STEPS:</para>
        /// <para>1. Create a method in your class to override this method.</para>
        /// <para>2. Add [HttpGet("policies")]</para>
        /// <para>3. Assign as many ProducesResponseTypeAttribute as Policy Enums your project has. Follow this template:</para>
        /// <para>---- [ProducesResponseType(typeof(IEnumerable&lt;es.efor.MyProject.Identity.Policies.Enums.SomeRolePolicies&gt;), 24X)] (where X is the index of the added policy: 0, 1, 2...)</para>
        /// <para>** REMEMBER TO KEEP THE RESPONSE TYPES UPDATED **</para>
        /// </summary>
        /// <returns></returns>
        [HttpGet("policies")]
        public virtual async Task<IActionResult> GetPolicies()
        {
            var allPolicies = await GetProjectAuthClaimsByPolicyEnumName();
            var result = allPolicies.Select(p => p.Key).Distinct().ToList();

            return Ok(result);
        }

        ///// <summary>
        ///// Only used to map Policies to OpenAPI. Response will always be 200.
        ///// <para>** REMEMBER TO KEEP THE RESPONSE TYPES UPDATED **</para>
        ///// </summary>
        ///// <returns></returns>
        //[HttpGet("policies")]
        //[ProducesResponseType(typeof(IEnumerable<Authorization.Policies.Enums.CategoryPolicies>), 240)]
        //[ProducesResponseType(typeof(IEnumerable<Authorization.Policies.Enums.PostPolicies>), 241)]
        //[ProducesResponseType(typeof(IEnumerable<Authorization.Policies.Enums.RoleManagementPolicies>), 242)]
        //[ProducesResponseType(typeof(IEnumerable<Authorization.Policies.Enums.UserManagementPolicies>), 243)]
        //[ProducesResponseType(typeof(IEnumerable<Authorization.Policies.Enums.ZityEntityPolicies>), 244)]
        //public virtual async Task<IActionResult> GetPolicies()
        //{
        //    var policies = new List<string>();
        //    // Recover all claims defined in policy enumerations
        //    var allEnums = AppIdentityPolicies.GetAllPolicyEnums();
        //    policies.AddRange(allEnums.Select(t => t.Name));
        //    //var policies = new List<Enum>();
        //    //var allClaims = AppIdentityPolicies.GetAllPolicyClaims();
        //    //var allEnums = allClaims.SelectMany(c => c.Value.Select(cv => cv.PolicyEnum));
        //    //policies.AddRange(allEnums);
        //    ////policies.AddRange(EnumHelper.GetEnumValues<CategoryPolicies>().OfType<Enum>());
        //    ////policies.AddRange(EnumHelper.GetEnumValues<PostPolicies>().OfType<Enum>());
        //    ////policies.AddRange(EnumHelper.GetEnumValues<RoleManagementPolicies>().OfType<Enum>());
        //    ////policies.AddRange(EnumHelper.GetEnumValues<ZityEntityPolicies>().OfType<Enum>());

        //    await Task.CompletedTask;
        //    return Ok(policies);
        //}

        /// <summary>
        /// This method must get all the project's authorization policies and all the claims applied to them.
        /// The "key" of the element must be the enum's name.
        /// </summary>
        [ApiExplorerSettings(IgnoreApi = true)]
        [NonAction]
        protected virtual async Task<Dictionary<string, IEnumerable<Claim>>> GetProjectAuthClaimsByPolicyEnumName()
        {
            var policiesAndClaims = _Internal.Setups.AuthPolicySetup.PolicyAndClaims;

            await Task.CompletedTask;
            return policiesAndClaims.ToDictionary(pc => pc.Key, pc => pc.Value.AsEnumerable());
        }


        [ApiExplorerSettings(IgnoreApi = true)]
        [NonAction]
        protected abstract Task<Microsoft.AspNetCore.Identity.SignInResult> CheckUserPassword(AccountLoginRequest data);
    }
}
