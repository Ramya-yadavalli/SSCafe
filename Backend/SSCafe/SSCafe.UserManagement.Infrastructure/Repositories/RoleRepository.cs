using SSCafe.UserManagement.Application.Interfaces;
using SSCafe.UserManagement.Domain.Entities;
using SSCafe.UserManagement.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Infrastructure.Repositories
{
    public class RoleRepository : IRole
    {
        private readonly AppDbContext _context;
        public RoleRepository(AppDbContext context)
        {
            _context = context;
        }
        public void AddRole(Role role)
        {
            _context.Roles.Add(role);
            _context.SaveChanges();
        }
        public void DeleteRole(int id)
        {
            var role = _context.Roles.Find(id);
            if (role != null)
            {
                _context.Roles.Remove(role);
                _context.SaveChanges();
            }
        }
        public List<Role> GetAllRoles()
        {
            return _context.Roles.ToList();
        }
        public Role GetRoleById(int id)
        {
            return _context.Roles.Find(id);
        }
        public void UpdateRole(Role role)
        {
            _context.Roles.Update(role);
            _context.SaveChanges();
        }
    }
}
