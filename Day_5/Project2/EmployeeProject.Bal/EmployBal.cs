using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EmployeeProject.Models;
using EmployeeProject.Exceptions;
using EmployeeProject.Dao;
using System.Threading.Tasks;

namespace EmployeeProject.Bal
{
    public class EmployBal
    {
        public StringBuilder sb = new StringBuilder();
        public static EmployDaoImpl daoImpl;

        static EmployBal() {
            daoImpl = new EmployDaoImpl();
        }

        public string WriteToFileBal()
        {
            return daoImpl.WriteToFileDao();
        }

        public string ReadFromFileBal()
        {
            return daoImpl.ReadFromFileDao();
        }

        public string DeleteEmployBal(int empno)
        {
            return daoImpl.DeleteEmployDao(empno);
        }


        public string UpdateEmployBal(Employ employUpdated)
        {
            if (ValidateEmploy(employUpdated) == true)
            {
                return daoImpl.UpdateEmployDao(employUpdated);
            }
            throw new EmployeeExceptions(sb.ToString());
        }
        public List<Employ> ShowEmployBal()
        {
            return daoImpl.ShowEmployDao();

        }
        
        public Employ SearchEmployBal(int empno)
        {
            return daoImpl.SearchEmployDao(empno);
        }
        public string AddEmployBal(Employ employ)
        {
            if (ValidateEmploy(employ) == true)
            {
                return daoImpl.AddEmployDao(employ);
            }
            throw new EmployeeExceptions(sb.ToString());
        }


        public bool ValidateEmploy(Employ employ)
        {
            bool flag = true;
            if ( employ.Empno <= 0 )
            {
                sb.Append("Employee Number cannot be zero or negative...\n");
                return false;
            }

            if ( employ.Name.Length < 5)
            {
                sb.Append("Name contains minimum 5 characters..\n");
                return false;
            }

            if ( employ.Basic <= 10000 || employ.Basic >= 80000)
            {
                sb.Append("Basic must be between 10000 and 80000..\n");
                return false;
            }
            return flag;


        }
    }
}
