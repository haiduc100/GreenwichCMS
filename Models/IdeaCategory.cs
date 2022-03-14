using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models
{
    public class IdeaCategory
    {
        [Key]
        public Guid IdeaCategoryId { get; set; }
        [ForeignKey("Idea")]
        public virtual Guid IdeaId { get; set; }
        public Idea Idea { get; set; }
        public string Title { get; set; }
    }
}