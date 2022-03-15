using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Services;
using Microsoft.AspNetCore.Http;
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
        [HttpGet]
        public ActionResult<IEnumerable<UserDTOs>> GetUsers()
        {
            if (ModelState.IsValid)
            {

                return Ok(_userServices.GetUsers());
            }
            return NotFound();

        }
        [HttpGet("{id}")]
        public ActionResult GetUserById(Guid id)
        {
            if (ModelState.IsValid)
            {

                return Ok(_userServices.GetUserById(id));
            }
            return NotFound();
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
        [HttpPut]
        public ActionResult UpdateUser(UserDTOs user)
        {

            if (ModelState.IsValid)
            {
                var updatedUser = _userServices.UpdateUser(user);
                if (updatedUser)
                {
                    return Ok(updatedUser);
                }
            }
            return BadRequest("Fail to update user");
        }
        [HttpDelete]
        public IActionResult DeleteUser(Guid id)
        {
            if (ModelState.IsValid)
            {
                _userServices.DeleteUser(id);
                return Ok("Delete user successfully!");
            }
            return BadRequest("Delete user unsuccessfully!");
        }


    }
}