using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReflectionExamples
{
    internal class ReflectionExample2
    {
        static void Main()
        {
            Type type = typeof(string);
            Console.WriteLine("Name is: "+type.Name);
            Console.WriteLine("Full Name is: " + type.FullName);
            Console.WriteLine("NameSpace is: " + type.Namespace);
            Console.WriteLine("Base is: " + type.BaseType); 
        }
    }
}
