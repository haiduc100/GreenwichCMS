using AutoMapper;
using GreenwichCMS.Context;
using GreenwichCMS.DAO.Implementation;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Models.ModelPassFromClient;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GreenwichCMS.Services.Implementation
{
    public class ReactionService : IReactionService
    {
        private readonly GreenwichContext _greenwichContext;
        private readonly IReactionRepo _reactionRepo;
        private readonly IMapper _mapper;
        public ReactionService(GreenwichContext greenwichContext, IReactionRepo reactionRepo, IMapper mapper)
        {
            _greenwichContext = greenwichContext;
            _reactionRepo = reactionRepo;
            _mapper = mapper;
        }
        public string AddReaction(ReactionDTOs reaction)
        {
            try
            {
                var currentUser = _greenwichContext.Users.FirstOrDefault(u => u.UserId == reaction.UserId);
                var currentIdea = _greenwichContext.Idea.FirstOrDefault(i => i.Id == reaction.IdeaId);
                if (currentUser == null)
                {
                    throw new Exception("User is null");
                }
                if (currentIdea == null)
                {
                    throw new Exception("Idea is null");
                }
                var newReaction = new Reaction
                {
                    UserId = reaction.UserId,
                    Context = reaction.Context,
                    Idea = currentIdea,
                    IdeaId = reaction.IdeaId,
                    User = currentUser,
                };
                return _reactionRepo.AddReaction(newReaction);
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public string DeleteReaction(DeleteReactionFromClient reaction)
        {
            try
            {
                var currentReaction = _greenwichContext.Reaction.FirstOrDefault(r => r.IdeaId == reaction.IdeaId && r.UserId == reaction.UserId);
                if (currentReaction == null)
                {
                    throw new Exception("Reaction is null");
                }
                return _reactionRepo.DeleteReaction(currentReaction);
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public IEnumerable<ReactionDTOs> GetReactionsByIdeaId(Guid IdeaId)
        {
            var listReactions = _reactionRepo.GetReactionsByIdeaId(IdeaId);
            return _mapper.Map<IEnumerable<ReactionDTOs>>(listReactions);
        }

        public IEnumerable<ReactionDTOs> GetReactionsByUserId(Guid userId)
        {
            var listReactions = _reactionRepo.GetReactionsByUserId(userId);
            return _mapper.Map<IEnumerable<ReactionDTOs>>(listReactions);
        }
    }
}
