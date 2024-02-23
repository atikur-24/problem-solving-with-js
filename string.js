/* ------------ Find the index number of the largest string in the list of members and return reverse output ------------ */

const memberOne = "Abdullah Al Masud";
const memberTwo = "Nafees Imtiaz Shawon";
const memberThree = "Sihab Uddin Molla";

const findLargestString = (memberOne, memberTwo, memberThree) => {
    const memberOneLength = memberOne.length;
    const memberTwoLength = memberTwo.length;
    const memberThreeLength = memberThree.length;

    if (memberOneLength > memberTwoLength && memberOneLength > memberThreeLength) {
        const result = memberOne.split("").reverse().join("");
        return result;
    } else if (memberTwoLength > memberOneLength && memberTwoLength > memberThreeLength) {
        const result = memberTwo.split("").reverse().join("");
        return result;
    } else {
        const result = memberThree.split("").reverse().join("");
        return result;
    }
};

const largestStr = findLargestString(memberOne, memberTwo, memberThree);
// console.log(largestStr);

// ====================================================================

// function publicBusFare(participants) {
//     if (typeof participants != "number" || participants < 50) {
//         return "provide valid participants...";
//     }
//     let remaining = 0;
//     remaining = participants % 50;
//     if (remaining >= 11) {
//         remaining = remaining % 11;
//     }
//     let costOfPublicBus = remaining * 250;
//     return costOfPublicBus;
// }

// const costOfPublicBus = publicBusFare(365);
// console.log(costOfPublicBus);

// ====================================================================

// function sum(i) {
//     return i + sum(i - 1);
// }
// const restult = sum(5);
// console.log(restult);

// -----------reversed string-------------
// function reverseText(text) {
//     let reversed = '';
//     for (let i = text.length - 1; i >= 0; i--) {
//         const element = text[i]
//         console.log(element)
//     }
// ;
// }

// const myString = 'I am a innocent boy';
// const reversed = reverseText(myString);

// =======================================================
