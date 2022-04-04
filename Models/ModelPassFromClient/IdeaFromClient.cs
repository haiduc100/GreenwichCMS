using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models.ModelPassFromClient
{
    public class IdeaFromClient
    {
        public Guid Author { get; set; }
        public string Title { get; set; }
        public string Slug { get; set; }
        public string Content { get; set; }
        public bool Privacy { get; set; }
        public string IdeaCategoryName { get; set; }
    }
}
