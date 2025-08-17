using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class FunctionDelegate12
    {
        public static int Sum(int x, int y)
        {
            return x + y;
        }

        public static int Sub(int x, int y)
        {
            return x + y;
        }

        public static int Mult(int x, int y)
        {
            return x + y;
        }
        static void Main()
        {
            int n1, n2;
            Console.WriteLine("Enter two numbers:");
            n1 = Convert.ToInt32(Console.ReadLine());
            n2 = Convert.ToInt32(Console.ReadLine());
            Func<int, int, int> obj = Sum;
            obj += Sub;
            obj += Mult;
            Console.WriteLine("Addition is: " + obj(n1,n2));
            Console.WriteLine("Subtraction is: " + obj(n1, n2));
            Console.WriteLine("M is: " + obj(n1, n2));

        }
    }
}
