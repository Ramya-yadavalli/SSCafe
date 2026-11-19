
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

// Load Ocelot configuration
builder.Configuration.AddJsonFile(
    "ocelot.json",
    optional: false,
    reloadOnChange: true
);

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerForOcelot(builder.Configuration);

// Configure HTTP client for downstream HTTPS APIs
builder.Services.ConfigureHttpClientDefaults(http =>
{
    http.ConfigurePrimaryHttpMessageHandler(() =>
        new HttpClientHandler
        {
            ServerCertificateCustomValidationCallback =
                HttpClientHandler.DangerousAcceptAnyServerCertificateValidator
        });

    http.ConfigureHttpClient(client =>
    {
        client.DefaultRequestVersion = HttpVersion.Version11;
        client.DefaultVersionPolicy =
            HttpVersionPolicy.RequestVersionExact;
    });
});

// CORS configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactClient", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Register Ocelot ONLY ONCE
builder.Services.AddOcelot(builder.Configuration);

// Build application
var app = builder.Build();

// CORS must be before Ocelot
app.UseCors("ReactClient");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Redirect root to Swagger
app.Use(async (context, next) =>
{
    if (context.Request.Path == "/")
    {
        context.Response.Redirect("/swagger/index.html");
        return;
    }

    await next();
});

// Swagger UI
app.UseSwaggerForOcelotUI(options =>
{
    options.PathToSwaggerGenerator = "/swagger/docs";
});

// Ocelot must be the last middleware
await app.UseOcelot();

app.Run();
