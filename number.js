function publicBusFare(participants) {
    if (typeof participants != "number" || participants <= 50) {
        return "provide valid participants...";
    }
    let remaining = 0;
    remaining = participants % 50;
    if (remaining >= 11) {
        remaining = remaining % 11;
    }
    let costOfPublicBus = remaining * 250;
    return costOfPublicBus;
}

const costOfPublicBus = publicBusFare(51);
// console.log(costOfPublicBus);

/* A palindrome number reads the same backward as forward */
function isPalindrome(number) {
    const strNum = String(number);
    const reversedStr = strNum.split("").reverse().join("");
    return strNum === reversedStr;
}

console.log(isPalindrome(121));
console.log(isPalindrome(373));
