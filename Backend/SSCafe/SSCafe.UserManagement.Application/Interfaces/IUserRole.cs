using SSCafe.UserManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Application.Interfaces
{
    public interface IUserRole
    {
        UserRole GetUserRoleById(int id);
        List<UserRole> GetAllUserRoles();
        void AddUserRole(UserRole userRole);
        void UpdateUserRole(UserRole userRole);
        void DeleteUserRole(int id);
    }
}
