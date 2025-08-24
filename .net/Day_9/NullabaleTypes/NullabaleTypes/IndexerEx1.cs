using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NullabaleTypes
{
    internal class IndexerEx1
    {
        public string[] names = new string[3];
        public string this[int n]
        {
            get { return names[n]; }
            set { names[n] = value; }
        }

        static void Main()
        {
            IndexerEx1 ie = new IndexerEx1();
            ie.names[0] = "Charan";
            ie.names[1] = "Surya";
            ie.names[2] = "Naresh";

            Console.WriteLine("Data is: ");
            foreach( var v in ie.names)
            {
                Console.WriteLine(v);
            }
        }
    }
}
