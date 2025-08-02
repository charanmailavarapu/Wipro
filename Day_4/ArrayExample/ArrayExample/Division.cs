using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayExample
{
    internal class Division
    {
        static void Main(String[] args)
        {
            int a, b, c;
            Console.WriteLine("Enter 2 numbers :");

            try
            {
                a = Convert.ToInt32(Console.ReadLine());
                b = Convert.ToInt32(Console.ReadLine());
                c = a / b;
                Console.WriteLine("Division is :" + c);
            }

            catch ( FormatException e)
            {
                Console.WriteLine(" String types cannot divide...");
            }

            catch(OverflowException e)
            {
                Console.WriteLine("Number is too big to read...");
            }
            catch (DivideByZeroException e)
            {
                Console.WriteLine("cannot divide by zero");
            }

            catch(Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
