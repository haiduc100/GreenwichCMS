using AutoMapper;
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

        public IEnumerable<IdeaDTOs> GetIdea()
        {
            var listIdeas = _IdeaRepo.GetIdea();
            return _mapper.Map<IEnumerable<object>, IEnumerable<IdeaDTOs>>(listIdeas);
        }

        public IEnumerable<IdeaDTOs> GetIdeasByCateName(string cateName)
        {
            var listIdeas = _IdeaRepo.GetIdeasByCategoryName(cateName);
            return _mapper.Map<IEnumerable<object>, IEnumerable<IdeaDTOs>>(listIdeas);

        }

        public string UpdateIdea(IdeaDTOs idea)
        {
            var ideaMapped = _mapper.Map<IdeaDTOs, Idea>(idea);
            var signal = _IdeaRepo.UpdateIdea(ideaMapped);
            return signal;
        }
    }
}
