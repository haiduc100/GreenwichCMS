using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GreenwichCMS.DAO.Implementation
{
    public class IdeaRepo : IIdeaRepo
    {
        private readonly GreenwichContext _greenwichContext;
        public IdeaRepo(GreenwichContext greenwichContext)
        {
            _greenwichContext = greenwichContext;
        }
        public string CreateIdea(IdeaDTOs idea)
        {
            try
            {
                var currentCate = _greenwichContext.IdeaCategory.FirstOrDefault(c => c.Title == idea.IdeaCategoryName);
                var currentUser = _greenwichContext.Users.FirstOrDefault(u => u.UserId == idea.Author);
                if (currentUser == null)
                {
                    throw new Exception("User is null");
                }
                if (currentCate == null)
                {
                    throw new Exception("Cate is null");
                }
                var newIdea = new Idea
                {
                    User = currentUser,
                    Author = idea.Author,
                    Content = idea.Content,
                    FinalClosureDate = idea.FinalClosureDate,
                    FirstClosureDate = idea.FirstClosureDate,
                    IdeaCategory = currentCate,
                    Privacy = idea.Privacy,
                    Slug = idea.Slug,
                    Title = idea.Title,
                };
                _greenwichContext.Idea.Add(newIdea);
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string DeleteIdea(Guid ideaId)
        {
            try
            {
                var currentIdea = _greenwichContext.Idea.FirstOrDefault(i => i.Id == ideaId);
                if (currentIdea == null)
                {
                    throw new Exception("Idea is null");
                }
                _greenwichContext.Idea.Remove(currentIdea);
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public IEnumerable<Idea> GetIdea()
        {
            var listIdeas = _greenwichContext.Idea.Include(p => p.User).ThenInclude(p=>p.Role).Include(p => p.IdeaCategory).Include(p=>p.Reactions);
            return listIdeas;
        }

        public string UpdateIdea(Idea idea)
        {
            try
            {
                var currentIdea = _greenwichContext.Idea.FirstOrDefault(i => i.Id == idea.Id);
                if (currentIdea == null)
                {
                    throw new Exception("Idea is null");
                }
                currentIdea.Title = idea.Title;
                currentIdea.Slug = idea.Slug;
                currentIdea.FinalClosureDate = idea.FinalClosureDate;
                currentIdea.IdeaCategory = idea.IdeaCategory;
                currentIdea.FirstClosureDate = idea.FirstClosureDate;
                currentIdea.Author = idea.Author;
                currentIdea.Content = idea.Content;
                currentIdea.Privacy = idea.Privacy;
                currentIdea.User = idea.User;
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
