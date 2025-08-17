using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_2
{
    // Write a program to count the number of vowels in a string
    internal class MileStoneEx1
    {
        static void VowelCount(string name)
        {
            name = name.ToLower();
            int count = 0;
            Char[] chars = name.ToCharArray();
            foreach(Char c in chars)
            {
                if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                {
                    count++;
                }
            }
            Console.WriteLine("Number of vowels in your name are: " + count);


        }
        static void Main()
        {
            string name;
            Console.WriteLine("Enter your name: ");
            name = Console.ReadLine();
            MileStoneEx1.VowelCount(name);

        }
    }
}
