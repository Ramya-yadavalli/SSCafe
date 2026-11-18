
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Configuration.AddJsonFile(
    "ocelot.json",
    optional: false,
    reloadOnChange: true
);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddOcelot(builder.Configuration);
builder.Services.AddSwaggerForOcelot(builder.Configuration);

// Allow SwaggerForOcelot to access the downstream HTTPS API
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

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Use(async (context, next) =>
{
    if (context.Request.Path == "/")
    {
        context.Response.Redirect("/swagger/index.html");
        return;
    }

    await next();
});

app.UseSwaggerForOcelotUI(opt =>
{
    opt.PathToSwaggerGenerator = "/swagger/docs";
});

// Ocelot should be the last middleware
await app.UseOcelot();

app.Run();
