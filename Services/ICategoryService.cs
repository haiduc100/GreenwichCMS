using GreenwichCMS.Models.DTOs;
using System;
using System.Collections.Generic;

namespace GreenwichCMS.Services
{
    public interface ICategoryService
    {
        public IEnumerable<IdeaCategoryDTOs> GetCategory();
        public string CreateCategory(IdeaCategoryDTOs category);
        public string UpdateCategory(IdeaCategoryDTOs category);

        public string DeleteCategory(Guid id);
    }
}
