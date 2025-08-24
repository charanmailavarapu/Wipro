using Microsoft.EntityFrameworkCore;

namespace RazorEmployProjectNew.Models
{
      public class EFCoreDbContext : DbContext
        {
            //Constructor calling the Base DbContext Class Constructor
            public EFCoreDbContext(DbContextOptions<EFCoreDbContext> options) : base(options)
            {

            }
            //OnConfiguring() method is used to select and configure the data source
            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                if (!optionsBuilder.IsConfigured)
                {
                    optionsBuilder.UseSqlServer("Server=DESKTOP-9L94JKC;Database=wiprojuly;Trusted_Connection=True;TrustServerCertificate=True");
                }
            }
            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<EmployNew>().ToTable("Employ");
            }

            public DbSet<EmployNew> Employees { get; set; }
        
    }
}

