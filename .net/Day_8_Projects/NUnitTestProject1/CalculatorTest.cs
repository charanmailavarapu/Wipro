using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Assignment_1;


namespace NUnitTestProject1
{
    [TestFixture]
    public class CalculatorTest
    {
        Calculator c = new Calculator();
        [Test]
        public void TestAdd()
        {    
            Assert.AreEqual(3, c.Add(3,0));
        }

        [Test]
        public void TestSubtract()
        {
            Assert.AreEqual(0, c.Subtract(5, 5));
        }

        [Test]
        public void TestMultiply()
        {
            Assert.AreEqual(10, c.Multiply(5,2));
        }

        [Test]
        public void TestDivide() 
        {
            Assert.AreEqual(5, c.Divide(10,2)); 
        }
    }
}
