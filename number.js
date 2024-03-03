/* Problem: A palindrome number reads the same backward as forward */
function isPalindrome(number) {
    const strNum = String(number);
    const reversedStr = strNum.split("").reverse().join("");
    return strNum === reversedStr;
}

// console.log(isPalindrome(121));
// console.log(isPalindrome(373));

/* Problem: calculates the sum of the digits of a given positive integer */
function sumOfDigits(number) {
    const numToArr = String(number).split("");
    const sum = numToArr.reduce((sum, digit) => sum + parseInt(digit), 0);
    return sum;
}

// console.log(sumOfDigits(723));

/* Problem: a function that takes a number as input and returns true if it's a prime number, and false otherwise */
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// console.log(isPrime(7));

/* Problem: generate the Fibonacci sequence up to a specified number of terms. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. */
function fibonacciSequence(count) {
    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

// console.log(fibonacciSequence(5));

/* Problem: Create a function that takes a number as input and returns the equivalent words */
function numberToWords(number) {
    const words = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (number === 0) return "Zero";
    if (number >= 1000) return "Above one thousand not allow";

    function convertLessThanThousand(num) {
        if (num === 0) return "";
        else if (num < 10) return words[num];
        else if (num < 20) return teens[num - 10];
        else {
            const digit = num % 10;
            const ten = Math.floor(num / 10);
            return tens[ten] + (digit ? "-" + words[digit] : "");
        }
    }

    function convert(num) {
        if (num === 0) return "";
        else if (num < 100) return convertLessThanThousand(num);
        else {
            const hundred = Math.floor(num / 100);
            const remainder = num % 100;
            return words[hundred] + " Hundred" + (remainder ? " and " + convertLessThanThousand(remainder) : "");
        }
    }

    return convert(number);
}

// console.log(numberToWords(570));
