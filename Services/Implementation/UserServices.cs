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
            string password = MD5Hash.Hash.Content(userNew.Password);
            userNew.Password = password;
            return _userRepo.CreateUser(userNew);
        }

        public bool DeleteUser(Guid userId)
        {
            try
            {
                _userRepo.DeleteUser(userId);
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception($"User could not be Delete: {ex.Message}");
            }
        }

        public Users GetUserById(Guid id)
        {
            return _mapper.Map<Users>(_userRepo.GetUserById(id));

        }

        public Users GetUserByNameAndPassword(string userName, string password)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<UserDTOs> GetUsers()
        {
            return _mapper.Map<IEnumerable<Users>, IEnumerable<UserDTOs>>(_userRepo.GetUsers());
        }

        public bool UpdateUser(UserDTOs user)
        {
            try
            {
                
                var userNew = _mapper.Map<Users>(user);
                string password = MD5Hash.Hash.Content(userNew.Password);
                userNew.Password = password;
                return _userRepo.UpdateUser(userNew);
            }
            catch (Exception ex)
            {
                throw new Exception($"User could not be saved: {ex.Message}");
            }
        }
    }
}