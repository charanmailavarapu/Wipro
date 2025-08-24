using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorEmployCore.Models;

namespace RazorEmployCore.Pages.Employs
{
    public class CreateModel : PageModel
    {
        private readonly EFCoreDbContext _context;

        public CreateModel(EFCoreDbContext context)
        {
            _context = context;
        }
        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Employ Employ { get; set; } = default!;

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }
            _context.Employs.Add(Employ);
            await _context.SaveChangesAsync();
            return RedirectToPage("./Index");
        }

    }
}
