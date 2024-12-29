using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Xunit.Sdk;
using Moq;
using System.IO;


namespace Calculator
{
    public class CalculatorTest
    {
        [Theory]
        [InlineData(6, 3, 9)]
        [InlineData(4, 3, 7)]
        [InlineData(2, 3, 5)]
        public void AddTest(double a, double b, double expect)
        {
            var result = Calculator.Add(a, b);
            Assert.Equal(expect, result);
        }

        [Theory]
        [InlineData(6, 3, 3)]
        [InlineData(4, 3, 1)]
        [InlineData(2, 3, -1)]
        public void SubtractTest(double a, double b, double expect)
        {
            var result = Calculator.Subtract(a, b);
            Assert.Equal(expect, result);
        }

        [Theory]
        [InlineData(6, 3, 18)]
        [InlineData(4, 3, 12)]
        [InlineData(2, 3, 6)]
        public void MultiplyTest(double a, double b, double expect)
        {
            var result = Calculator.Multiply(a, b);
            Assert.Equal(expect, result);
        }

        [Theory]
        [InlineData(6, 3, 2)]
        [InlineData(11, 2, 5.5)]
        [InlineData(1, 1, 1)]
        [InlineData(1, 0, double.NaN)]
        public void DivideTest(double a, double b, double expect)
        {
            if (b == 0)
            {
                var exception = Assert.Throws<DivideByZeroException>(() => Calculator.Divide(a, b));
                Assert.Equal("typeof(System.DivideByZeroException)", exception.Message);
            }
            else
            {
                var result = Calculator.Divide(a, b);
                Assert.Equal(expect, result);
            }
        }

        [Theory]
        [InlineData(6, 3, 216)]
        [InlineData(11, 2, 121)]
        [InlineData(498764, 0, 1)]
        public void PowerTest(double a, double b, double expect)
        {
            var result = Calculator.Power(a, b);
            Assert.Equal(expect, result);
        }
    }

    public class DataServiceTest
    {
        [Fact]
        public async Task FetchDataAsyncTest()
        {
            DataService dataService = new DataService();

            string result = await dataService.FetchDataAsync();

            Assert.Equal("FetchDataAsync finished", result);
        }
    }

    public class ProoductTest
    {
        [Fact]
        public void GetProductByIdTest()
        {
            var mockProductRepository = new Mock<IProductRepository>();
            var sampleProduct = new Product { Id = 1, Name = "test" };

            mockProductRepository.Setup(repo => repo.GetProductById(1)).Returns(sampleProduct);

            var orderService = new OrderService(mockProductRepository.Object);
            var result = orderService.GetProductById(1);

            Assert.Equal(sampleProduct, result);
        }
    }
    
    public class StringHelperTest
    {
        public static IEnumerable<Object[]> GetPalindromData()
        {
            var csvPath = Path.Combine(AppContext.BaseDirectory, "../../../StringHelper/palindromes.csv");
            string fileContext = File.ReadAllText(csvPath);

            var PalindromBools = fileContext.Split(" ");

            foreach (var item in PalindromBools)
            {
                var part = item.Split(",");

                if (part.Length == 2)
                {
                    string input = part[0].Trim();
                    bool expected = bool.Parse(part[1].Trim());

                    yield return new object[] { input, expected };
                }
            }

        }

        [Theory]
        [MemberData(nameof(GetPalindromData))]
        public void IsPalindom_ShouldReturnExpectedResult(string input, bool expected)
        {
            bool result = StringHelper.IsPalindrome(input);
            Assert.Equal(result, expected);
        }
    }
}
