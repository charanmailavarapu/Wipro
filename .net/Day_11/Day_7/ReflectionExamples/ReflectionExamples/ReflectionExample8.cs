using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ReflectionExamples
{
    internal class ReflectionExample8
    {
        static void Main() 
        {
            Type type = typeof(Student);
            Console.WriteLine("Methods available are: ");
            foreach(MethodInfo mi in type.GetMethods())
            {
                Console.WriteLine(mi.Name);
            }

            Console.WriteLine("Fields available are: ");
            foreach(FieldInfo fi in type.GetFields())
            {
                Console.WriteLine(fi.Name);
            }
        }

    }
}
