using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DipWith
{
    internal class TrainerUtil
    {
        private ITrainerData iTrainerData;

        public TrainerUtil(ITrainerData itrainerData)
        {
            this.iTrainerData = itrainerData;
        }

        public void ShowInfo()
        {
            iTrainerData.Name();
            iTrainerData.Email();
            iTrainerData.City();
        }
    }
}
