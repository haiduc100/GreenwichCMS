using GreenwichCMS.Models;
using System;
using System.Collections.Generic;

namespace GreenwichCMS.DAO
{
    public interface ICategoryRepo
    {
        public IEnumerable<IdeaCategory> GetCategory();
        public string CreateCategory(IdeaCategory category);
        public string DeleteCategory(Guid id);
    }
}
