using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class FunctionDelegate10
    {
        //blic delegate void myDelegate();

        public static int Factorial(int n)
        {
            int fact = 1;
            for(int i = 1; i <= n; i++)
            {
                fact = fact * i;
            }
            return fact;
        }
        static void Main()
        {
            int n;
            Console.WriteLine("Enter a number: ");
            n = Convert.ToInt32(Console.ReadLine());
            Func<int, int> obj = Factorial;
            Console.WriteLine("Factorial of " + n + "is" + obj(n));

        }
    }
}
