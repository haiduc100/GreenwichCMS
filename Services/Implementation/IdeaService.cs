﻿using AutoMapper;
using GreenwichCMS.DAO;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using System;
using System.Collections.Generic;

namespace GreenwichCMS.Services.Implementation
{
    public class IdeaService : IideaServices
    {
        private readonly IIdeaRepo _IdeaRepo;
        private readonly IMapper _mapper;
        public IdeaService(IIdeaRepo IdeaRepo, IMapper mapper)
        {
            _IdeaRepo = IdeaRepo;
            _mapper = mapper;
        }
        public string CreateIdea(IdeaDTOs idea)
        {
            var signal = _IdeaRepo.CreateIdea(idea);
            return signal;
        }

        public string DeleteIdea(Guid ideaId)
        {
            var signal = _IdeaRepo.DeleteIdea(ideaId);
            return signal;
        }

        public IEnumerable<IdeaDTOs> GetIdea(PageParams pageParams)
        {
            var listIdeas = _IdeaRepo.GetIdea(pageParams);
            return _mapper.Map<IEnumerable<Idea>, IEnumerable<IdeaDTOs>>(listIdeas);
        }

        public string UpdateIdea(IdeaDTOs idea)
        {
            var ideaMapped = _mapper.Map<IdeaDTOs, Idea>(idea);
            var signal = _IdeaRepo.UpdateIdea(ideaMapped);
            return signal;
        }
    }
}