// Dtos/AuthorDtos.cs
using System.ComponentModel.DataAnnotations;

namespace BookStore.Api.Dtos;

public record AuthorCreateDto(
    [Required, StringLength(200)] string Name,
    [StringLength(500)] string? Bio
);

public record AuthorUpdateDto(
    [Required, StringLength(200)] string Name,
    [StringLength(500)] string? Bio
);

public record AuthorReadDto(
    int Id,
    string Name,
    string? Bio
);
