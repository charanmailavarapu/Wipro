namespace MvcDemoCore.Models
{
    public class EmployService
    {
        private static List<Employ> employList = null;

        static EmployService()
        {
            employList = new List<Employ>();
            employList.Add(new Employ
            {
                Empno = 101,
                Name = "Charan",
                Basic = 89764
            });
            employList.Add(new Employ
            {
                Empno = 102,
                Name = "Surya",
                Basic = 89543
            });
            employList.Add(new Employ
            {
                Empno = 103,
                Name = "Reddy",
                Basic = 86543
            });
            employList.Add(new Employ
            {
                Empno = 104,
                Name = "Naresh",
                Basic = 84543
            });
            employList.Add(new Employ
            {
                Empno = 105,
                Name = "Satvik",
                Basic = 83235
            });
            employList.Add(new Employ
            {
                Empno = 106,
                Name = "Nafees",
                Basic = 85543
            });
            employList.Add(new Employ
            {
                Empno = 107,
                Name = "Shanmukh",
                Basic = 86543
            });
        }

        public bool AddEmploy(Employ newEmploy)
        {
            bool EmployAdded = false;
            int oldCount = employList.Count;
            employList.Add(newEmploy);
            int newCount = employList.Count;
            if (newCount > oldCount)
                EmployAdded = true;

            return EmployAdded;
        }

        public List<Employ> GetAllEmploys ()
        {
            return employList;
        }
        public Employ ShowEmploy(int empno)
        {
            return employList.First(x => x.Empno == empno);
        }

        public Employ UpdateEmploy(Employ updateEmploy)
        {
            Employ employ = employList.First(x => x.Empno == updateEmploy.Empno);
            employ.Name = updateEmploy.Name;
            employ.Basic = updateEmploy.Basic;
            return employ;
        }

        public bool DeleteEmploy(int empno)
        {
            Employ employ = employList.First(x => x.Empno == empno);
            return employList.Remove(employ);
        }

    }
}
