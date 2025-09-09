// Controllers/AuthorsController.cs
using BookStore.Api.Data;
using BookStore.Api.Dtos;
using BookStore.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Api.Controllers;

[ApiController]
[Route("api/authors")]
public class AuthorsController : ControllerBase
{
    private readonly BookStoreDbContext _db;
    public AuthorsController(BookStoreDbContext db) => _db = db;

    // GET: api/authors
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AuthorReadDto>>> GetAuthors()
    {
        var authors = await _db.Authors
            .Select(a => new AuthorReadDto(a.Id, a.Name, a.Bio))
            .ToListAsync();

        return Ok(authors);
    }

    // GET: api/authors/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<AuthorReadDto>> GetAuthor(int id)
    {
        var author = await _db.Authors.FindAsync(id);
        if (author == null) return NotFound();

        return Ok(new AuthorReadDto(author.Id, author.Name, author.Bio));
    }

    // POST: api/authors
    [HttpPost]
    public async Task<ActionResult<AuthorReadDto>> CreateAuthor([FromBody] AuthorCreateDto dto)
    {
        if (!ModelState.IsValid) return ValidationProblem(ModelState);

        var author = new Author { Name = dto.Name, Bio = dto.Bio };
        _db.Authors.Add(author);
        await _db.SaveChangesAsync();

        var read = new AuthorReadDto(author.Id, author.Name, author.Bio);
        return CreatedAtAction(nameof(GetAuthor), new { id = author.Id }, read);
    }

    // PUT: api/authors/5
    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateAuthor(int id, [FromBody] AuthorUpdateDto dto)
    {
        if (!ModelState.IsValid) return ValidationProblem(ModelState);

        var author = await _db.Authors.FindAsync(id);
        if (author == null) return NotFound();

        author.Name = dto.Name;
        author.Bio = dto.Bio;

        await _db.SaveChangesAsync();
        return NoContent();
    }

    // DELETE: api/authors/5
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteAuthor(int id)
    {
        var author = await _db.Authors.FindAsync(id);
        if (author == null) return NotFound();

        _db.Authors.Remove(author);
        await _db.SaveChangesAsync();
        return NoContent();
    }

    // GET: api/authors/5/books
    [HttpGet("{authorId:int}/books")]
    public async Task<ActionResult<IEnumerable<BookReadDto>>> GetBooksByAuthor(int authorId)
    {
        var authorExists = await _db.Authors.AnyAsync(a => a.Id == authorId);
        if (!authorExists) return NotFound($"Author {authorId} not found.");

        var books = await _db.Books
            .Where(b => b.AuthorId == authorId)
            .Include(b => b.Author)
            .Select(b => new BookReadDto(b.Id, b.Title, b.PublicationYear, b.AuthorId, b.Author!.Name))
            .ToListAsync();

        return Ok(books);
    }
}
