using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class DelegateExample2
    {
        public delegate void myDelegate(string str);

        public static void Show(string str)
        {
            Console.WriteLine("In show " + str);
        }
        static void Main()
        {
            Console.WriteLine("Enter your name: ");
            string string1 = Console.ReadLine();
            myDelegate obj = new myDelegate(Show);
            obj(string1);
        }
    }
}
