using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EmployeeProject.Models;
using System.Runtime.Serialization.Formatters.Binary;

namespace EmployeeProject.Dao
{
    public class EmployDaoImpl : IEmployDao
    {
        static List<Employ> employList;
        static EmployDaoImpl()
        {
            employList = new List<Employ>();
        }
        public string AddEmployDao(Employ employ)
        {
            employList.Add(employ);
            return "Employee record inserted..";
        }

        public string DeleteEmployDao(int empno)
        {
            Employ employFound = SearchEmployDao(empno);
            if (employFound != null) {
                employList.Remove(employFound);
                return " Record Deleted Successfully..";
            }
            return "Record not found";
        }

        public string ReadFromFileDao()
        {
            FileStream fs = new FileStream(@"c:\files\Employ.txt\", FileMode.Open, FileAccess.Read);
            BinaryFormatter formatter = new BinaryFormatter();
            employList = (List<Employ>)formatter.Deserialize(fs);
            return "Data retrived successfully.. ";
        }

        public Employ SearchEmployDao(int empno)
        {
            Employ employFound = null;
            foreach ( Employ employ in employList)
            {
                if (employ.Empno == empno)
                {
                    employFound = employ;
                    break;
                }

            }
            return employFound;

        }

        public List<Employ> ShowEmployDao()
        {
            return employList;
        }

        public string UpdateEmployDao(Employ employUpdated)
        {
            Employ employfound = SearchEmployDao(employUpdated.Empno);
            if (employfound != null)
            {
                employfound.Name = employUpdated.Name;
                employfound.Gender = employUpdated.Gender;
                employfound.Dept = employUpdated.Dept;
                employfound.Desig = employUpdated.Desig;    
                employfound.Basic = employUpdated.Basic;
                return "Employee record updated";
            }

            return "Employee record not found";
        }

        public string WriteToFileDao()
        {
            FileStream fs = new FileStream(@"c:\files\Employ.txt\", FileMode.Create, FileAccess.Write);
            BinaryFormatter formatter = new BinaryFormatter();
            formatter.Serialize(fs, employList);
            fs.Close();
            return "File created successfully..";

        }
    }
}
