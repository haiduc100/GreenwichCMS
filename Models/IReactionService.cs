using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Models.ModelPassFromClient;
using System;
using System.Collections.Generic;

namespace GreenwichCMS.Models
{
    public interface IReactionService
    {
        public string AddReaction(ReactionDTOs reaction);
        public string DeleteReaction(DeleteReactionFromClient reaction);
        public IEnumerable<ReactionDTOs> GetReactionsByIdeaId(Guid IdeaId);
        public IEnumerable<ReactionDTOs> GetReactionsByUserId(Guid userId);
    }
}
