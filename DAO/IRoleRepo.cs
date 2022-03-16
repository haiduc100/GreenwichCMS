using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models;

namespace GreenwichCMS.DAO
{
    public interface IRoleRepo
    {
        bool CreateRole(Roles role);
    }
}