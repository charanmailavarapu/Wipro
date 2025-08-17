using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NullabaleTypes
{
    internal class NullableEx1
    {
        static void Main()
        {
            Employ employ = new Employ();
            employ.EmpNo = 1;
            employ.EmpName = "Charan";
            employ.Basic = 91000;

            Employ employ1 = new Employ();
            employ1.EmpNo = 2;
            employ1.EmpName = "Naresh";
            employ1.Basic = 90000;
            employ1.LeaveDays = 2;

            if(employ.LeaveDays.HasValue)
            {
                Console.WriteLine("{0} has taken leave", employ.EmpName);
                employ.Status = 1;
            }
            else
            {
                Console.WriteLine("{0} has not taken value", employ.EmpName);
                employ.Status = 0;
            }

            if(employ1.LeaveDays.HasValue)
            {
                Console.WriteLine("{0} has taken leave", employ1.EmpName);
                employ.Status = 1;
            }
            else
            {
                Console.WriteLine("{0} has not taken value", employ.EmpName);
                employ.Status = 0;
            }

        }

    }
}
