using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models
{
    public class Users
    {
        [Key]
        public Guid UserId { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string UserName { get; set; }

        public string Gender { get; set; }
        public string Password { get; set; }
        [ForeignKey("Roles")]
        public Guid RoleId { get; set; }
        public virtual Roles Role { get; set; }
        public string Department { get; set; }

    }
}