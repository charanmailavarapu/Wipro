using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NullabaleTypes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int? count = null;
            Console.WriteLine("Def Value: " + count.GetValueOrDefault());
            count = 10;
            Console.WriteLine("Updated Value: " + count.GetValueOrDefault());
        }
    }
}
