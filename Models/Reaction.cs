using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace GreenwichCMS.Models
{
    public class Reaction
    {
        [Key]
        public Guid ReactionId { get; set; }
        [ForeignKey("Users")]
        public virtual Guid UserId { get; set; }
        public Users User { get; set; }
        [ForeignKey("Idea")]
        public virtual Guid IdeaId { get; set; }
        public Idea Idea { get; set; }
        public bool Context { get; set; } //True :Like or False: dislike
    }
}