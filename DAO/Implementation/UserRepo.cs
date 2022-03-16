using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace GreenwichCMS.DAO.Implementation
{
    public class UserRepo : IUserRepo
    {
        private readonly GreenwichContext _greenwichContext;
        private readonly ILogger<UserRepo> _logger;
        public UserRepo(GreenwichContext greenwichContext, ILogger<UserRepo> logger)
        {
            _greenwichContext = greenwichContext;
            _logger = logger;
        }

        public bool CreateUser(Users user)
        {
            _greenwichContext.Users.Add(user);
            _greenwichContext.SaveChanges();

            return true;
        }

        public bool DeleteUser(Guid userId)
        {
            try
            {
                var user = _greenwichContext.Users.FirstOrDefault(x => x.UserId == userId);
                _greenwichContext.Remove(user);
                _greenwichContext.SaveChanges();
                return true;
            }
            catch
            {
                throw new Exception($"User Null!");
            }
        }

        public Users GetUserById(Guid id)
        {
            var user = _greenwichContext.Users.Where(x => x.UserId == id).FirstOrDefault();
            _greenwichContext.Users.Remove(user);
            return user;
        }

        public Users GetUserByNameAndPassword(string userName, string password)
        {
            try
            {
                var userAndPassword = userName + " " + password;

                var currentUsers = _greenwichContext.Users.Where(b=>
                    b.UserName == userName &&
                    b.Password == password
                 ).ToArray();

                var currentUser = currentUsers.FirstOrDefault(user => user.UserName.Equals(userName) && user.Password.Equals(password));

                
                return currentUser;
            }
            catch
            {
                return null;
            }
        }

        public void ChangePassword(Guid id, string newPassword, string oldPassword)
        {
            try
            {
                var user = _greenwichContext.Users.FirstOrDefault(x => x.UserId == id);
                if (user != null)
                {
                    if (user.Password == oldPassword)
                    {
                        user.Password = newPassword;
                        _greenwichContext.SaveChanges();
                    }
                    else throw new Exception("Old password is not correct!");
                }
                else throw new Exception("User is null!");

            }
            catch (Exception)
            {
                throw;

            }
        }

        // public IEnumerable<Users> GetUsers(PageParams pageParams)
        // {
        //     var listUsers = _greenwichContext.Users.ToList();


        //     if (pageParams.SearchName != null)
        //     {
        //         var p = pageParams.SearchName;
        //         listUsers = listUsers.Where(x => x.UserName.Contains(pageParams.SearchName)
        //              || x.FirstName.Contains(pageParams.SearchName)
        //              || x.LastName.Contains(pageParams.SearchName)
        //              || (x.LastName + " " + x.FirstName).Contains(pageParams.SearchName)
        //              ).ToList();
        //     }
        //     return listUsers;
        // }
        public IEnumerable<Users> GetUsers()
        {
            return _greenwichContext.Users.Include("Role").ToList();
        }
        public bool UpdateUser(Users user)
        {
            var currentUser = _greenwichContext.Users.Single(x => x.UserId == user.UserId);
            currentUser.DateOfBirth = user.DateOfBirth;
            currentUser.Gender = user.Gender;
            currentUser.FirstName = user.FirstName;
            currentUser.LastName = user.LastName;
            currentUser.RoleId = user.RoleId;
            currentUser.Password = user.Password;

            _greenwichContext.SaveChanges();

            return true;
        }
    }
}