using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GreenwichCMS.DAO.Implementation
{
    public class IdeaRepo : IIdeaRepo
    {
        private readonly GreenwichContext _greenwichContext;
        private readonly ISendEmail _sendEmail;
        public IdeaRepo(GreenwichContext greenwichContext, ISendEmail sendEmail)
        {
            _greenwichContext = greenwichContext;
            _sendEmail = sendEmail;
        }
        public string CreateIdea(IdeaDTOs idea, List<string> listFilePaths)
        {
            try
            {
                var currentCate = _greenwichContext.IdeaCategory.FirstOrDefault(c => c.Title == idea.IdeaCategoryName);
                var QA = _greenwichContext.Users.Include(p => p.Role).Where(p => p.Role.RoleName == "Quality Assurance Coordinator");
                var listEmailQA = QA.Select(p => p.Email).ToList();

                if (DateTime.Now > currentCate.FirstClosureDate)
                {
                    throw new Exception("Expired to create ideas");
                }
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
                    IdeaCategory = currentCate,
                    Privacy = idea.Privacy,
                    Slug = idea.Slug,
                    Title = idea.Title,
                    Files = idea.Files
                };

                _greenwichContext.Idea.Add(newIdea);
                _greenwichContext.SaveChanges();

                var id = newIdea.Id;
                var listFileIdea = new List<FileIdea>();
                foreach (var filePath in listFilePaths)
                {
                    listFileIdea.Add(
                    new FileIdea()
                    {
                        FilePath = filePath,
                        IdeaId = id
                    });
                }
                _greenwichContext.FileIdea.AddRange(listFileIdea);
                _greenwichContext.SaveChanges();
                _sendEmail.NotifyCreateNewIdea(listEmailQA, currentUser.Email);
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
            var listIdeas = _greenwichContext.Idea.Include(p => p.User).ThenInclude(p => p.Role).Include(p => p.IdeaCategory).Include(p => p.Reactions).Include(p => p.Files);
            return listIdeas;
        }

        public IEnumerable<Idea> GetIdeasByCategoryName(string categoryName)
        {
            var listIdeas = _greenwichContext.Idea
                .Include(p => p.User)
                .ThenInclude(p => p.Role)
                .Include(p => p.IdeaCategory)
                .Include(p => p.Reactions)
                .Where(i => i.IdeaCategory.Title == categoryName);
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
                currentIdea.IdeaCategory = idea.IdeaCategory;
                currentIdea.Author = idea.Author;
                currentIdea.Content = idea.Content;
                currentIdea.Privacy = idea.Privacy;
                currentIdea.User = idea.User;
                currentIdea.Files = idea.Files;
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public Idea GetIdeaById(Guid id)
        {
            return _greenwichContext.Idea.Include(p => p.Files).FirstOrDefault(i => i.Id == id);
        }
    }
}
