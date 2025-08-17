using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class DelegateExample3
    {
        public delegate void myDelegate(int n);

        public static void Factorial(int n)
        {
            int fact = 1;
            while(n > 0)
            {
                fact = fact * n;
                n--;
            }
            Console.WriteLine("Factorial is: " + fact);
        }

        public static void PosNeg(int n)
        {
            if ( n > 0)
            {
                Console.WriteLine(n + " is a positive number.");
            }
            else
            {
                Console.WriteLine(n + " is a negative number.");
            }
        }

        public static void EvenOdd(int n)
        {
            if( n % 2 == 0 )
            {
                Console.WriteLine(" is a even number");
            }
            else
            {
                Console.WriteLine("is a odd number");
            }
        }

        static void Main()
        {
            int n;
            Console.WriteLine("Enter a number: ");
            n = Convert.ToInt32(Console.ReadLine());
            myDelegate obj = new myDelegate(Factorial);
            obj += new myDelegate(PosNeg);
            obj += new myDelegate(EvenOdd);
            obj(n);
        }
    }
}
