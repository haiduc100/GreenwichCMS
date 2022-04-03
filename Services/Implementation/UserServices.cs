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
            user.Password = MD5Hash.Hash.Content(user.Password);
            return _userRepo.CreateUser(user);
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

        public UserDTOs GetUserById(Guid id)
        {
            return _mapper.Map<UserDTOs>(_userRepo.GetUserById(id));

        }

        public UserDTOs GetUserByNameAndPassword(string userName, string password)
        {
            password = MD5Hash.Hash.Content(password);
            return _mapper.Map<Users, UserDTOs>(_userRepo.GetUserByNameAndPassword(userName, password));
        }
        public string ChangePassword(Guid id, string newPassword, string oldPassword)
        {
            try
            {
                _userRepo.ChangePassword(id, newPassword, oldPassword);
                return "ok";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }



        public IEnumerable<UserDTOs> GetUsers(PageParams pageParams)
        {
            var users = _userRepo.GetUsers(pageParams);
            return _mapper.Map<IEnumerable<Users>, IEnumerable<UserDTOs>>(users);
        }

        public bool UpdateUser(UserDTOs user)
        {
            try
            {
                user.Password = MD5Hash.Hash.Content(user.Password);
                return _userRepo.UpdateUser(user);
            }
            catch (Exception ex)
            {
                throw new Exception($"User could not be saved: {ex.Message}");
            }
        }

    }
}