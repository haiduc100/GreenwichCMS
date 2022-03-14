using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using AutoMapper;
using GreenwichCMS.DAO;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.Services.Implementation
{
    public class UserServices : IUserServices
    {
        private readonly IUserRepo _userRepo;
        private readonly IMapper _mapper;
        public UserServices(IUserRepo userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }

        public bool CreateUser(UserDTOs user)
        {
            var userNew = _mapper.Map<Users>(user);
            // userNew.UserId = new Guid();
            string password = MD5Hash.Hash.Content(userNew.Password);
            userNew.Password = password;
            return _userRepo.CreateUser(userNew);

        }

        public bool DeleteUser(Guid userId)
        {
            throw new NotImplementedException();
        }

        public Users GetUserById(Guid id)
        {
            throw new NotImplementedException();
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