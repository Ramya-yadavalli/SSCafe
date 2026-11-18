using SSCafe.UserManagement.Application.Interfaces;
using SSCafe.UserManagement.Domain.Entities;
using SSCafe.UserManagement.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Infrastructure.Repositories
{
    public class UserRoleRepository : IUserRole
    {
        private readonly AppDbContext _context;
        public UserRoleRepository(AppDbContext context)
        {
            _context = context;
        }
        public UserRole GetUserRoleById(int id)
        {
            return _context.UserRoles.Find(id);
        }
        public List<UserRole> GetAllUserRoles()
        {
            return _context.UserRoles.ToList();
        }
        public void AddUserRole(UserRole userRole)
        {
            _context.UserRoles.Add(userRole);
            _context.SaveChanges();
        }
        public void UpdateUserRole(UserRole userRole)
        {
            _context.UserRoles.Update(userRole);
            _context.SaveChanges();
        }
        public void DeleteUserRole(int id)
        {
            var userRole = _context.UserRoles.Find(id);
            if (userRole != null)
            {
                _context.UserRoles.Remove(userRole);
                _context.SaveChanges();
            }
        }
    }
}
