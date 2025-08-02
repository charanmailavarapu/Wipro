using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DipWithout
{
    internal class DotnetTrainingInfo
    {
        private DotnetTrg dotnetTrg;

        public DotnetTrainingInfo(DotnetTrg dotnetTrg)
        {
            this.dotnetTrg = dotnetTrg;
        }

        public void Show()
        {
            dotnetTrg.TrainerName();
            dotnetTrg.City();
        }
    }
}
