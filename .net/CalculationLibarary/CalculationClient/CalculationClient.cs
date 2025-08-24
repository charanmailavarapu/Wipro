using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CalculationLibarary;

namespace CalculationClient
{
    internal class CalculationClient
    {
        static void Main(string[] args)
        {
            int a, b;
            Console.WriteLine("Enter two numbers : ");
            a = Convert.ToInt32(Console.ReadLine());
            b = Convert.ToInt32(Console.ReadLine());
            CalculationClient c = new CalculationClient();
            Console.WriteLine(c.Sum(a,b));
        }
    }
}
