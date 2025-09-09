using BookStore.Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var useInMemory = builder.Configuration.GetValue("UseInMemory", false);

if (useInMemory)
{
    builder.Services.AddDbContext<BookStoreDbContext>(opt =>
    opt.UseInMemoryDatabase("BookStoreDb"));
}
else
{
    var connectionString = builder.Configuration.GetConnectionString("Default")
    ?? "Server=VENKAT;Database=BookStoreDb;Trusted_Connection=True;TrustServerCertificate=True";
    builder.Services.AddDbContext<BookStoreDbContext>(opt =>
    opt.UseSqlServer(connectionString));
}

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (!useInMemory)
{
    using var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<BookStoreDbContext>();
    db.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();