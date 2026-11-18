using Microsoft.Extensions.Logging;
using SSCafe.UserManagement.Application.DTOs;
using SSCafe.UserManagement.Application.Interfaces;
using SSCafe.UserManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Application.Services
{
    public class UserService
    {
        private readonly IUser _user;
        private readonly ILogger<UserService> _logger;
        public UserService(IUser user, ILogger<UserService> logger)
        {
            _user = user;
            _logger = logger;
        }

        public IEnumerable<UserDto> GetAllUsers()
        {
            _logger.LogInformation("Getting all users");
            return _user.GetAllUsers().Select(u => new UserDto
            {
                Id = u.Id,
                Name = u.Name,
                Email = u.Email,
                Password = u.Password
            });
        }

        public UserDto GetUserById(int id)
        {
            var user = _user.GetUserById(id);
            if (user == null) return null;
            _logger.LogInformation("Getting user by ID: {Id}", id);
            return new UserDto
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                Password = user.Password
            };
        }

        public void AddUser(UserDto userDto)
        {
            var user = new User
            {
                Name = userDto.Name,
                Email = userDto.Email,
                Password = userDto.Password
            };
            _logger.LogInformation("Adding new user: {User}", user);
            _user.AddUser(user);
        }

        public void UpdateUser(UserDto userDto)
        {
            var user = new User
            {
                Id = userDto.Id,
                Name = userDto.Name,
                Email = userDto.Email,
                Password = userDto.Password
            };
            _logger.LogInformation("Updating user: {User}", user);
            _user.UpdateUser(user);
        }
        public void DeleteUser(int id)
        {
            _logger.LogInformation("Deleting user with ID: {Id}", id);
            _user.DeleteUser(id);
        }
    }
}