using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnitDemos1
{
    public class Employ
    {
        public int EmpNo { get; set; }

        public string EmpName { get; set; }

        public double Basic { get; set; }

        public Employ() { } 
        
        public Employ(int empNo, string empName, double basic)
        {
            EmpNo = empNo;
            EmpName = empName;
            Basic = basic;
        }

        public override string ToString()
        {
            return "Employee Number: " + EmpNo + " Employee Name: " + EmpName + " Basic: " + Basic;
        }
    }
}
