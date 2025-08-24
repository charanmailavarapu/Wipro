using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MockRepeat
{
    public class EmployDAO : IEmployDAO
    {
        static List<Employ> employList = new List<Employ>();

        static EmployDAO()
        {
            employList = new List<Employ>()
            {
                new Employ{EmpNo = 1, EmpName = "Charan", Basic = 91000},
                new Employ{EmpNo = 2, EmpName = "Shanmukh", Basic = 90000},
                new Employ{EmpNo = 3, EmpName = "Ajay", Basic = 89000}
            };
        }

        public Employ SearchEmploy(int empNo)
        {
            Employ employFound = null;
            foreach(Employ employ in employList)
            {
                if(employ.EmpNo == empNo)
                {
                    employFound = employ;
                }

            }
            return employFound;

        }
        public List<Employ> ShowEmploy()
        {
            return employList;
            
        }
    }
}
