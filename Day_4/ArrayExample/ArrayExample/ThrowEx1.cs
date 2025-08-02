using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayExample
{
    internal class ThrowEx1
    {
        public void Show(int n)
        {
            if (n < 0)
            {
                throw new DivideByZeroException("Negative numbers are not allowed..");
            }
            else if( n == 0)
            {
                throw new IndexOutOfRangeException("zero is a invalid value...");
            }
            else
            {
                Console.WriteLine("Correct value :" + n);
            }

        }
        static void Main()
        {
            int n;
            Console.WriteLine("Enter a number : ");
            n = Convert.ToInt32(Console.ReadLine());
            ThrowEx1 obj = new ThrowEx1();

            try
            {
                obj.Show(n);

            }
            catch (DivideByZeroException e)
            {
                Console.WriteLine(e.Message);
            }

            catch (IndexOutOfRangeException e)
            {
                Console.WriteLine(e.Message);
            }

            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }
    }
}
