// Models/Author.cs
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookStore.Api.Models;

public class Author
{
    public int Id { get; set; }

    [Required, StringLength(200)]
    public string Name { get; set; } = default!;

    [StringLength(500)]
    public string? Bio { get; set; }

    public ICollection<Book> Books { get; set; } = new List<Book>();
}
