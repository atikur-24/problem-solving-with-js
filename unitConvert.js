// ----------inch to feet---------
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const roadInch = 144;
const roadFeet = inchToFeet(roadInch);
// console.log(roadFeet);

// --------- miles to kilometer----------
function milesToKilometer(miles) {
    const kilometer = miles / 1.06934;
    return kilometer;
}
const runMiles = 20;
const runKilometer = milesToKilometer(runMiles);
// console.log(runKilometer);

// -----------Check even and odd number using function----------
function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}
const myNumber1 = isEven(54);
// console.log(myNumber1);

// ---------check leap year----------
function checkLeapYear(year) {
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
        console.log(year + " is leap year");
    } else {
        console.log(year + " is not leap year");
    }
}
// checkLeapYear(2000);
// checkLeapYear(1700);

// ---------Calculate Sum of all numbers of an array------------
function getSumOfAnArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum += element;
        console.log(i, element, sum);
    }
}
const myNumber = [54, 37, 12, 25];
// getSumOfAnArray(myNumber);

// ----------- get odd num sum of an array ------------
function getOddNumberOfAnArray(numbers) {
    const oddNum = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddNum.push(element);
        }
    }
    return oddNum;
}

const myNum = [25, 56, 32, 87, 54, 61, 48];
const oddNum = getOddNumberOfAnArray(myNum);
// console.log(oddNum);

//----------factor-------------
function factorialForward(number) {
    let i = 1;
    let multiplication = 1;
    while (i <= number) {
        multiplication *= i;
        i++;
    }
    return multiplication;
}
const result1 = factorialForward(6);
// console.log("Factorial of 6:", result1);

function factorialBackward(number) {
    let multiplication = 1;
    for (let i = number; i >= 1; i--) {
        multiplication *= i;
    }
    return multiplication;
}
const result = factorialBackward(5);
// console.log("Factorial of 5:", result);
