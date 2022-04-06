using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserServices _userServices;
        public UsersController(IUserServices userServices)
        {
            _userServices = userServices;
        }

        [HttpGet]
        // [Authorize]
        public ActionResult<IEnumerable<UserDTOs>> GetUsers([FromQuery] PageParams pageParams)
        {

            var listUsers = _userServices.GetUsers(pageParams);
            var count = listUsers.Count();
            if (listUsers.Any())
            {
                listUsers = listUsers.OrderBy(on => on.FirstName)
                            .Skip((pageParams.PageNumber - 1) * pageParams.PageSize)
                            .Take(pageParams.PageSize);

                if (pageParams.SearchName != null)
                {
                    var p = pageParams.SearchName;
                    listUsers = listUsers.Where(x => x.UserName.Contains(pageParams.SearchName, StringComparison.CurrentCultureIgnoreCase)
                         || x.FirstName.Contains(pageParams.SearchName, StringComparison.CurrentCultureIgnoreCase)
                         || x.LastName.Contains(pageParams.SearchName, StringComparison.CurrentCultureIgnoreCase)
                         || (x.LastName + " " + x.FirstName).Contains(pageParams.SearchName, StringComparison.CurrentCultureIgnoreCase)
                         ).ToList();
                }

                var metaData = new
                {
                    listUsers,
                    count
                };
                return Ok(metaData);
            }
            return Ok(new
            {
                listUsers = new List<Object>(),
                count = 0
            });

        }

        [HttpGet("{id}")]
        // [Authorize(Roles = "Quality Assurance Manager")]
        public ActionResult GetUserById(Guid id)
        {
            return Ok(_userServices.GetUserById(id));
        }

        [HttpPost]
        // [Authorize(Roles = "Quality Assurance Manager")]
        public ActionResult CreateUser(UserDTOs user)
        {
            if (ModelState.IsValid)
            {
                var result = _userServices.CreateUser(user);
                if (result)
                {
                    return Ok(user);
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
                    return Ok(user);
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