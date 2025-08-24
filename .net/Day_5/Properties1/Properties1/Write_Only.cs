using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties1
{
    class Delivery
    {

        int id;
        string name;

        public int Id { 
            set { id = value; }
        }

        public string Name {
            set { name = value; }
        }
        public override string ToString()
        {
            return "Delivery_Id " + id + " Delivery_Partner " + name;
        }
    }

    internal class Write_Only
    {
        

        static void Main()
        {
            Delivery  d = new Delivery();
            d.Id = 1;
            d.Name = "Zepto";

            Console.WriteLine(d);
        }
    }
}
