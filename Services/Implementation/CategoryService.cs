using AutoMapper;
using GreenwichCMS.DAO;
using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using System;
using System.Collections.Generic;

namespace GreenwichCMS.Services.Implementation
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepo _categoryRepo;
        private readonly IMapper _mapper;
        public CategoryService(ICategoryRepo categoryRepo, IMapper mapper)
        {
            _categoryRepo = categoryRepo;
            _mapper = mapper;
        }
        public string CreateCategory(IdeaCategoryDTOs category)
        {
            var categoryMapped = _mapper.Map<IdeaCategory>(category);
            var signal = _categoryRepo.CreateCategory(categoryMapped);
            return signal;
        }

        public string DeleteCategory(Guid id)
        {
            return _categoryRepo.DeleteCategory(id);
        }

        public IEnumerable<IdeaCategoryDTOs> GetCategory()
        {
            return _mapper.Map<IEnumerable<IdeaCategoryDTOs>>(_categoryRepo.GetCategory());
        }

        public string UpdateCategory(IdeaCategoryDTOs category)
        {
            var categoryMapped = _mapper.Map<IdeaCategoryDTOs, IdeaCategory>(category);
            var signal = _categoryRepo.UpdateCategory(categoryMapped);
            return signal;
        }
    }
}
