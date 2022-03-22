using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Services;
using Microsoft.AspNetCore.Mvc;
using System;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public IActionResult GetCategory()
        {
            return Ok(_categoryService.GetCategory());
        }

        [HttpPost]
        public IActionResult CreateCategory(IdeaCategoryDTOs cate)
        {
            var signal = _categoryService.CreateCategory(cate);
            if (signal == "ok")
            {
                return Ok("Create category successfully");
            }
            else
            {
                return BadRequest(signal);
            }
        }

        [HttpDelete]
        public IActionResult DeleteCategory(Guid id)
        {
            var signal = _categoryService.DeleteCategory(id);
            if (signal == "ok")
            {
                return Ok("Delete category successfully");
            }
            else
            {
                return BadRequest(signal);
            }
        }
    }
}
