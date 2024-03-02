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

console.log(sumOfDigits(723));
