using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnitDemos1;
using Moq;

namespace Mock_Example
{
    [TestFixture]
    public class DetailsTest
    {
        [Test]
        public void TestShowCompany()
        {
            Mock<IDetails> mockData = new Mock<IDetails>();
            mockData.Setup(x => x.ShowCompany()).Returns("Its from wipro Chennai");
            Assert.AreEqual("Its from wipro Chennai", mockData.Object.ShowCompany());
        }

        [Test]

        public void TestShowStudent()
        {
            Mock<IDetails> mockData = new Mock<IDetails>();
            mockData.Setup(x => x.ShowStudent()).Returns("Hi I am Charan");
            Assert.AreEqual("Hi I am Charan", mockData.Object.ShowStudent());
        }
    }
}
