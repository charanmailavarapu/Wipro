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
    public class DetailsModel : PageModel
    {
        private readonly RazorEmployProjectNew.Models.EFCoreDbContext _context;

        public DetailsModel(RazorEmployProjectNew.Models.EFCoreDbContext context)
        {
            _context = context;
        }

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
    }
}
