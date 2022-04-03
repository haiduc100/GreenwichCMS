using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace GreenwichCMS.DAO.Implementation
{
    public class CommentRepo : ICommentRepo
    {
        private readonly GreenwichContext _greenwichContext;

        public CommentRepo(GreenwichContext greenwichContext)
        {
            _greenwichContext = greenwichContext;
        }
        public string CreateComment(Comment comment)
        {
            try
            {
                var idea = _greenwichContext.Idea.Include(p => p.IdeaCategory).FirstOrDefault(c => c.Id == comment.IdeaId);
                if (idea.IdeaCategory.FinalClosureDate < DateTime.Now)
                {
                    throw new Exception("Cannot add comment, The Category is expired");
                }

                if (DateTime.Now > idea.IdeaCategory.FinalClosureDate)
                {
                    throw new Exception("Cannot add");
                }

                _greenwichContext.Comment.Add(comment);
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public string DeleteComment(Guid commentId, Guid CreateBy)
        {
            try
            {
                var currentComment = _greenwichContext.Comment.FirstOrDefault(c => c.CommentId == commentId);
                if (currentComment.ReplyBy == CreateBy)
                {
                    _greenwichContext.Remove(currentComment);
                    _greenwichContext.SaveChanges();
                    return "ok";
                }
                else
                {
                    throw new Exception("Cannot delete Comment");
                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public IEnumerable<Comment> GetComment()
        {
            return _greenwichContext.Comment.ToList();
        }

        public IEnumerable<Comment> GetCommentByUserId(Guid userId)
        {
            var listComments = _greenwichContext.Comment.Where(c => c.ReplyBy == userId).ToList();
            return listComments;
        }

        public IEnumerable<Comment> GetCommentsByIdeaId(Guid ideaId)
        {
            var listComments = _greenwichContext.Comment.Where(c => c.IdeaId == ideaId).ToList();
            return listComments;
        }

        public string UpdateComment(Comment comment, Guid CreateBy)
        {
            try
            {
                var currentComment = _greenwichContext.Comment.FirstOrDefault(c => c.CommentId == comment.CommentId);
                if (currentComment.ReplyBy == CreateBy)
                {
                    currentComment.Content = comment.Content;
                    _greenwichContext.SaveChanges();
                    return "ok";
                }
                else
                {
                    throw new Exception("Cannot update comment");
                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}