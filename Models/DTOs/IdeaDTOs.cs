using System;
using System.Collections.Generic;

namespace GreenwichCMS.Models.DTOs
{
    public class IdeaDTOs
    {
        public Guid Id { get; set; }
        public Guid Author { get; set; }
        public string UserName { get; set; }
        public string UserRole { get; set; }
        public string Title { get; set; }
        public string Slug { get; set; }
        public string Content { get; set; }
        public bool Privacy { get; set; }
        public string IdeaCategoryName { get; set; }
        public int LikeCount { get; set; }
        public int DisLikeCount { get; set; }
        public IEnumerable<FileIdea> Files { get; set; }
    }
}
