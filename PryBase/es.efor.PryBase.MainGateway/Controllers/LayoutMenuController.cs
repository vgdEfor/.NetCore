using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using es.efor.PryBase.Auth.Authorization.Policies.Enums;
using es.efor.Utilities.Web.Models.Layout;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace es.efor.PryBase.MainGateway.Controllers
{
    [Route("api/admin/[controller]")]
    [ApiController]
    public class LayoutMenuController : Utilities.Web.Controllers.BaseEforController
    {

        public LayoutMenuController(IAuthorizationService authService, IMapper mapper)
            : base(authService, mapper)
        {

        }


        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<LayoutMenuItem>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAsync()
        {
            var menu = new List<LayoutMenuItem>();

            var sectionMain = new LayoutMenuItem() { Label = "MENU.PAGE.HOME", IconPreffix = "fas", IconName = "home" }
                .AddRouterLinkCommand("/dashboard");

            #region RCA
            var sectionZityEntity = new LayoutMenuItem() { Label = "MENU.PAGE.RCA.MAIN", IconPreffix = "fas", IconName = "users" }
                    .AddRouterLinkCommand("/rca");
            if ((await _authService.AuthorizeAsync(User, nameof(ZityEntityPolicies.ZityEntityList))).Succeeded)
            {
                sectionZityEntity.AddChild(new LayoutMenuItem() { Label = "MENU.PAGE.ZITYENTITY.LIST", IconPreffix = "fas", IconName = "list" }
                    .AddRouterLinkCommand("/admin/zity-entity/list"));
            }
            #endregion

            #region Insurance Policies
            var sectionInsurance = new LayoutMenuItem() { Label = "MENU.PAGE.INSURANCE.MAIN", IconPreffix = "fas", IconName = "users" }
                .AddRouterLinkCommand("/insurance");
            if (User.Identity.IsAuthenticated)
            {
                sectionInsurance
                    .AddChild(new LayoutMenuItem() { Label = "MENU.PAGE.INSURANCE.LIST", IconPreffix = "fas", IconName = "list" }
                        .AddRouterLinkCommand("/insurance/list"))
                    .AddChild(new LayoutMenuItem() { Label = "MENU.PAGE.INSURANCE.NEW", IconPreffix = "fas", IconName = "plus-square" }
                        .AddRouterLinkCommand("/insurance/new"));
            }
            #endregion

            #region projets
            var sectionProjects = new LayoutMenuItem() { Label = "MENU.PAGE.PROJECT.MAIN", IconPreffix = "fas", IconName = "users" }
                .AddRouterLinkCommand("/empleados/project");
            if (User.Identity.IsAuthenticated)
            {
                sectionProjects
                    .AddChild(new LayoutMenuItem() { Label = "MENU.PAGE.PROJECT.LIST", IconPreffix = "fas", IconName = "list" }
                        .AddRouterLinkCommand("/empleados/project/datatable"))
                    .AddChild(new LayoutMenuItem() { Label = "MENU.PAGE.PROJECT.NEW", IconPreffix = "fas", IconName = "plus-square" }
                        .AddRouterLinkCommand("/empleados/project/new"));
            }

            #endregion

            #region employees
            var sectionEmployees = new LayoutMenuItem() { Label = "MENU.PAGE.EMPLOYEE.MAIN", IconPreffix = "fas", IconName = "users" }
                .AddRouterLinkCommand("/empleados/employees");
            if (User.Identity.IsAuthenticated)
            {
                sectionEmployees
                    .AddChild(new LayoutMenuItem() { Label = "MENU.PAGE.EMPLOYEE.LIST", IconPreffix = "fas", IconName = "list" }
                        .AddRouterLinkCommand("/empleados/employees/datatable"))
                    .AddChild(new LayoutMenuItem() { Label = "MENU.PAGE.EMPLOYEE.NEW", IconPreffix = "fas", IconName = "plus-square" }
                       .AddRouterLinkCommand("/empleados/employees/new"));
            }

            #endregion



            menu.Add(sectionMain);
            if (sectionZityEntity.HasChildren) menu.Add(sectionZityEntity);
            if (sectionInsurance.HasChildren) menu.Add(sectionInsurance);
            if (sectionProjects.HasChildren) menu.Add(sectionProjects);
            if (sectionEmployees.HasChildren) menu.Add(sectionEmployees);

            return Ok(menu);
        }
    }
}
