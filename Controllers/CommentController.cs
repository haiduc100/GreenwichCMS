using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/comment")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;
        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        [HttpGet]
        public IActionResult GetComment()
        {
            try
            {
                var listComments = _commentService.GetComments();
                return Ok(listComments);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("userId")]
        // [Authorize]
        public IActionResult GetCommentsByUserId(Guid userId)
        {
            try
            {
                var listComments = _commentService.GetCommentByUserId(userId);
                return Ok(listComments);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("ideaId")]
        // [Authorize]
        public IActionResult GetCommentByIdeaId(Guid ideaId)
        {
            try
            {
                var listComments = _commentService.GetCommentsByIdeaId(ideaId);
                return Ok(listComments);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        // [Authorize]
        public IActionResult DeleteComment(Guid id, Guid CreateBy)
        {
            try
            {
                var signal = _commentService.DeleteComment(id, CreateBy);
                if (signal == "ok")
                {
                    return Ok();
                }
                else
                {
                    return BadRequest(signal);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        // [Authorize]
        public IActionResult CreateComment(CommentDTOs comment)
        {
            try
            {
                var signal = _commentService.CreateComment(comment);
                if (signal == "ok")
                {
                    return Ok(comment);
                }
                else
                {
                    return BadRequest(signal);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        // [Authorize]
        public IActionResult UpdateComment(CommentDTOs comment, Guid CreateBy)
        {
            try
            {
                var signal = _commentService.UpdateComment(comment, CreateBy);
                if (signal == "ok")
                {
                    return Ok();
                }
                else
                {
                    return BadRequest(signal);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
