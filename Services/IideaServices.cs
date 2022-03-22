using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using System;
using System.Collections.Generic;

namespace GreenwichCMS.Services.Implementation
{
    public interface IideaServices
    {
        public IEnumerable<IdeaDTOs> GetIdea(PageParams pageParams);
        public string CreateIdea(IdeaDTOs idea);
        public string UpdateIdea(IdeaDTOs idea);
        public string DeleteIdea(Guid ideaId);
    }
}
