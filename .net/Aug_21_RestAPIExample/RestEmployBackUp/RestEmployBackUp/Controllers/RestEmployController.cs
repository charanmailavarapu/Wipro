using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestEmployBackUp.Models;
using RestEmployBackUp.Services;
using System.Formats.Asn1;

namespace RestEmployBackup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestEmployController : ControllerBase
    {
        private readonly IEmployService _employService;

        public RestEmployController(IEmployService employService)
        {
            _employService = employService;
        }

        [HttpGet]
        public async Task<IActionResult> ShowEmployAll()
        {
            var result = await _employService.ShowEmployAsync();
            return Ok(result);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> SearchEmployAsync(int id)
        {
            var result = await _employService.SearchByEmpnoAsync(id);
            if (result == null) { return NotFound(); }
            return Ok(result);
        }


        [HttpPost]
        public async Task<IActionResult> AddEmploy(Employ employ)
        {
            var result = await _employService.AddEmployAsync(employ);
            return Ok(result);
        }
    }
}