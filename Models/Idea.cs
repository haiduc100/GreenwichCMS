using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace GreenwichCMS.Models
{
    public class Idea
    {
        [Key]
        public Guid Id { get; set; }
        [ForeignKey("Users")]
        public Guid Author { get; set; }
        public virtual Users User { get; set; }
        public string Title { get; set; }
        public string Slug { get; set; }
        public string Content { get; set; }
        public DateTime FirstClosureDate { get; set; }
        public DateTime FinalClosureDate { get; set; }
        public string Privacy { get; set; }
        
    }
}