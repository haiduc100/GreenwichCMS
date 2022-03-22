using System;

namespace GreenwichCMS.Models.DTOs
{
    public class IdeaDTOs
    {
        public Guid Id { get; set; }
        public Guid Author { get; set; }
        public virtual UserDTOs User { get; set; }
        public string Title { get; set; }
        public string Slug { get; set; }
        public string Content { get; set; }
        public DateTime FirstClosureDate { get; set; }
        public DateTime FinalClosureDate { get; set; }
        public bool Privacy { get; set; }
        public string IdeaCategoryName { get; set; }
    }
}
