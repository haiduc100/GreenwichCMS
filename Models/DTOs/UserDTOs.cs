using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models.DTOs
{
    public class UserDTOs
    {
        public Guid UserId { get; set; }
        public string Email { get;set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string UserName { get; set; }
    }
}