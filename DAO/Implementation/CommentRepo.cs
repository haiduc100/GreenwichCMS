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
        private readonly ILogger _logger;

        public CommentRepo(GreenwichContext greenwichContext, ILogger logger)
        {
            _greenwichContext = greenwichContext;
            _logger = logger;
        }
        public bool CreateComment(CommentDTOs comment)
        {
            throw new NotImplementedException();

        }

        public bool DeleteComment(Guid commentId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Comment> GetComment()
        {
            return _greenwichContext.Comment.ToList();
        }

        public bool UpdateComment(CommentDTOs comment)
        {
            throw new NotImplementedException();
        }
    }
}