using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections
{
    internal class Stack1
    {
        static void Main()
        {
            Stack<string> s = new Stack<string>();
            s.Push("Charan");
            s.Push("Ajay");
            s.Push("Shanmukh");
            s.Push("Nafees");

            foreach(object o in s)
            {
                Console.WriteLine(o);
            }

            s.Pop();
            Console.WriteLine("After removing..");
            foreach (object o in s)
            {
                Console.WriteLine(o);
            }
        }
    }
}
