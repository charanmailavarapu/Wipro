// Controllers/BooksController.cs
using BookStore.Api.Data;
using BookStore.Api.Dtos;
using BookStore.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Api.Controllers;

[ApiController]
[Route("api/books")]
public class BooksController : ControllerBase
{
    private readonly BookStoreDbContext _db;
    public BooksController(BookStoreDbContext db) => _db = db;

    // GET: api/books
    [HttpGet]
    public async Task<ActionResult<IEnumerable<BookReadDto>>> GetBooks()
    {
        var books = await _db.Books
            .Include(b => b.Author)
            .Select(b => new BookReadDto(b.Id, b.Title, b.PublicationYear, b.AuthorId, b.Author!.Name))
            .ToListAsync();

        return Ok(books);
    }

    // GET: api/books/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<BookReadDto>> GetBook(int id)
    {
        var book = await _db.Books
            .Include(b => b.Author)
            .Where(b => b.Id == id)
            .Select(b => new BookReadDto(b.Id, b.Title, b.PublicationYear, b.AuthorId, b.Author!.Name))
            .FirstOrDefaultAsync();

        if (book == null) return NotFound();
        return Ok(book);
    }

    // POST: api/books
    [HttpPost]
    public async Task<ActionResult<BookReadDto>> CreateBook([FromBody] BookCreateDto dto)
    {
        if (!ModelState.IsValid) return ValidationProblem(ModelState);

        var authorExists = await _db.Authors.AnyAsync(a => a.Id == dto.AuthorId);
        if (!authorExists) return BadRequest($"Author {dto.AuthorId} does not exist.");

        var book = new Book
        {
            Title = dto.Title,
            PublicationYear = dto.PublicationYear,
            AuthorId = dto.AuthorId
        };

        _db.Books.Add(book);
        await _db.SaveChangesAsync();

        var created = await _db.Books.Include(b => b.Author).FirstAsync(b => b.Id == book.Id);
        var read = new BookReadDto(created.Id, created.Title, created.PublicationYear, created.AuthorId, created.Author!.Name);

        return CreatedAtAction(nameof(GetBook), new { id = read.Id }, read);
    }

    // PUT: api/books/5
    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateBook(int id, [FromBody] BookUpdateDto dto)
    {
        if (!ModelState.IsValid) return ValidationProblem(ModelState);

        var book = await _db.Books.FindAsync(id);
        if (book == null) return NotFound();

        var authorExists = await _db.Authors.AnyAsync(a => a.Id == dto.AuthorId);
        if (!authorExists) return BadRequest($"Author {dto.AuthorId} does not exist.");

        book.Title = dto.Title;
        book.PublicationYear = dto.PublicationYear;
        book.AuthorId = dto.AuthorId;

        await _db.SaveChangesAsync();
        return NoContent();
    }

    // DELETE: api/books/5
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteBook(int id)
    {
        var book = await _db.Books.FindAsync(id);
        if (book == null) return NotFound();

        _db.Books.Remove(book);
        await _db.SaveChangesAsync();
        return NoContent();
    }
}
