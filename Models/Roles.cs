using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models
{
    public class Roles
    {
        [Key]
        public Guid RoleId { get; set; }

        public string RoleName { get; set; }

    }
}