using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wipro_Day3
{
    internal class RefExNew1
    {
        public void Fact(int n, ref int f)
        {
        
            for (int i = 1; i <= n; i++)
            {
                f = f * i;
            }
        }

        static void Main()
        {
            int n, f = 1;
            Console.WriteLine("Enter N value  ");
            n = Convert.ToInt32(Console.ReadLine());
            RefExNew1 obj = new RefExNew1();
            obj.Fact(n, ref f);
            Console.WriteLine("factorial value : " + f);
        }
    }
}
