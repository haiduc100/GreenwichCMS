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
        public UserRepo(GreenwichContext greenwichContext)
        {
            _greenwichContext = greenwichContext;
        }

        public bool CreateUser(UserDTOs user)
        {
            var role = _greenwichContext.Roles.FirstOrDefault(x => x.RoleName == user.Role);
            var newUser = new Users
            {
                DateOfBirth = user.DateOfBirth,
                FirstName = user.FirstName,
                Gender = user.Gender,
                LastName = user.LastName,
                Password = user.Password,
                UserName = user.UserName,
                Email = user.Email,
                Role = role,
                RoleId = role.RoleId
            };
            _greenwichContext.Users.Add(newUser);
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
            var user = _greenwichContext.Users.Where(x => x.UserId == id).Include("Role").FirstOrDefault();
            return user;
        }

        public Users GetUserByNameAndPassword(string userName, string password)
        {
            try
            {
                var currentUsers = _greenwichContext.Users.Where(b =>
                    b.UserName == userName &&
                    b.Password == password
                 ).Include("Role");
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
                    var currentPassword = MD5Hash.Hash.Content(oldPassword);
                    if (user.Password == currentPassword)
                    {
                        user.Password = MD5Hash.Hash.Content(newPassword);
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

        public IEnumerable<Users> GetUsers(PageParams pageParams)
        {
            var listUsers = _greenwichContext.Users.Include("Role").ToList();
            return listUsers;
        }


        public bool UpdateUser(UserDTOs user)
        {
            try
            {
                var currentUser = _greenwichContext.Users.Single(x => x.UserId == user.UserId);
                var role = _greenwichContext.Roles.Single(x => x.RoleName == user.Role);
                currentUser.DateOfBirth = user.DateOfBirth;
                currentUser.Gender = user.Gender;
                currentUser.FirstName = user.FirstName;
                currentUser.LastName = user.LastName;
                currentUser.RoleId = role.RoleId;
                currentUser.Password = user.Password;
                currentUser.UserName = user.UserName;
                currentUser.Email = user.Email;

                _greenwichContext.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }


        }
    }
}