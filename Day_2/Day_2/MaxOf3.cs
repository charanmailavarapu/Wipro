using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    internal class MaxOf3
    {
        public void Max(int a, int b, int c)
        {
            int max;
            max = a;
            if ( max < b)
            {
                max = b;
            }
            if(max < c)
            {
                max = c;
            }
            Console.WriteLine("Maximum value is: " + max);
        }
        static void Main()
        {
            int a, b, c;
            Console.WriteLine("Enter 3 values: ");
            a = Convert.ToInt32(Console.ReadLine());
            b = Convert.ToInt32(Console.ReadLine());
            c = Convert.ToInt32(Console.ReadLine());
            MaxOf3 m = new MaxOf3();
            m.Max(a, b, c);

        }
    }
}
