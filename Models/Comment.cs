using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models
{
    public class Comment
    {
        [Key]
        public Guid CommentId { get; set; }
        [ForeignKey("Idea")]
        public virtual Guid IdeaId { get; set; }
        public Idea Idea { get; set; }
        [ForeignKey("Users")]
        public virtual Guid ReplyBy { get; set; }
        public Users Users { get; set; }
        public string Content { get; set; }

    }
}