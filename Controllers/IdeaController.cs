﻿using GreenwichCMS.Models;
using GreenwichCMS.Models.DTOs;
using GreenwichCMS.Models.ModelPassFromClient;
using GreenwichCMS.Services.Implementation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace GreenwichCMS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IdeaController : ControllerBase
    {
        private readonly IideaServices _ideaServices;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public IdeaController(IideaServices ideaServices, IWebHostEnvironment webHostEnvironment)
        {
            _ideaServices = ideaServices;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        [AllowAnonymous]
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
        // [Authorize]
        public async Task<IActionResult> CreateIdeaAsync(IList<IFormFile> files, [FromForm] IdeaFromClient idea)
        {

            var filepath = Path.Combine(_webHostEnvironment.ContentRootPath, "FileIdea");
            if (!Directory.Exists(filepath))
            {
                Directory.CreateDirectory(filepath);
            }
            var targetToSave = Path.Combine(filepath, idea.Title);
            Directory.CreateDirectory(targetToSave);
            var ListFilePaths = new List<string>();
            var folderName = Path.Combine("FileIdea", idea.Title);
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    var dbPath = Path.Combine(folderName, formFile.FileName);
                    var filePathToSave = Path.Combine(targetToSave, formFile.FileName);
                    ListFilePaths.Add(dbPath);
                    using var stream = new FileStream(filePathToSave, FileMode.Create);
                    await formFile.CopyToAsync(stream);
                }
            }

            var newIdea = new IdeaDTOs()
            {
                Author = idea.Author,
                Content = idea.Content,
                DisLikeCount = 0,
                IdeaCategoryName = idea.IdeaCategoryName,
                LikeCount = 0,
                Privacy = idea.Privacy,
                Slug = idea.Slug,
                Title = idea.Title
            };
            var signal = _ideaServices.CreateIdea(newIdea, ListFilePaths);
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
        // [Authorize(Roles = "Quality Assurance Manager")]
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
        // [Authorize(Roles = "Quality Assurance Manager")]
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
