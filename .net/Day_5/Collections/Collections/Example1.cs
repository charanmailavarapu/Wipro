using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections
{
    internal class Example1
    {
        static void Main(string[] args)
        {
            ArrayList al = new ArrayList();
            al.Add("Charan");
            al.Add("Ajay");
            al.Add("Shanmukh");
            al.Add("Nafees");
            al.Add("Shitil");

            foreach(object o in al)
            {
                Console.WriteLine(o);
            }

            al.Insert(4, "Sampath");
            Console.WriteLine("List after inserting new...");
            foreach(object o in al)
            {
                Console.WriteLine(o);
            }
            al.Remove("Shitil");
            Console.WriteLine("List after removing...");
            foreach(object o in al)
            {
                Console.WriteLine(o);
            }
        }
    }
}
