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
            CreateMap<Roles, RoleDTOs>().ReverseMap();

            CreateMap<Idea, IdeaDTOs>()
                 .ForMember(des => des.IdeaCategoryName, act => act.MapFrom(src => src.IdeaCategory.Title))
                 .ForMember(des => des.UserName, act => act.MapFrom(src => src.User.UserName))
                 .ForMember(des => des.UserRole, act => act.MapFrom(src => src.User.Role.RoleName))
                 .ForMember(des => des.DisLikeCount, act => act.MapFrom(src => src.Reactions.Where(p => !p.Context).Count()))
                 .ForMember(des => des.LikeCount, act => act.MapFrom(src => src.Reactions.Where(p => p.Context).Count()))
                 ;
            CreateMap<IdeaCategory, IdeaCategoryDTOs>().ReverseMap();

            CreateMap<Reaction, ReactionDTOs>()
                .ForMember(des => des.UserName, act => act.MapFrom(src => src.User.UserName))
                .ForMember(des => des.IdeaTitle, act => act.MapFrom(src => src.Idea.Title)).ReverseMap();

            CreateMap<Comment, CommentDTOs>().ReverseMap();

        }
    }

}