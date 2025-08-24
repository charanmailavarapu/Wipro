using System.Security.Cryptography.X509Certificates;
using CoreDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreDemo.Pages
{
    public class EmployModel : PageModel
    {
        public List<Employ>? Employees { get; set; }

        public void OnGet()
        {
            Employees = new List<Employ>
     {
         new Employ{EmpNo=1,EmpName="Yamini",Basic=83234},
         new Employ{EmpNo=2,EmpName="Uday",Basic=89923},
         new Employ{EmpNo=3,EmpName="Ganesh",Basic=92222},

     };
        }
    }
}
