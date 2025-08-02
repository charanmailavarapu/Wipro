using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NullabaleTypes
{
    internal class Emp
    {
        public int EmpNo { get; set; }
        public string EmpName { get; set; }

        public double Basic { get; set; }

        public Emp()
        {

        }

        public override string ToString()
        {
            return "Emp Num: " + EmpNo + "Emp Name: " + EmpName + " Basic :" + Basic;
        }
    }
}
