using GreenwichCMS.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Services
{
    public interface ICommentService
    {
        IEnumerable<CommentDTOs> GetComments();
        string CreateComment(CommentDTOs comment);
        string UpdateComment(CommentDTOs comment);
        string DeleteComment(Guid commentId);
        IEnumerable<CommentDTOs> GetCommentsByIdeaId(Guid ideaId);
        IEnumerable<CommentDTOs> GetCommentByUserId(Guid userId);
    }
}
