using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using GreenwichCMS.Models;
using Microsoft.Extensions.Logging;

namespace GreenwichCMS.DAO.Implementation
{
    public class RoleRepo : IRoleRepo
    {
        private readonly GreenwichContext _greenwichContext;
        private readonly ILogger<RoleRepo> _logger;
        public RoleRepo(GreenwichContext greenwichContext, ILogger<RoleRepo> logger)
        {
            _greenwichContext = greenwichContext;
            _logger = logger;
        }

        public IEnumerable<Roles> GetRoles()
        {
            return _greenwichContext.Roles.ToList();
        }
    }
}