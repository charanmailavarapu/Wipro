using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayExample
{
    internal class ArrayException1
    {
        static void Main(String[] args)
        {
            int[] arr = new int[] { 1, 5, 9 };
            int x, y;
            try
            {
                Console.WriteLine("Enter two numbers: ");
                x = Convert.ToInt32(Console.ReadLine());
                y = Convert.ToInt32(Console.ReadLine());

                arr[3] = x / y;
                Console.WriteLine("output is" + arr[2]);

            }
            catch ( IndexOutOfRangeException e)
            {
                Console.WriteLine("Out of range..");
            }

            catch (DivideByZeroException e)
            {
                Console.WriteLine("Cannot divide by zero..");
            }


            catch(Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
