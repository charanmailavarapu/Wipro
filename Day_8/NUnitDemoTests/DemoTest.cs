using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnitDemos1;


namespace NUnitDemoTests
{
    [TestFixture]
    public class DemoTest
    {

        [Test]
        public void TestEvenOdd()
        {
            Demo demo = new Demo();
            Assert.True(demo.EvenOdd(6));
            Assert.False(demo.EvenOdd(5));
        }
        [Test]
        public void TestNull()
        {
            Demo demo = new Demo();
            Assert.IsNotNull(demo);

            Demo demo1 = null;
            Assert.IsNull(demo1);
        }
        [Test]
        public void TestMaxOf3()
        {
            Demo demo = new Demo();
            Assert.AreEqual(8, demo.MaxOf3(8, 4, 5));
            Assert.AreEqual(9, demo.MaxOf3(4, 9, 6));
            Assert.AreEqual(10, demo.MaxOf3(9, 4, 10));
        }
        [Test]
        public void TestSum()
        {
            Demo demo = new Demo();
            Assert.AreEqual(5, demo.Sum(2, 3));
        }
        [Test]
        public void TestSayHello()
        {
            Demo demo = new Demo();
            Assert.AreEqual("Welcome to c# Programming", demo.SayHello());
        }
    }
}
