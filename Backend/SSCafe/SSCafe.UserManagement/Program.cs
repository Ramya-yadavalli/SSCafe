
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using SSCafe.UserManagement.Application.Interfaces;
using SSCafe.UserManagement.Application.Services;
using SSCafe.UserManagement.Infrastructure.Data;
using SSCafe.UserManagement.Infrastructure.Repositories;
using SSCafe.UserManagement.Middleware;
using System.Text;


Log.Logger = new LoggerConfiguration().WriteTo.Console().CreateBootstrapLogger();
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("SqlCon")));

// Configure Serilog 
builder.Services.AddSerilog((services, configuration) => configuration
      .ReadFrom.Configuration(builder.Configuration)
      .ReadFrom.Services(services)
      .Enrich.FromLogContext()
);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("sdgfchvjbhvjgfytrdesdxfgcvhjbgyutrdxfcgv bhjgyudtrfcghvbhj"))
    };
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});
builder.Services.AddScoped<IUser, UserRepository>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<IRole, RoleRepository>();
builder.Services.AddScoped<RoleService>();
builder.Services.AddScoped<IUserRole, UserRoleRepository>();
builder.Services.AddScoped<UserRoleService>();
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseSerilogRequestLogging();
    app.UseMiddleware<GlobalExceptionHandlingMiddleware>();
}

app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();