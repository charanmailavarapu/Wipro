using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class ActionDelegate
    {
        public delegate void myDelegate(string str);

       //blic static Greeting(string str)
       public static void Greeting(string str)
        {
            Console.WriteLine("Good Morning" + str);
        }

        public static void SendOff(string str)
        {
            Console.WriteLine("Good night" + str);
        }

        static void Main()
        {
            string string1;
            Console.WriteLine("Enter name: ");
            string1 = Console.ReadLine();
            Action<string> obj = Greeting;
            obj += SendOff;
            obj(string1);
        }
    }
}
