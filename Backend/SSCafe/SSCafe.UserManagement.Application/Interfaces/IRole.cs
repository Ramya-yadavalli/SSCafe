using SSCafe.UserManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Application.Interfaces
{
    public interface IRole
    {
        Role GetRoleById(int id);
        List<Role> GetAllRoles();
        void AddRole(Role role);
        void UpdateRole(Role role);
        void DeleteRole(int id);
    }
}
