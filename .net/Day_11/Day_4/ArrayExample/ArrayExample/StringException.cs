using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayExample
{
    internal class StringException
    {
        static void Main()
        {
            string str = "Charan is a good boy";
            string str2;
            try
            {
                str2 = str.Substring(6, 200);
                Console.WriteLine("Substring is : " + str2);


            }
            catch(ArgumentOutOfRangeException e)
            {
                Console.WriteLine("Substring cannot be created");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
