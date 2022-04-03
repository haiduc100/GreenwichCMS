using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models.ModelPassFromClient
{
    public class PostReactionFromClient
    {
        public virtual Guid UserId { get; set; }
        public virtual Guid IdeaId { get; set; }
        public bool Context { get; set; }
    }
}
