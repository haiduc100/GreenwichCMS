using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Models.ModelPassFromClient;
using Microsoft.AspNetCore.Authorization;
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

        // [Authorize]
        [HttpGet("UserId")]
        public IActionResult GetReactionsByUserId(Guid id)
        {
            return Ok(_reactionService.GetReactionsByUserId(id));
        }

        [HttpGet("IdeaId")]
        // [Authorize]
        public IActionResult GetReactionsByIdeaId(Guid id)
        {
            return Ok(_reactionService.GetReactionsByIdeaId(id));
        }

        [HttpPost]
        // [Authorize]
        public IActionResult PostReactionsByIdea(PostReactionFromClient reaction)
        {
            var reactionDtos = new ReactionDTOs()
            {
                Context = reaction.Context,
                UserId = reaction.UserId,
                IdeaId = reaction.IdeaId
            };
            var signal = _reactionService.AddReaction(reactionDtos);
            if (signal == "ok")
            {
                return Ok("Add reaction successfully");
            }
            return BadRequest(signal);
        }

        [HttpDelete]
        // [Authorize]
        public IActionResult DeleteReaction(DeleteReactionFromClient reaction)
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
