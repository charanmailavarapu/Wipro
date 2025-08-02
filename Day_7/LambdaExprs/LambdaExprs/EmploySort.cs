using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LambdaExprs
{
    internal class EmploySort
    {
        static void Main()
        {
            List<Employ> employList = new List<Employ>
            {
                new Employ{EmpId = 1, EmpName = "Charan", Basic = 90000 },
                new Employ{EmpId = 2, EmpName = "Ajay", Basic =91000},
                new Employ{EmpId = 3, EmpName = "Shanmukh", Basic = 85000},
                new Employ{EmpId = 4, EmpName = "Nafess", Basic = 81000}
            };
            employList.Sort();
            Console.WriteLine("sorted list based on EmpId is: ");
            var result = employList.Select(x => x);
            foreach(var v in result)
            {
                Console.WriteLine(v);
            }

            Console.WriteLine("sorted list based on EmpName is: ");
            employList.Sort(new NameComparer());
            var result2 = employList.Select(x => x);
            foreach(var v in result2)
            {
                Console.WriteLine(v);
            }
        }
    }
}
