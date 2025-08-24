using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample1
{
    internal class MultiDelegate
    {
        public delegate void myDelegate();

        public static void Project()
        {
            Console.WriteLine("Capstone Project to be done Last Phase...");
        }

        public static void MileStone1()
        {
            Console.WriteLine("MileStone 1 to be Conducted on Core Topics...");
        }

        public static void MileStone2()
        {
            Console.WriteLine("MileStone 2 to be on Dotnet Core...");
        }

        public static void MileStone3()
        {
            Console.WriteLine("MileStone 3 to be on Asp.net Core Web API");
        }

        public static void MileStone4()
        {
            Console.WriteLine("MileStone 4 to be On React Framework...");
        }

        static void Main()
        {
            myDelegate obj = new myDelegate(MileStone1);
            obj += new myDelegate(MileStone2);
            obj += new myDelegate(MileStone3);
            obj += new myDelegate(MileStone4);
            obj += new myDelegate(Project);
            obj();
        }
    }
}
