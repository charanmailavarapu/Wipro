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
    public class IndexModel : PageModel
    {
        private readonly RazorEmployProjectNew.Models.EFCoreDbContext _context;

        public IndexModel(RazorEmployProjectNew.Models.EFCoreDbContext context)
        {
            _context = context;
        }

        public IList<EmployNew> EmployNew { get;set; } = default!;

        public async Task OnGetAsync()
        {
            EmployNew = await _context.Employees.ToListAsync();
        }
    }
}
