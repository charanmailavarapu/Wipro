using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace First_Day
{
    internal class CaseEx2
    {
        public void Show(string day)
        {
            switch (day.ToUpper())
            {
                case "SUN":
                    Console.WriteLine("Its Sunday...");
                    break;
                case "MON":
                    Console.WriteLine("Its Monday...");
                    break;
                case "TUE":
                    Console.WriteLine("Its Tuesday...");
                    break;
                case "WED":
                    Console.WriteLine("Its Wednesday...");
                    break;
                case "THU":
                    Console.WriteLine("Its Thursday...");
                    break;
                case "FRI":
                    Console.WriteLine("Its Friday...");
                    break;
                case "SAT":
                    Console.WriteLine("Its Saturday...");
                    break;
                default:
                    Console.WriteLine("Invalid Choice...");
                    break;
            }
        }
        static void Main()
        {
            string day;
            Console.WriteLine("Enter 3 chars of Day Name  ");
            day = Console.ReadLine();
            CaseEx2 caseEx2 = new CaseEx2();
            caseEx2.Show(day);
        }
    }
}
