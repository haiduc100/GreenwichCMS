using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models;
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
        [HttpGet]
        public ActionResult<IEnumerable<UserDTOs>> GetRoles()
        {

            if (ModelState.IsValid)
            {
                return Ok(

                _roleServices.GetRoles()

                );
            }
            return BadRequest();

        }
    }
}