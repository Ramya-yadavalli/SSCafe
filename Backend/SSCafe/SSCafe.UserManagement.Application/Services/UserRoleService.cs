using Microsoft.Extensions.Logging;
using SSCafe.UserManagement.Application.DTOs;
using SSCafe.UserManagement.Application.Interfaces;
using SSCafe.UserManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Application.Services
{
    public class UserRoleService
    {
        private readonly IUserRole _userRole;
        private readonly ILogger<UserRoleService> _logger;

        public UserRoleService(IUserRole userRole, ILogger<UserRoleService> logger)
        {
            _userRole = userRole;
            _logger = logger;
        }

        public IEnumerable<UserRoleDto> GetAllUserRoles()
        {
            _logger.LogInformation("Getting all user roles");
            return _userRole.GetAllUserRoles().Select(ur => new UserRoleDto
            {
                Id = ur.Id,
                UserId = ur.UserId,
                RoleId = ur.RoleId
            });
        }

        public UserRoleDto GetUserRoleById(int id)
        {
            _logger.LogInformation("Getting user role by ID: {Id}", id);
            var userRole = _userRole.GetUserRoleById(id);
            if (userRole == null) return null;
            _logger.LogDebug("User role found: {UserRole}", userRole);
            return new UserRoleDto
            {
                Id = userRole.Id,
                UserId = userRole.UserId,
                RoleId = userRole.RoleId
            };
        }

        public void AddUserRole(UserRoleDto userRoleDto)
        {
            _logger.LogInformation("Adding new user role: {UserRole}", userRoleDto);
            var userRole = new UserRole
            {
                UserId = userRoleDto.UserId,
                RoleId = userRoleDto.RoleId
            };
            _logger.LogInformation("Adding new user role: {UserRole}", userRole);
            _userRole.AddUserRole(userRole);
        }

        public void UpdateUserRole(UserRoleDto userRoleDto)
        {
            var userRole = new UserRole
            {
                Id = userRoleDto.Id,
                UserId = userRoleDto.UserId,
                RoleId = userRoleDto.RoleId
            };
            _logger.LogInformation("Updating user role: {UserRole}", userRole);
            _userRole.UpdateUserRole(userRole);
        }
        
        public void DeleteUserRole(int id)
        {
            _logger.LogInformation("Deleting user role with ID: {Id}", id);
            _userRole.DeleteUserRole(id);
        }
    }
}
