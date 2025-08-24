using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections
{
    class Out1
    {
        public void Show(int empno, out string name, out double basic)
        {
            name = string.Empty;
            basic = 0;
            
            if ( empno == 1)
            {
                name = "Charan";
                basic = 4422.77;
            }

            if (empno == 2)
            {
                name = "Ajay";
                basic = 4322.77;
            }

            if (empno == 3)
            {
                name = "Shanmukh";
                basic = 4542.77;
            }

        }

    }
    internal class OutParameter1
    {
        static void Main()
        {
            int empno;
            Console.WriteLine("Enter Employeee Number : ");
            empno = Convert.ToInt32(Console.ReadLine());
            Out1 o = new Out1();
            string name;
            double basic;
            o.Show(empno, out name, out basic);
            Console.WriteLine("Name is " + name);
            Console.WriteLine("Basic is " + basic);

           

        }

    }

}

