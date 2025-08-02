using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    //Write a code for factorial of a number
    internal class Factorial
    {
        static void Factorial1(int number)
        {
            int n = number, fact = 1;
                if (n == 0 || n == 1)
                {
                    fact = 1;
                }
                while( n > 0) 
                {
                    fact = fact * n;
                    n--;
                }
            Console.WriteLine("Factorial is: " + fact);

        }
        static void Main()
        {
            int num;
            Console.WriteLine("Enter a number: ");
            num = Convert.ToInt32(Console.ReadLine());
            Factorial.Factorial1(num);

        }
    }
}
