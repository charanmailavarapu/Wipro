using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeProject.Exceptions
{
    public class EmployeeExceptions : ApplicationException
    {
        public EmployeeExceptions() { }
        public EmployeeExceptions(string message) : base (message) {

        }

    }
}
