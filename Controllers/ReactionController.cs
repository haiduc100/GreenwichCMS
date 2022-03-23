using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using System;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReactionController : ControllerBase
    {
        private readonly IReactionService _reactionService;
        public ReactionController(IReactionService reactionService)
        {
            _reactionService = reactionService;
        }
        [HttpGet("UserId")]
        public IActionResult GetReactionsByUserId(Guid id)
        {
            return Ok(_reactionService.GetReactionsByUserId(id));
        }

        [HttpGet("IdeaId")]
        public IActionResult GetReactionsByIdeaId(Guid id)
        {
            return Ok(_reactionService.GetReactionsByIdeaId(id));
        }

        [HttpPost]
        public IActionResult PostReactionsByIdea(ReactionDTOs reaction)
        {
            var signal = _reactionService.AddReaction(reaction);
            if (signal == "ok")
            {
                return Ok("Add reaction successfully");
            }
            return BadRequest(signal);
        }

        [HttpDelete]
        public IActionResult DeleteReaction(ReactionDTOs reaction)
        {
            var signal = _reactionService.DeleteReaction(reaction);
            if (signal == "ok")
            {
                return Ok("Delete reaction successfully");
            }
            return BadRequest(signal);

        }
    }
}
