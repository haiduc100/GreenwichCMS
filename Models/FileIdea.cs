using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Models
{
    public class FileIdea
    {
        public Guid Id { get; set; }
        public Guid IdeaId { get; set; }
        public string FilePath { get; set; }
    }
}
