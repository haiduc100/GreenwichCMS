using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.DAO
{
    public interface ICommentRepo
    {
        IEnumerable<Comment> GetComment();

        string CreateComment(Comment comment);
        string UpdateComment(Comment comment);
        string DeleteComment(Guid commentId);
        IEnumerable<Comment> GetCommentsByIdeaId(Guid ideaId);
        IEnumerable<Comment> GetCommentByUserId(Guid userId);
    }
}