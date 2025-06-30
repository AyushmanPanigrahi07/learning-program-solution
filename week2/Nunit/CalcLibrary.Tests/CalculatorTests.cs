using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator _calculator;

        [SetUp]
        public void SetUp()
        {
            _calculator = new Calculator();
        }

        [TearDown]
        public void TearDown()
        {
            _calculator = null;
        }

        [Test]
        public void Add_TwoNumbers_ReturnsCorrectSum()
        {
            int result = _calculator.Add(4, 5);
            Assert.That(result, Is.EqualTo(9));
        }
    }
}
