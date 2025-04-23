using Microsoft.AspNetCore.Mvc;
using CoreZiteService.Services;
using CoreZiteService.Dtos;
using CoreZiteService.Models;

namespace CoreZiteService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterDto dto)
        {
            if (await _authService.EmailExists(dto.Email))
                return BadRequest("Email já cadastrado.");

            var user = await _authService.Register(dto);
            return Ok(new
            {
                message = "Usuário registrado com sucesso!",
                user.Id,
                user.Username,
                user.Email
            });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto dto)
        {
            var user = await _authService.Login(dto);
            if (user == null)
                return Unauthorized("Credenciais inválidas.");

            return Ok(new
            {
                message = "Login realizado com sucesso!",
                user.Id,
                user.Username
            });
        }
    }
}
