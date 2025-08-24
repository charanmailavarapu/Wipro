using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment_1
{
    internal class Program
    {
        static void Main()
        {
            Calculator c = new Calculator();
            Console.WriteLine("Addition is: " + c.Add(3, 2));
            Console.WriteLine("Subtraction is: " + c.Subtract(5, 2));
            Console.WriteLine("Multiply is: " + c.Multiply(5, 2));
            Console.WriteLine("Divide is: " + c.Divide(10,2));
        }
    }
}
