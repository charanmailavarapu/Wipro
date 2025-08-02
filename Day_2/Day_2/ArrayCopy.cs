using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    internal class ArrayCopy
    {
        public void Show()
        {
            int[] a = new int[] { 12, 13, 14, 20 };
            int[] b = a;

            for (int i = 0; i < a.Length; i++)
            {
                Console.WriteLine(b[i]);
            }
        }
        static void Main()
        {
            ArrayCopy array = new ArrayCopy();
            array.Show();

        }
    }
}

