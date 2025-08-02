using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LambdaExprs
{
    internal class LambdaExpr1
    {
        static void Main(string[] args)
        {
            List<Employ> employList = new List<Employ>
            {
                new Employ{EmpId = 1, EmpName = "Charan", Basic = 90000 },
                new Employ{EmpId = 2, EmpName = "Ajay", Basic =91000},
                new Employ{EmpId = 3, EmpName = "Shanmukh", Basic = 85000},
                new Employ{EmpId = 4, EmpName = "Nafess", Basic = 81000}
            };
            Console.WriteLine("Employ list: ");
            var result1 = employList.Select(x => x);
            foreach(var v in result1)
            {
                Console.WriteLine(v);
            }

            Console.WriteLine("Projected Fields are: ");
            var result2 = employList.Select(x => new { x.EmpName, x.Basic });
            foreach(var v in result2)
            {
                Console.WriteLine(v);
            }

            Console.WriteLine("Salary > 90000 records are: ");
            var result3 = employList.Where(x => x.Basic > 90000);
            foreach(var v in result3)
            {
                Console.WriteLine(v);
            }

            Console.WriteLine("Records whose letter starting with A and C");
            var result4 = employList.Where(x => x.EmpName.StartsWith("A") || x.EmpName.StartsWith("C"));
            foreach(var v in result4)
            {
                Console.WriteLine(v);
            }

            
        }
    }
}
