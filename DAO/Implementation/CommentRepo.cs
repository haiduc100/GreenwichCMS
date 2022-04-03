using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
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
                _greenwichContext.Comment.Add(comment);
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public string DeleteComment(Guid commentId)
        {
            try
            {
                var currentComment = _greenwichContext.Comment.FirstOrDefault(c => c.CommentId == commentId);
                _greenwichContext.Remove(currentComment);
                _greenwichContext.SaveChanges();
                return "ok";
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

        public string UpdateComment(Comment comment)
        {
            try
            {
                var currentComment = _greenwichContext.Comment.FirstOrDefault(c => c.CommentId == comment.CommentId);
                currentComment.Content = comment.Content;
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}