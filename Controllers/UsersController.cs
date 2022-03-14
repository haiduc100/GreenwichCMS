using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Services;
using Microsoft.AspNetCore.Mvc;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        // private readonly GreenwichContext _greenwichContext;
        // private readonly ILogger<UserRepo> _logger;
        private readonly IUserServices _userServices;
        public UsersController(IUserServices userServices)
        {
            _userServices = userServices;
        }
        [HttpPost]
        public ActionResult CreateUser(UserDTOs user)
        {
            if (ModelState.IsValid)
            {
                var result = _userServices.CreateUser(user);
                if (result)
                {
                    return Ok();
                }
                return BadRequest();

            }
            return BadRequest();
        }
    }
}