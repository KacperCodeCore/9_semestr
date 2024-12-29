using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    internal class StringHelper
    {

        public static bool IsPalindrome(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return false;

            string cleanedInput = input.ToLower().Replace(" ", "");
            char[] reversedInput = cleanedInput.ToCharArray();
            Array.Reverse(reversedInput);

            return cleanedInput == new string(reversedInput);
        }
    }

}
