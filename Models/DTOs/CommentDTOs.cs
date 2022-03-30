using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models.DTOs
{
    public class CommentDTOs
    {
        public Guid CommentId { get; set; }
        public Guid IdeaId { get; set; }
        public Guid ReplyBy { get; set; }
        public string Content { get; set; }
    }
}