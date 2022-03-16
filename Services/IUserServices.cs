using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.Services
{
    public interface IUserServices
    {
        IEnumerable<UserDTOs> GetUsers();
        // IEnumerable<UserDTOs> GetUsers(PageParams pageParams);
        Users GetUserById(Guid id);
        // Users GetUserByNameAndPassword(string userName, string password);
        UserDTOs GetUserByNameAndPassword(string userName, string password);

        bool CreateUser(UserDTOs user);
        bool UpdateUser(UserDTOs user);
        bool DeleteUser(Guid userId);
        public void ChangePassword(Guid id, string newPassword, string oldPassword);
    }
}