using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using RazorEmployProjectNew.Models;

namespace RazorEmployProjectNew.Pages.Employs
{
    public class CreateModel : PageModel
    {
        private readonly RazorEmployProjectNew.Models.EFCoreDbContext _context;

        public CreateModel(RazorEmployProjectNew.Models.EFCoreDbContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public EmployNew EmployNew { get; set; } = default!;

        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Employees.Add(EmployNew);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
