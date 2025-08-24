using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collections
{
    internal class Example2
    {
        static void Main()
        {
            Employ employ1 = new Employ();
            employ1.Empno = 1;
            employ1.Name = "Charan";
            employ1.Basic = 88233.11;

            Employ employ2 = new Employ();
            employ2.Empno = 2;
            employ2.Name = "Surya";
            employ2.Basic = 98822.11;

            Employ employ3 = new Employ();
            employ3.Empno = 3;
            employ3.Name = "Naresh";
            employ3.Basic = 89911.11;

            ArrayList al = new ArrayList();
            al.Add(employ1);
            al.Add(employ2);
            al.Add(employ3);

            foreach(object o in al)
            {
                Console.WriteLine(o);
            }

        }
    }
}
