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

        bool CreateComment(CommentDTOs comment);
        bool UpdateComment(CommentDTOs comment);
        bool DeleteComment(Guid commentId);
    }
}