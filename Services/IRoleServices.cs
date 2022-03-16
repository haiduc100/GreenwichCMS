using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.Services
{
    public interface IRoleServices
    {
        bool CreateRole(RoleDTOs role);

    }
}