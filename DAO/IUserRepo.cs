using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.DAO
{
    public interface IUserRepo
    {
        IEnumerable<Users> GetUsers();
        // IEnumerable<Users> GetUsers(PageParams pageParams);
        Users GetUserById(Guid id);
        Users GetUserByNameAndPassword(string userName, string password);
        bool CreateUser(Users user);
        bool UpdateUser(Users user);
        bool DeleteUser(Guid userId);
        public void ChangePassword(Guid id, string newPassword, string oldPassword);

    }
}