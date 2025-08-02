using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mock_Example
{
    public class Details : IDetails
    {
        public string ShowStudent()
        {
            return "Its from wipro Banglore";
        }

        public string ShowCompany()
        {
            return "Hi I am from Charan";
        }
    }
}
