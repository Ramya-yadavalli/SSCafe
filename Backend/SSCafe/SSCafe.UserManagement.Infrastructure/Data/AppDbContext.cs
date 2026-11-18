using Microsoft.EntityFrameworkCore;
using SSCafe.UserManagement.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SSCafe.UserManagement.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
    }
}
