using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.Commons
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<Users, UserDTOs>().ForMember(des => des.Role, act => act.MapFrom(src => src.Role.RoleName)).ReverseMap();
            CreateMap<RoleDTOs, Roles>().ReverseMap();

            CreateMap<Idea, IdeaDTOs>()
                 .ForMember(des => des.IdeaCategoryName, act => act.MapFrom(src => src.IdeaCategory.Title))
                 .ForMember(des => des.User, act => act.MapFrom(src => new UserDTOs
                 {
                     DateOfBirth = src.User.DateOfBirth,
                     FirstName = src.User.FirstName,
                     Gender = src.User.Gender,
                     LastName = src.User.LastName,
                     UserId = src.User.UserId,
                     Role = src.User.Role.RoleName,
                 }
                 ));
            CreateMap<IdeaCategory, IdeaCategoryDTOs>().ReverseMap();
        }
    }

}