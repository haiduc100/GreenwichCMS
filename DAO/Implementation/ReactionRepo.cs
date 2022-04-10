using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GreenwichCMS.DAO.Implementation
{
    public class ReactionRepo : IReactionRepo
    {
        private readonly GreenwichContext _greenwichContext;
        private readonly ISendEmail _sendEmail;
        public ReactionRepo(GreenwichContext greenwichContext, ISendEmail sendEmail)
        {
            _greenwichContext = greenwichContext;
            _sendEmail = sendEmail;
        }

        public string AddReaction(Reaction reaction)
        {
            try
            {
                var existedReaction = _greenwichContext.Reaction.FirstOrDefault(r => r.UserId == reaction.UserId && r.IdeaId == reaction.IdeaId);
                var currentIdea = _greenwichContext.Idea.Include(p => p.User).FirstOrDefault(i => i.Id == reaction.IdeaId);
                var creatBy = _greenwichContext.Users.SingleOrDefault(u => u.UserId == reaction.UserId);
                if (existedReaction != null)
                {
                    if (existedReaction.Context != reaction.Context)
                    {
                        existedReaction.Context = reaction.Context;
                        _greenwichContext.SaveChanges();
                        _sendEmail.NotifyReactIdea(currentIdea.User.Email, creatBy.UserName);
                        return "ok";
                    }
                    else
                    {
                        throw new Exception("Reaction is existed");
                    }
                }
                else
                {
                    _greenwichContext.Reaction.Add(reaction);
                    _greenwichContext.SaveChanges();
                    _sendEmail.NotifyReactIdea(currentIdea.User.Email, creatBy.UserName);
                    return "ok";
                }
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
            var listReactions = _greenwichContext.Reaction.Where(r => r.IdeaId == IdeaId).Include(p => p.User).Include(p => p.Idea);
            return listReactions;
        }

        public IEnumerable<Reaction> GetReactionsByUserId(Guid userId)
        {
            var listReactions = _greenwichContext.Reaction.Where(r => r.UserId == userId).Include(p => p.User).Include(p => p.Idea);
            return listReactions;
        }
    }
}
