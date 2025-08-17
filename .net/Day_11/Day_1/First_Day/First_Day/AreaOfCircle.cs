using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace First_Day
{
    internal class AreaOfCircle
    {
        public void Area(double radius)
        {
            double area, circ;
            area = Math.PI * radius * radius;
            circ = 2 * Math.PI * radius;
            Console.WriteLine("Area of Circle  " + area);
            Console.WriteLine("Circumference  " + circ);
        }
        static void Main()
        {
            double radius;
            Console.WriteLine("Enter Radius  ");
            radius = Convert.ToDouble(Console.ReadLine());
            AreaOfCircle circle = new AreaOfCircle();
            circle.Area(radius);
        }
    }
}
