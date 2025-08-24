using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class DelegateAnonymous
    {
        public delegate void myDelegate(string str);

        static void Main()
        {
            myDelegate obj = delegate(string str)
            {
                Console.WriteLine("in Anonymous Function");
            };

            obj("Charan");

        }
    }
}
