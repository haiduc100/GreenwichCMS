using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Services.Implementation;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Text.Json;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IdeaController : ControllerBase
    {
        private readonly IideaServices _ideaServices;
        public IdeaController(IideaServices ideaServices)
        {
            _ideaServices = ideaServices;
        }

        [HttpGet]
        public IActionResult GetIdeas([FromQuery] PageParams pageParams)
        {
            var listIdeas = _ideaServices.GetIdea();
            listIdeas = listIdeas.OrderBy(on => on.Title)
                            .Skip((pageParams.PageNumber - 1) * pageParams.PageSize)
                            .Take(pageParams.PageSize);

            if (pageParams.SearchName != null)
            {
                var p = pageParams.SearchName;
                listIdeas = listIdeas.Where(x => x.Title.Contains(pageParams.SearchName, StringComparison.CurrentCultureIgnoreCase)
                     || x.Content.Contains(pageParams.SearchName, StringComparison.CurrentCultureIgnoreCase)).ToList();
            }

            var metaData = new
            {
                listIdeas,
                count = listIdeas.Count(),
            };
            return Ok(metaData);
        }

        [HttpPost]
        public IActionResult CreateIdea(IdeaDTOs idea)
        {
            var signal = _ideaServices.CreateIdea(idea);
            if (signal == "ok")
            {
                return Ok("Create idea successfully");
            }
            else
            {
                return BadRequest(signal);
            }
        }

        [HttpDelete]
        public IActionResult DeleteIdea(Guid id)
        {
            var signal = _ideaServices.DeleteIdea(id);
            if (signal == "ok")
            {
                return Ok("Delete idea successfully");
            }
            else
            {
                return BadRequest(signal);
            }
        }

        [HttpPut]
        public IActionResult UpdateIdea(IdeaDTOs idea)
        {
            var signal = _ideaServices.UpdateIdea(idea);
            if (signal == "ok")
            {
                return Ok("Update idea successfully");
            }
            else
            {
                return BadRequest(signal);
            }
        }
    }
}
