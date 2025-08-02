using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Moq;

namespace MockRepeat
{
    [TestFixture]
    public class MockData
    {
        [Test]
        public void TestMileStone1()
        {
            Mock<IWiproData> mockData = new Mock<IWiproData>();
            mockData.Setup(x => x.MileStone1()).Returns("MileStone1 exam on August 1");
            Assert.AreEqual("MileStone1 exam on August 1", mockData.Object.MileStone1());
        }

        [Test]
        public void TestMileStone2()
        {
            Mock<IWiproData> mockData = new Mock<IWiproData>();
            mockData.Setup(x => x.MileStone2()).Returns("MileStone2 exam on August 10");
            Assert.AreEqual("MileStone2 exam on August 10", mockData.Object.MileStone2());
        }
    }
}
