using System;
using log4net;
using log4net.Config;
[assembly: log4net.Config.XmlConfigurator(ConfigFile = "log4net.config")]



namespace Calculator
{
    internal static class Program
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        static void Main(string[] args)
        {
            log.Info("Program start");


            double a = Calculator.Subtract(5, 0);
            double b = Calculator.Divide(7, 0);
            double c = Calculator.Multiply(double.MaxValue, double.MinValue);
            double d = Calculator.Power(double.MaxValue, double.MinValue);
            
            Console.WriteLine("Calculate my function: f(a + b + c + d)");
            var result = a + b + c + d;
            if(double.IsNaN(result))
            {
                log.Error("Fail");
            }
            else
            {
                log.Info("Succes");
            }
            Console.WriteLine(result.ToString());
        }
    }
}