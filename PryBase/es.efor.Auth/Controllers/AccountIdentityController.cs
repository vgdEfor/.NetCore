using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using es.efor.Auth.Identity.Models.Api;
using es.efor.Auth.Models.Entities;
using es.efor.Auth.Utilities;
using es.efor.Utilities.Web.Controllers;
using es.efor.Utilities.Web.Models.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace es.efor.Auth.Controllers
{
    public abstract class AccountIdentityController<TUser, TUSerKey> : AccountSimpleController
        where TUSerKey : IEquatable<TUSerKey>
        where TUser : User<TUSerKey>
    {
        protected readonly SignInManager<TUser> _signInManager;
        protected readonly UserManager<TUser> _userManager;

        public AccountIdentityController(
            IAuthorizationService authService,
            IMapper mapper,
            SignInManager<TUser> signInManager, UserManager<TUser> userManager)
            : base(authService, mapper)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }


        /// <inheritdoc cref="AccountSimpleController.JwtTokenAsync"/>
        [HttpPost("token")]
        [ProducesResponseType(typeof(JsonWebTokenResponse), StatusCodes.Status200OK)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        public override async Task<IActionResult> JwtTokenAsync([FromBody] AccountLoginRequest data)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = await _userManager.FindByNameAsync(data.Username);
            if (user == null) return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");

            var result = await _signInManager.CheckPasswordSignInAsync(user, data.Password, true);
            if (result.Succeeded)
            {
                var response = await JwtUtilities.GetAuthBearerToken<TUSerKey, TUser, UserManager<TUser>>(user, _userManager);
                return Ok(response);
            }
            else if (result.IsLockedOut)
            {
                if (user.LockoutEnd.HasValue) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED_UNTIL", user.LockoutEnd.Value.ToString());
                return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");
            }
            else if (result.IsNotAllowed) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");

            return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");
        }


        /// <inheritdoc cref="AccountSimpleController.LoginAsync"/>
        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        public override async Task<IActionResult> LoginAsync([FromBody] AccountLoginRequest data)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = await _userManager.FindByNameAsync(data.Username);
            if (user == null) return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");

            var result = await _signInManager.PasswordSignInAsync(user, data.Password, data.RememberMe, true);
            var isValid = result.Succeeded;

            if (isValid) return NoContent();
            else if (result.IsLockedOut)
            {
                if (user.LockoutEnd.HasValue) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED_UNTIL", user.LockoutEnd.Value.ToString());
                return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");
            }
            else if (result.IsNotAllowed) return BadRequest(nameof(data.Password), "ERR_AUTH_LOCKED");

            return BadRequest(nameof(data.Password), "API.ERROR.AUTH.PASS.FAIL");
        }


        /// <inheritdoc cref="AccountSimpleController.LogoutAsync"/>
        [HttpPost("logout")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesErrorResponseType(typeof(BadRequestResult))]
        public override async Task<IActionResult> LogoutAsync()
        {
            await _signInManager.SignOutAsync();
            return NoContent();
        }

    }
}
