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
