using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnitDemos1
{
    public class EmployDao
    {
        static List<Employ> employList;

        static EmployDao()
        {
            employList = new List<Employ>()
            {
                new Employ{EmpNo = 11, EmpName = "Lakshmi", Basic=99000},
                new Employ{EmpNo = 12, EmpName = "Himaja", Basic = 98000},
                new Employ{EmpNo = 13, EmpName = "Srinu", Basic = 96000}
            };
        }


        public List<Employ> ShowEmploy()
        {
            return employList;
        }

        public Employ SearchEmploy(int empno)
        {
            Employ employFound = null;

            foreach (Employ employ in employList)
            {
                if (employ.EmpNo == empno)
                {
                    employFound = employ;
                }
            }

            return employFound;
        }




    }
}
