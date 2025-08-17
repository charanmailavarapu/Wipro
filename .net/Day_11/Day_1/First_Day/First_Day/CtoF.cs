using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace First_Day
{
    internal class CtoF
    {
        public double CeltoFah(double celcius)
        {
            double f = ((9 * celcius) / 5) + 32;
            return f;
        }
        static void Main()
        {
            double celsius;
            Console.WriteLine("Enter Celsius Value  ");
            celsius = Convert.ToDouble(Console.ReadLine());
            CtoF obj = new CtoF();
            Console.WriteLine("Fahrenheit Value is  " + obj.CeltoFah(celsius));
        }
    }
}
