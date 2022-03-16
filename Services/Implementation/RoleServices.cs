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
        public bool CreateRole(RoleDTOs role)
        {
            return _roleRepo.CreateRole(_mapper.Map<Roles>(role));
        }
    }
}