using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    // Program to display factors of given number (assume 10 number factors are 1, 2, 5, 10)
    internal class PerfectSquare
    {
        static void Perfect(int n)
        {
            int num = n;
            for(int i = 1; i <= num; i++)
            {
                if(n % i == 0)
                {
                    Console.WriteLine("Factors are: " + i);

                }
            }

        }
        static void Main()
        {
            int num;
            Console.WriteLine("Enter the number: ");
            num = Convert.ToInt32(Console.ReadLine());
            PerfectSquare.Perfect(num);
            

        }
    }
}
