using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DipWith
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ITrainerData trainer1 = new JavaInfo();
            ITrainerData trainer2 = new DotnetInfo();

            TrainerUtil util1 = new TrainerUtil(trainer1);
            TrainerUtil util2 = new TrainerUtil(trainer2);

            util1.ShowInfo();
            util2.ShowInfo();

        }
    }
}
