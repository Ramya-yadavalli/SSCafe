

using Microsoft.Extensions.Logging;
using SSCafe.UserManagement.Application.DTOs;
using SSCafe.UserManagement.Application.Interfaces;
using SSCafe.UserManagement.Domain.Entities;

namespace SSCafe.UserManagement.Application.Services
{
    public class RoleService
    {
        private readonly IRole _role;
        private readonly ILogger<RoleService> _logger;
        public RoleService(IRole role, ILogger<RoleService> logger)
        {
            _role = role;
            _logger = logger;
        }

        public IEnumerable<RoleDto> GetAllRoles()
        {
            _logger.LogInformation("Getting all roles");
            return _role.GetAllRoles().Select(r => new RoleDto
            {
                Id = r.Id,
                Name = r.Name
            });
        }

        public RoleDto GetRoleById(int id)
        {
            _logger.LogInformation("Getting role by ID: {Id}", id);
            var role = _role.GetRoleById(id);
            if (role == null) return null;
            _logger.LogDebug("Role found: {Role}", role);
            return new RoleDto
            {
                Id = role.Id,
                Name = role.Name
            };
        }

        public void AddRole(RoleDto roleDto)
        {
            var role = new Role
            {
                Name = roleDto.Name
            };
            _logger.LogInformation("Adding new role: {Role}", role);
            _role.AddRole(role);
        }

        public void UpdateRole(RoleDto roleDto)
        {
            var role = new Role
            {
                Id = roleDto.Id,
                Name = roleDto.Name
            };
            _logger.LogInformation("Updating role: {Role}", role);
            _role.UpdateRole(role);
        }

        public void DeleteRole(int id)
        {
            _logger.LogInformation("Deleting role with ID: {Id}", id);
            _role.DeleteRole(id);
        }
    }
}
