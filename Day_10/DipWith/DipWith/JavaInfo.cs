using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DipWith
{
    internal class JavaInfo : ITrainerData
    {
        public void City()
        {
            Console.WriteLine("I am from Hyderabad");
        }

        public void Email()
        {
            Console.WriteLine("My email is charan@gmail.com");
        }

        public void Name()
        {
            Console.WriteLine("My name is Charan");
        }
    }
}
