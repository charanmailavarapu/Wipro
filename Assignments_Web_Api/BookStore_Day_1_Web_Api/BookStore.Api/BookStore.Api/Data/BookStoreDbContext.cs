// Data/BookStoreDbContext.cs
using BookStore.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Api.Data;

public class BookStoreDbContext : DbContext
{
    public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options)
        : base(options) { }

    public DbSet<Author> Authors => Set<Author>();
    public DbSet<Book> Books => Set<Book>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Author>()
            .HasMany(a => a.Books)
            .WithOne(b => b.Author!)
            .HasForeignKey(b => b.AuthorId)
            .OnDelete(DeleteBehavior.Cascade);

        // Seed data (optional)
        modelBuilder.Entity<Author>().HasData(
            new Author { Id = 1, Name = "George Orwell", Bio = "English novelist" },
            new Author { Id = 2, Name = "J.K. Rowling" }
        );

        modelBuilder.Entity<Book>().HasData(
            new Book { Id = 1, Title = "1984", PublicationYear = 1949, AuthorId = 1 },
            new Book { Id = 2, Title = "Animal Farm", PublicationYear = 1945, AuthorId = 1 },
            new Book { Id = 3, Title = "Harry Potter and the Philosopher's Stone", PublicationYear = 1997, AuthorId = 2 }
        );
    }
}
