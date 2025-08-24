using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayExample
{
    internal class ArrayExample
    {
        static void Main(string[] args)
        {
            int[] arr = new int[] { 1, 3, 5 };
            
            try
            {
                arr[10] = 400;

            }
            catch ( IndexOutOfRangeException e)
            {
                Console.WriteLine("Array is out of Range...");
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
