using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class DelegateExample1
    {
        public delegate void MyDelegate();

        public static void Show()
        {
            Console.WriteLine("In show");
        }
        static void Main(string[] args)
        {
            MyDelegate obj = new MyDelegate(Show);
            obj();
        }
    }
}
