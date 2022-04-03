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
        string UpdateComment(CommentDTOs comment, Guid CreateBy);
        string DeleteComment(Guid commentId, Guid CreateBy);
        IEnumerable<CommentDTOs> GetCommentsByIdeaId(Guid ideaId);
        IEnumerable<CommentDTOs> GetCommentByUserId(Guid userId);
    }
}
