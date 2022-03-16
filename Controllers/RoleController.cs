using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Services;
using Microsoft.AspNetCore.Mvc;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoleController : ControllerBase
    {
        private readonly IRoleServices _roleServices;
        public RoleController(IRoleServices roleServices)
        {
            _roleServices = roleServices;
        }
        [HttpPost]
        public ActionResult CreateRole(RoleDTOs role)
        {
            if (ModelState.IsValid)
            {
                var newRole = _roleServices.CreateRole(role);
                if (newRole)
                {
                    return Ok(newRole);
                }
                return BadRequest("Role already exists");
            }
            return BadRequest();
        }
    }
}