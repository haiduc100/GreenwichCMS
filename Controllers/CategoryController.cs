using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Models.ModelPassFromClient;
using GreenwichCMS.Services;
using Microsoft.AspNetCore.Authorization;
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
        [AllowAnonymous]
        public IActionResult GetCategory()
        {
            return Ok(_categoryService.GetCategory());
        }

        [HttpPost]
        [Authorize(Roles = "Quality Assurance Manager")]
        public IActionResult CreateCategory(PostCategoryFromClient cate)
        {
            var cateDto = new IdeaCategoryDTOs()
            {
                Title = cate.Title
            };
            var signal = _categoryService.CreateCategory(cateDto);
            if (signal == "ok")
            {
                return Ok("Create category successfully");
            }
            else
            {
                return BadRequest(signal);
            }
        }
        [HttpPut]
        public IActionResult UpdateCategory(IdeaCategoryDTOs Category)
        {
            var signal = _categoryService.UpdateCategory(Category);
            if (signal == "ok")
            {
                return Ok("Update Category successfully");
            }
            else
            {
                return BadRequest(signal);
            }
        }

        [HttpDelete]
        [Authorize(Roles = "Quality Assurance Manager")]
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
