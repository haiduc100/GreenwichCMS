using AutoMapper;
using GreenwichCMS.DAO;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Services.Implementation
{
    public class CommentService : ICommentService
    {
        private readonly ICommentRepo _commentRepo;
        private readonly IMapper _mapper;
        public CommentService(ICommentRepo commentRepo, IMapper mapper)
        {
            _commentRepo = commentRepo;
            _mapper = mapper;
        }
        public IEnumerable<CommentDTOs> GetComments()
        {
            var listComments = _commentRepo.GetComment();
            return _mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTOs>>(listComments);
        }

        public string CreateComment(CommentDTOs comment)
        {
            var newComment = _mapper.Map<CommentDTOs, Comment>(comment);
            return _commentRepo.CreateComment(newComment);
        }

        public string DeleteComment(Guid commentId, Guid CreateBy)
        {
            return _commentRepo.DeleteComment(commentId, CreateBy);
        }

        public string UpdateComment(CommentDTOs comment, Guid CreateBy)
        {
            var newComment = _mapper.Map<CommentDTOs, Comment>(comment);
            return _commentRepo.UpdateComment(newComment, CreateBy);
        }

        public IEnumerable<CommentDTOs> GetCommentsByIdeaId(Guid ideaId)
        {
            var listComments = _commentRepo.GetCommentsByIdeaId(ideaId);
            return _mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTOs>>(listComments);
        }

        public IEnumerable<CommentDTOs> GetCommentByUserId(Guid userId)
        {
            var listComments = _commentRepo.GetCommentByUserId(userId);
            return _mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTOs>>(listComments);
        }
    }
}
