using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class DelegateAnonymous1
    {
        public delegate void myDelegate(int n);

        static void Main()
        {
            myDelegate obj = delegate (int n)
            {
                Console.WriteLine("in Anonymous function" + n);
            };
            obj(5);
        }
    }
}
