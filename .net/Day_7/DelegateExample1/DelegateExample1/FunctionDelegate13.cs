using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class FunctionDelegate13
    {
        public static string Display(int n)
        {
            return "Hello " + n;
        }
        public static int Compare(string s1, string s2)
        {
            return s1.CompareTo(s2);
        }

        public static bool Status(int mstat)
        {
            if (mstat == 0)
            {
                return true;
            }
            return false;
        }
        public static string Show(int n)
        {
            if (n == 1)
            {
                return "Charan";
            }
            else if (n == 2)
            {
                return "Ajay";
            }
            return "Unknown...";
        }
        static void Main()
        {
            int n;
            Console.WriteLine("Enter a number : ");
            n = Convert.ToInt32(Console.ReadLine());
            Func<int, string> f = Display;
            f += Show;
            Console.WriteLine(f(n));
            Console.WriteLine(f(n));

            Func<string, string, int> f1 = Compare;
            Console.WriteLine(f1("Charan", "Charan"));

            Func<int, bool> f2 = Status;
            Console.WriteLine(f2(0));




        }
    }
}
