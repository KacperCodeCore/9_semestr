using System;
using log4net;
using log4net.Config;

namespace Calculator
{
   
    internal static class Calculator
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public static double Add(double a, double b)
        {

            var result = a + b;
            if (!double.IsNaN(result))
            {
                log.Info("Add");
                return a + b;
            }
            else
            {
                log.Error("Add");
                return double.NaN;
            }
        }
        public static double Subtract(double a, double b)
        {
            var result = a - b;
            if (!double.IsNaN(result))
            {
                log.Info("Subtract");
                return a - b;
            }
            else
            {
                log.Error("Subtract");
                return double.NaN;
            }
        }
        public static double Multiply(double a, double b)
        {

            //try
            //{
            //    return a * b;
            //}
            //catch (Exception e)
            //{
            //    log.Error(e);
            //    return double.NaN;
            //}

            var result = a * b;
            if (!double.IsNaN(result))
            {
                log.Info("Multiply");
                return a * b;
            }
            else
            {
                log.Error("Multiply");
                return double.NaN;
            }
        }
        public static double Divide(double a, double b)
        {
            try
            {
                if (b == 0)
                {
                    log.Error("Attempted division by zero");
                    throw new DivideByZeroException("typeof(System.DivideByZeroException)");
                }
                else
                {
                    log.Info("Divide");
                    return a / b;
                }
            }
            catch (Exception e)
            {
                log.Error("Divide", e);
                return double.NaN;
            }

            //var result = a / b;
            //if (!double.IsNaN(result))
            //{
            //    log.Info("Divide");
            //    return a + b;
            //}
            //else
            //{
            //    log.Error("Divide");
            //    return double.NaN;
            //}

        }
        public static double Power(double a, double b)
        {
            //try
            //{
            //    return Math.Pow(a, b);
            //}
            //catch (Exception e) { 
            //    log.Error(e);
            //    return double.NaN;
            //}
            var result = Math.Pow(a, b);
            if (!double.IsNaN(result))
            {
                log.Info("Power");
                return result;
            }
            else
            {
                log.Error("Power");
                return double.NaN;
            }
        }
    }
}