using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    internal class ArrayStr
    {
        public void Show()
        {
            string[] strArr = new string[] 
            { 
                "Charan", "Ajay", "Shanmukh", "Nafees"
            };
            foreach (string str in strArr) 
            {
                Console.WriteLine(str);
            }


        }
        static void Main()
        {
            ArrayStr arrayStr = new ArrayStr();
            arrayStr.Show();

        }
    }
}
