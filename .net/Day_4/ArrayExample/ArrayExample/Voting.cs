using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayExample
{
    internal class Voting
    {
        public void Check(int age)
        {
            if( age < 18)
            {
                throw new VotingException("You are not eligible for voting..");
            }
            else
            {
                Console.WriteLine("you are eligble for voting..");
            }
        }
        static void Main()
        {
            int age;
            Console.WriteLine("Enter your age:");
            age = Convert.ToInt32(Console.ReadLine());
            Voting voting = new Voting();
            try
            {
                voting.Check(age);

            }

            catch(VotingException e)
            {
                Console.WriteLine(e.Message);
            }
            catch(Exception e) {
                Console.WriteLine(e);
            }
        }
    }
}
