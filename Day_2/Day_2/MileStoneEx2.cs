using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    internal class MileStoneEx2
    {
        static void Main()
        {
            string data = "Welcome to programming Charan";
            string[] newData = data.Split(' ');
            foreach(string str in newData)
            {
                Console.WriteLine(str);
            }
        }
    }
}
