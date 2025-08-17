using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnitDemos1;

namespace NUnitDemoTests
{
    [TestFixture]
    public class EmployTest
    {
        [Test]
        public void TestSearchEmploy()
        {
            EmployDao employDao = new EmployDao();
            Employ employFound = employDao.SearchEmploy(11);
            Assert.IsNotNull(employFound);
            employFound = employDao.SearchEmploy(-1);
            Assert.Null(employFound);
        }

        [Test]
        public void TestShowEmploy()
        {
            List<Employ> employList = new EmployDao().ShowEmploy();
            Assert.AreEqual(3, employList.Count);
        }
        [Test]
        public void TestGettersAndSetters()
        {
            Employ employ = new Employ();
            employ.EmpNo = 1;
            employ.EmpName = "Charan";
            employ.Basic = 91976;

            Assert.AreEqual(1, employ.EmpNo);
            Assert.AreEqual("Charan", employ.EmpName);
            Assert.AreEqual(91976, employ.Basic);
        }

        [Test]
        public void TestToString()
        {
            Employ employ = new Employ();
            employ.EmpNo = 2;
            employ.EmpName = "Shanmukh";
            employ.Basic = 85000;

            string expected = "Employee Number: 2 Employee Name: Shanmukh Basic: 85000";
            Assert.AreEqual(expected, employ.ToString());
        }

        [Test]
        public void TestConstructor()
        {
            Employ employ = new Employ();
            Assert.NotNull(employ);

            Employ employ1 = new Employ(3, "Ajay", 91000);
            Assert.AreEqual(3, employ1.EmpNo);
            Assert.AreEqual("Ajay", employ1.EmpName);
            Assert.AreEqual(91000, employ1.Basic);



        }
    }
}
