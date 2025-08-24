using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DipWithout
{
    internal class Program
    {
        static void Main(string[] args)
        {
            JavaTrainingInfo javaTraining = new JavaTrainingInfo(new JavaTrg());
            DotnetTrainingInfo dotnetTraining = new DotnetTrainingInfo(new DotnetTrg());

            javaTraining.Show();
            dotnetTraining.Show();
        }
    }
}
