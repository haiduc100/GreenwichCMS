using System;
using System.Collections.Generic;

namespace GreenwichCMS.Models.DTOs
{
    public class IdeaCategoryDTOs
    {
        public Guid IdeaCategoryId { get; set; }
        public IEnumerable<Idea> Idea { get; set; }
        public string Title { get; set; }
        public DateTime FirstClosureDate { get; set; }
        public DateTime FinalClosureDate { get; set; }
    }
}
