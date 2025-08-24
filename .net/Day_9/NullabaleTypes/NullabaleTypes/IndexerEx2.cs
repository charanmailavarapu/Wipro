using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NullabaleTypes
{
    internal class IndexerEx2
    {
        public Emp[] arr = new Emp[3];
        public Emp this[int i]
        {
            get 
            { 
                return arr[i]; 
            }
            set
            {
                arr[i] = value;
            }
        }

        static void Main()
        {
            IndexerEx2 ie = new IndexerEx2();
            ie[0] = new Emp { EmpNo = 1, EmpName = "Charan", Basic = 91000 };
            ie[1] = new Emp { EmpNo = 2, EmpName = "Ajay", Basic = 90000 };
            ie[2] = new Emp { EmpNo = 3, EmpName = "Shanmukh", Basic = 89000 };

            foreach(var v in ie.arr)
            {
                Console.WriteLine(v);
            }
        }
    }
}
