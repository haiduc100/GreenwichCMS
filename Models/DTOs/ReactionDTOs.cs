using System;

namespace GreenwichCMS.Models.DTOs
{
    public class ReactionDTOs
    {
        public Guid ReactionId { get; set; }
        public virtual Guid UserId { get; set; }
        public string UserName { get; set; }
        public virtual Guid IdeaId { get; set; }
        public string IdeaTitle { get; set; }
        public bool Context { get; set; }
    }
}
