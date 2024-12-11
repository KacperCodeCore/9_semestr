using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Xunit.Sdk;


namespace Calculator
{
    public class Test
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        [Theory]
        [InlineData(6, 3, 9)]
        [InlineData(4, 3, 7)]
        [InlineData(2, 3, 5)]
        public void AddTest(double a, double b, double expect)
        {
            log.Info("Add");
            var result = Calculator.Add(a, b);
            Assert.Equal(expect, result);
        }

        [Theory]
        [InlineData(6, 3, 3)]
        [InlineData(4, 3, 1)]
        [InlineData(2, 3, -1)]
        public void SubtractTest(double a, double b, double expect)
        {
            log.Info("SubtractTest");
            var result = Calculator.Subtract(a, b);
            Assert.Equal(expect, result);
        }

        [Theory]
        [InlineData(6, 3, 18)]
        [InlineData(4, 3, 12)]
        [InlineData(2, 3, 6)]
        public void MultiplyTest(double a, double b, double expect)
        {
            log.Info("MultiplyTest");
            var result = Calculator.Multiply(a, b);
            Assert.Equal(expect, result);
        }

        [Theory]
        [InlineData(6, 3, 2)]
        [InlineData(11, 2, 5.5)]
        [InlineData(1, 1, 1)]
        public void DivideTest(double a, double b, double expect)
        {
            log.Info("DivideTest");
            var result = Calculator.Divide(a, b);
            Assert.Equal(expect, result);
        }

        [Theory]
        [InlineData(6, 3, 216)]
        [InlineData(11, 2, 121)]
        [InlineData(498764, 0, 1)]
        public void PowerTest(double a, double b, double expect)
        {
            log.Info("PowerTest");
            var result = Calculator.Power(a, b);
            Assert.Equal(expect, result);
        }
    }
}
