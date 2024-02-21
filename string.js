const friend1 = "Tonmoy";
const friend2 = "Inzamamul";

function reverseName(friendOne, friendTwo) {
    const friendOneLength = friendOne.length;
    const friendTwoLength = friendTwo.length;
    if (friendOneLength > friendTwoLength) {
        const restult = friendOne.split("").reverse().join("");
        return restult;
    } else {
        const restult = friendTwo.split("").reverse().join("");
        return restult;
    }
}

const result = reverseName(friend1, friend2);
console.log(result);

// ========================================================================

// const friend1 = 'Forhad';
// const friend2 = 'Emon';

// function reverseName(friendOne, friendTwo) {
//      const friendOneLength = friendOne.length;
//      const friendTwoLength = friendTwo.length;
//      let largeName = '';
//      if (friendOneLength > friendTwoLength) {
//           largeName = friendOne;
//      } else {
//           largeName = friendTwo;
//      }
//      let reversedString = '';
//      for (let i = largeName.length - 1; i >= 0; i--) {
//           const element = largeName[i];
//           reversedString = reversedString + element;
//      }
//      return reversedString;
// }
// const result = reverseName(friend1, friend2);
// console.log(result);

// ====================================================================

// function publicBusFare (participants) {
//      if (typeof participants != 'number' || participants < 50) {
//           return 'provide valid participants...';
//      }
//      let remaining = 0;
//      remaining = participants % 50;
//      if (remaining >= 11) {
//           remaining = remaining % 11;
//      }
//      let costOfPublicBus =remaining * 250;
//      return costOfPublicBus;
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
