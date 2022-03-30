using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GreenwichCMS.DAO;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.Services.Implementation
{
    public class RoleServices : IRoleServices
    {
        private readonly IRoleRepo _roleRepo;
        private readonly IMapper _mapper;
        public RoleServices(IRoleRepo roleRepo, IMapper mapper)
        {
            _roleRepo = roleRepo;
            _mapper = mapper;
        }
        public IEnumerable<RoleDTOs> GetRoles()
        {
            var roles = _roleRepo.GetRoles();
            return _mapper.Map<IEnumerable<Roles>, IEnumerable<RoleDTOs>>(roles);
        }
    }
}