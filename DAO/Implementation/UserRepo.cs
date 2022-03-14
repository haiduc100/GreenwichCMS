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
            throw new NotImplementedException();
        }

        public Users GetUserById(Guid id)
        {
            var user = _greenwichContext.Users.Where(x => x.UserId == id).FirstOrDefault();
            return user;
        }

        public Users GetUserByNameAndPassword(string userName, string password)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Users> GetUsers()
        {
            throw new NotImplementedException();
        }

        public bool UpdateUser(UserDTOs user)
        {
            throw new NotImplementedException();
        }
    }
}