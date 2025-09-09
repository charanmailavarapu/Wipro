using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wipro_Day3
{
    internal class RefExNew
    {
        public int Fact(int n, int f)
        {
            int sum = 1;
            for ( int i =1; i <= n; i++)
            {
                sum = sum * i;
            }
            return sum;
        }

        static void Main()
        {
            int n, f = 1;
            Console.WriteLine("Enter N value  ");
            n = Convert.ToInt32(Console.ReadLine());
            RefExNew obj = new RefExNew();
            int result = obj.Fact(n, f);
            Console.WriteLine("factorial value : " + result);
        }
    }
}
