using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wipro_Day_3
{
    internal class JaggedArrayEx1
    {
        static void Main()
        {
            int[][] jaggedArray = new int[2][];

            int[] x = new int[] { 2, 4, 6 };
            int[] y = new int[] { 3, 5, 7 };

            jaggedArray[0] = x;
            jaggedArray[1] = y;

            for (int i = 0; i < x.GetLength(0); i++)
            {
                for ( int j = 0; j < y.GetLength(n - 1); j++)
                {
                    Console.WriteLine();
                }
            }

        }

    }
}
