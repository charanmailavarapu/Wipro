using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Castle.Components.DictionaryAdapter.Xml;
using Moq;
using NUnit.Framework;

namespace MockRepeat
{
    [TestFixture]
    public class EmployTest
    {
        
            List<Employ> employList = new List<Employ>()
            {
                new Employ{EmpNo = 1, EmpName = "Charan" , Basic = 91000 },
                new Employ{EmpNo = 2, EmpName = "Shanmukh" , Basic = 92000 },
                new Employ{EmpNo = 3, EmpName = "Ajay" , Basic = 90000 }

            };

            Employ e1 = new Employ { Empno = 1, Name = "Datta", Basic = 84234 };
            Employ e2 = new Employ { Empno = 2, Name = "Vandana", Basic = 82234 };

            Employ e3 = null;

        

    }
}
