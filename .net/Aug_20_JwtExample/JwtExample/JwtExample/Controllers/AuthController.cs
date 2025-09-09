using JwtExample.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JwtExample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

            private readonly IAuthService _authService;

            public AuthController(IAuthService authService)
            {
            _authService = authService;
            }

            [HttpPost("login")]
            public async Task<IActionResult> Login([FromBody] LoginRequest request)
            {
                var token = await _authService.Authenicate(request.Username, request.Password);
                if (string.IsNullOrEmpty(token))
                {
                    return Unauthorized("Invalid Credentials");
                }
                return Ok(new { Token = token });
            }
     }
}

