using Microsoft.EntityFrameworkCore;

namespace RajorExamples.Models
{
    public class BankDbContext : DbContext
    {
        //Constructor calling the Base DbContext Class Constructor
        public BankDbContext(DbContextOptions<BankDbContext> options) : base(options)
        {

        }
        //OnConfiguring() method is used to select and configure the data source
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=CHARAN;Database=Bank;Trusted_Connection=True;TrustServerCertificate=True");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>().ToTable("Account");
        }

        public DbSet<Account> Accounts { get; set; }
    }
}