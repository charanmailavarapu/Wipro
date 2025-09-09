using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wipro_Day3
{
    internal class Quiz1
    {
        public void Increment(ref int x)
        {
            --x;
        }

        public void Decrement(ref int x)
        {
            --x;
        }
        static void Main()
        {
            int x = 10;
            Quiz1 quiz = new Quiz1();
            quiz.Increment(ref x);
            quiz.Decrement(ref x);
            Console.WriteLine(x);

        }
    }
}
