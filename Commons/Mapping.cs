using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.Commons
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<Users,UserDTOs>().ForMember(des => des.Role, act => act.MapFrom(src => src.Role.RoleName)).ReverseMap();
            CreateMap<RoleDTOs,Roles>().ReverseMap();
        }
    }

}