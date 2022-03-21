﻿
using GreenwichCMS.Commons;
using GreenwichCMS.Models;
using GreenwichCMS.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/account")]
    [AllowAnonymous]
    public class AccountController : ControllerBase
    {
        private readonly IUserServices _userService;
        private readonly IMapper _mapper;
        private readonly ITokenServices _tokenServices;
        public AccountController(IUserServices userService, IMapper mapper, ITokenServices tokenServices)
        {
            _userService = userService;
            _mapper = mapper;
            _tokenServices = tokenServices;
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(LoginModel user)
        {
            var currentUser = _userService.GetUserByNameAndPassword(user.UserName, user.Password);
            if (currentUser != null)
            {
                var token = _tokenServices.GenerateToken(currentUser);
                return Ok(
                  new
                  {
                      token = token,

                  }
                  ); ;
            }
            return Unauthorized();
        }

        // [HttpPost]
        // [Route("ChangePassword")]
        // public IActionResult ChangePass(ChangePassModel passwordParams)
        // {

        //     var res = _userService.ChangePassword(passwordParams.Id, passwordParams.newPassword, passwordParams.oldPassword);
        //     if (res == "ok")
        //     {
        //         return Ok(res);
        //     }
        //     else
        //     {
        //         return BadRequest(res);
        //     }

        // }
    }

    public class LoginModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class ChangePassModel
    {
        public Guid Id { get; set; }
        public string newPassword { get; set; }
        public string oldPassword { get; set; }
    }
}