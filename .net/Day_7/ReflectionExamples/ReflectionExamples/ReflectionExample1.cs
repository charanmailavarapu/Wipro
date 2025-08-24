using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ReflectionExamples
{
    internal class ReflectionExample1
    {
        static void Main()
        {
            Type typeObj = typeof(Test);
            Console.WriteLine("Methods available in type class are: ");
            foreach(MethodInfo mi in typeObj.GetMethods())
            {
                Console.WriteLine(mi.Name);
            }

            foreach(FieldInfo fi in typeObj.GetFields())
            {
                Console.WriteLine(fi.Name);

            }
        }
    }
}
