// Dtos/BookDtos.cs
using System.ComponentModel.DataAnnotations;

namespace BookStore.Api.Dtos;

public record BookCreateDto(
    [Required, StringLength(300)] string Title,
    [Range(0, 3000)] int? PublicationYear,
    [Required] int AuthorId
);

public record BookUpdateDto(
    [Required, StringLength(300)] string Title,
    [Range(0, 3000)] int? PublicationYear,
    [Required] int AuthorId
);

public record BookReadDto(
    int Id,
    string Title,
    int? PublicationYear,
    int AuthorId,
    string AuthorName
);
