using Microsoft.EntityFrameworkCore;
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
        public IEnumerable<Idea> Idea { get; set; }
        public string Title { get; set; }
        public DateTime FirstClosureDate { get; set; }
        public DateTime FinalClosureDate { get; set; }
    }
}