using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SSCafe.UserManagement.Application.DTOs;
using SSCafe.UserManagement.Application.Services;

namespace SSCafe.UserManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly RoleService _roleService;
        public RoleController(RoleService roleService)
        {
            _roleService = roleService;
        }
        [HttpGet]
        public IActionResult GetAllRoles()
        {
            var roles = _roleService.GetAllRoles();
            return Ok(roles);
        }

        [HttpGet("{id}")]
        public IActionResult GetRoleById(int id)
        {
            var role = _roleService.GetRoleById(id);
            if (role == null)
            {
                return NotFound();
            }
            return Ok(role);
        }

        [HttpPost]
        public IActionResult AddRole(RoleDto roleDto)
        {
            _roleService.AddRole(roleDto);
            return CreatedAtAction(nameof(GetRoleById), new { id = roleDto.Id }, roleDto);
        }

        [HttpPut]
        public IActionResult UpdateRole(RoleDto roleDto)
        {
            _roleService.UpdateRole(roleDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteRole(int id)
        {
            _roleService.DeleteRole(id);
            return NoContent();
        }
    }
}
