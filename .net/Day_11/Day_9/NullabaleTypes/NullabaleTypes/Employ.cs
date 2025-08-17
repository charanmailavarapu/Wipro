using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NullabaleTypes
{
    internal class Employ
    {
        public int EmpNo { get; set; }

        public string EmpName { get; set; }

        public double Basic { get; set; }

        public int? LeaveDays { get; set; } = null;

        public Nullable<int> Status { get; set; }
    }
}
