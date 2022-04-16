using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;

namespace GreenwichCMS.DAO
{
    public interface IIdeaRepo
    {
        public IEnumerable<Idea> GetIdea();
        public string CreateIdea(IdeaDTOs idea, List<string> listFilePaths);
        public string UpdateIdea(Idea idea);
        public string DeleteIdea(Guid ideaId);
        public IEnumerable<Idea> GetIdeasByCategoryName(string categoryName);
        public Idea GetIdeaById(Guid id);

    }
}