using GreenwichCMS.Context;
using GreenwichCMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GreenwichCMS.DAO.Implementation
{
    public class CategoryRepo : ICategoryRepo
    {
        private readonly GreenwichContext _greenwichContext;
        public CategoryRepo(GreenwichContext greenwichContex)
        {
            _greenwichContext = greenwichContex;
        }
        public string CreateCategory(IdeaCategory category)
        {
            try
            {
                _greenwichContext.IdeaCategory.Add(category);
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string DeleteCategory(Guid id)
        {
            try
            {
                var currentCate = _greenwichContext.IdeaCategory.FirstOrDefault(p => p.IdeaCategoryId == id);
                _greenwichContext.Remove(currentCate);
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public IEnumerable<IdeaCategory> GetCategory()
        {
            return _greenwichContext.IdeaCategory;
        }

        public string UpdateCategory(IdeaCategory category)
        {
            try
            {
                var currentCategory = _greenwichContext.IdeaCategory.FirstOrDefault(i => i.IdeaCategoryId == category.IdeaCategoryId);
                if (currentCategory == null)
                {
                    throw new Exception("Category is null");
                }
                currentCategory.Title = category.Title;
                currentCategory.FinalClosureDate = category.FinalClosureDate;
                currentCategory.FirstClosureDate = category.FirstClosureDate;
                _greenwichContext.SaveChanges();
                return "ok";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
