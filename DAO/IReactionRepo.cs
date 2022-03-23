using GreenwichCMS.Models;
using System;
using System.Collections.Generic;

namespace GreenwichCMS.DAO.Implementation
{
    public interface IReactionRepo
    {
        public string AddReaction(Reaction reaction);
        public string DeleteReaction(Reaction reaction);

        public IEnumerable<Reaction> GetReactionsByIdeaId(Guid IdeaId);
        public IEnumerable<Reaction> GetReactionsByUserId(Guid userId);
    }
}
