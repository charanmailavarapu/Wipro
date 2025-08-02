using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties1
{
    class Employ {
        public int Empno { get; set; }
        public string Name { get; set; }
        public double Basic { get; set; }

    }

    internal class ReadWrite
    {
        static void Main()
        {
            Employ employ1 = new Employ();
            employ1.Empno = 1;
            employ1.Name = "Charan";
            employ1.Basic = 50000.33;

            Employ employ2 = new Employ();
            employ2.Empno = 2;
            employ2.Name = "Ajay";
            employ2.Basic = 49900.88;

            Employ employ3 = new Employ();
            employ3.Empno = 3;
            employ3.Name = "Shanmukh";
            employ3.Basic = 49900.66;

            Console.WriteLine("Employee Details : ");
            Console.WriteLine("Employee Number " + employ1.Empno + " Employee Name " + employ1.Name + " Employee Basic " + employ1.Basic);
            Console.WriteLine("Employee Number " + employ2.Empno + " Employee Name " + employ2.Name + " Employee Basic " + employ2.Basic);
            Console.WriteLine("Employee Number " + employ3.Empno + " Employee Name " + employ3.Name + " Employee Basic " + employ3.Basic);





        }
    }
}
