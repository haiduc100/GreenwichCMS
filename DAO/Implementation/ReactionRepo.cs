using GreenwichCMS.Context;
using GreenwichCMS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GreenwichCMS.DAO.Implementation
{
    public class ReactionRepo : IReactionRepo
    {
        private readonly GreenwichContext _greenwichContext;
        public ReactionRepo(GreenwichContext greenwichContext)
        {
            _greenwichContext = greenwichContext;
        }

        public string AddReaction(Reaction reaction)
        {
            try
            {
                _greenwichContext.Reaction.Add(reaction);
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public string DeleteReaction(Reaction reaction)
        {
            try
            {
                var currentReaction = _greenwichContext.Reaction.FirstOrDefault(r => r.ReactionId == reaction.ReactionId && r.UserId == reaction.UserId);
                _greenwichContext.Reaction.Remove(currentReaction);
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public IEnumerable<Reaction> GetReactionsByIdeaId(Guid IdeaId)
        {
            var listReactions = _greenwichContext.Reaction.Where(r => r.IdeaId == IdeaId).Include(p=>p.User).Include(p=>p.Idea);
            return listReactions;
        }

        public IEnumerable<Reaction> GetReactionsByUserId(Guid userId)
        {
            var listReactions = _greenwichContext.Reaction.Where(r => r.UserId == userId).Include(p => p.User).Include(p => p.Idea);
            return listReactions;
        }
    }
}
