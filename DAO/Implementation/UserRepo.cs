using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
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
            throw new NotImplementedException();
        }

        public IEnumerable<Users> GetUsers()
        {
            return _greenwichContext.Users.ToList();
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