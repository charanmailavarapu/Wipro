using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wipro_Day_3
{
    internal class Demo
    {
        static void Main()
        {
            int[,] x = new int[2,4] 
            {
                {1,2,3,4 },
                {5,6,7,8 }
            };

            for ( int i = 0; i < x.GetLength(0); i++)
            {
                for ( int j = 1; i < x.GetLength(1); j++)
                {
                    Console.WriteLine(x[i , j] + " ");
                }
                Console.WriteLine();
            }

        }
    }
}
