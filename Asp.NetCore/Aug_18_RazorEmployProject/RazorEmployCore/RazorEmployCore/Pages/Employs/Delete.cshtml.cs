using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorEmployCore.Models;

namespace RazorEmployCore.Pages.Employs
{
    public class DeleteModel : PageModel
    {
        private readonly EFCoreDbContext _context;

        public DeleteModel(EFCoreDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Employ Employ { get; set; } = default!;

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employ = await _context.Employs.FindAsync(id);
            if (employ != null)
            {
                Employ = employ;
                _context.Employs.Remove(Employ);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employ = await _context.Employs.Where(x => x.Empno == id).FirstOrDefaultAsync();

            //var employ = await _dbContext.Employees.FirstOrDefaultAsync(m => m.Empno == id);
            if (employ == null)
            {
                return NotFound();
            }
            else
            {
                Employ = employ;
            }
            return Page();
        }
    }
}
