using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    internal class PerfectSquareOrNot
    {
        static void Perfect(int n)
        {
            int num = n;
            int sum = 0;
            for (int i = 1; i < num; i++)
            {
                if (num % i == 0)
                {
                    sum += i;

                }
            }
            if (sum == num)
            {
                Console.WriteLine(num + " is a perfect square number");
            }
            else
            {
                Console.WriteLine(num + " is not a perfect square number");
            }

        }
        static void Main()
        {
            int num;
            Console.WriteLine("Enter the number: ");
            num = Convert.ToInt32(Console.ReadLine());
            PerfectSquareOrNot.Perfect(num);


        }
    }
}
