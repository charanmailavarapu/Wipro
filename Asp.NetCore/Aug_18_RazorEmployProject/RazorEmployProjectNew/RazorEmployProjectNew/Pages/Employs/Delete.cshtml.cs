using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorEmployProjectNew.Models;

namespace RazorEmployProjectNew.Pages.Employs
{
    public class DeleteModel : PageModel
    {
        private readonly RazorEmployProjectNew.Models.EFCoreDbContext _context;

        public DeleteModel(RazorEmployProjectNew.Models.EFCoreDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public EmployNew EmployNew { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employnew = await _context.Employees.FirstOrDefaultAsync(m => m.Empno == id);

            if (employnew == null)
            {
                return NotFound();
            }
            else
            {
                EmployNew = employnew;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employnew = await _context.Employees.FindAsync(id);
            if (employnew != null)
            {
                EmployNew = employnew;
                _context.Employees.Remove(EmployNew);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
