// Models/Book.cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Api.Models;

public class Book
{
    public int Id { get; set; }

    [Required, StringLength(300)]
    public string Title { get; set; } = default!;

    [Range(0, 3000)]
    public int? PublicationYear { get; set; }

    // FK to Author
    [Required]
    public int AuthorId { get; set; }

    [ForeignKey(nameof(AuthorId))]
    public Author? Author { get; set; }
}
