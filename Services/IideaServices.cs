using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using System;
using System.Collections.Generic;

namespace GreenwichCMS.Services.Implementation
{
    public interface IideaServices
    {
        public IEnumerable<IdeaDTOs> GetIdea();
        public string CreateIdea(IdeaDTOs idea,List<string> listFilePaths);
        public string UpdateIdea(IdeaDTOs idea);
        public string DeleteIdea(Guid ideaId);
        public IEnumerable<IdeaDTOs> GetIdeasByCateName(string cateName);
        public IdeaDTOs GetIdeaById(Guid id);
    }
}
