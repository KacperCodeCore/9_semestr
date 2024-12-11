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
            Calculator.Add(5, 5);
            Calculator.Add(5, 5);
            Calculator.Add(5, 5);
        }
    }

    internal static class Calculator
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public static double Add(double a, double b)
        {
            log.Info("Adddddddddddd111111111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!d");
            return a + b;
        }
        public static double Subtract(double a, double b)
        {
            log.Info("Subtract");
            return a - b;
        }
        public static double Multiply(double a, double b)
        {
            log.Info("Multiply");
            return a * b;
        }
        public static double Divide(double a, double b)
        {
            log.Info("Divide");
            return a / b;
        }
        public static double Power(double a, double b)
        {
            log.Info("Power");
            return Math.Pow(a, b);
        }
    }
}