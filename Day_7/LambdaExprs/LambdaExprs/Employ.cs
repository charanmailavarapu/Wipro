using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LambdaExprs
{
    internal class Employ : IComparable<Employ>
    {
        public int EmpId { get; set; }

        public string EmpName { get; set; }

        public double Basic { get; set; }

        public int CompareTo(Employ employ)
        {
            if(EmpId >= employ.EmpId)
            {
                return 1;
            }
            return -1;
        }

        public override string ToString()
        {
            return "Employee Id: " + EmpId + "Employee Name: " + EmpName + "Employeee Basic: " + Basic;
        }
    }
}
