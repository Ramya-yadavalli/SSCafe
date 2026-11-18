using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SSCafe.UserManagement.Application.DTOs;
using SSCafe.UserManagement.Application.Services;

namespace SSCafe.UserManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRoleController : ControllerBase
    {
        private readonly UserRoleService _userRoleService;
        public UserRoleController(UserRoleService userRoleService)
        {
            _userRoleService = userRoleService;
        }

        [HttpGet]
        public IActionResult GetAllUserRoles()
        {
            var userRoles = _userRoleService.GetAllUserRoles();
            return Ok(userRoles);
        }

        [HttpGet("{id}")]
        public IActionResult GetUserRoleById(int id)
        {
            var userRole = _userRoleService.GetUserRoleById(id);
            if (userRole == null)
            {
                return NotFound();
            }
            return Ok(userRole);
        }

        [HttpPost]
        public IActionResult AddUserRole(UserRoleDto userRoleDto)
        {
            _userRoleService.AddUserRole(userRoleDto);
            return CreatedAtAction(nameof(GetUserRoleById), new { id = userRoleDto.Id }, userRoleDto);
        }

        [HttpPut]
        public IActionResult UpdateUserRole(UserRoleDto userRoleDto)
        {
            _userRoleService.UpdateUserRole(userRoleDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUserRole(int id)
        {
            _userRoleService.DeleteUserRole(id);
            return NoContent();
        }
    }
}
