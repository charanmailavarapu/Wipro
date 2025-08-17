using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnitDemos.Tests
{
    [TestFixture]
    public class DemoTest
    {
        [Test]
        public void TestSum()
        {
            Demo demo = new Demo();
            Assert.AreEqual(6, demo.Sum(2, 3));
        }
        [Test]
        public void TestSayHello()
        {
            Demo demo = new Demo();
            Assert.AreEqual("Welcome to c# Programming...", demo.SayHello());
        }
    }
}
