using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MockRepeat
{
    public class WiproData : IWiproData
    {
        public string MileStone1()
        {
            return "MileStone1 exam on July 28";
        }

        public string MileStone2()
        {
            return "MileStone2 exam on August 9";
        }

    }
}
