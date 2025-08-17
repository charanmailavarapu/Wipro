using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    internal class ArrayExample
    {
        public void Show()
        {
            int[] arr = new int[] { 5, 6, 7 };
            foreach(int i in arr)
            {
                Console.WriteLine(i);
            }
        }
        static void Main()
        {
            ArrayExample array = new ArrayExample();
            array.Show();
        }
    }
}
