/* ------------ Find the index number of the largest string in the list of members and return reverse output ------------ */
const memberOne = "Abdullah Al Masud";
const memberTwo = "Nafees Imtiaz Shawon";
const memberThree = "Sihab Uddin Molla";

const findLargestString = (memberOne, memberTwo, memberThree) => {
    const memberOneLength = memberOne.length;
    const memberTwoLength = memberTwo.length;
    const memberThreeLength = memberThree.length;

    if (memberOneLength > memberTwoLength && memberOneLength > memberThreeLength) {
        const result = memberOne.split(" ").reverse().join(" ");
        return result;
    } else if (memberTwoLength > memberOneLength && memberTwoLength > memberThreeLength) {
        const result = memberTwo.split(" ").reverse().join(" ");
        return result;
    } else {
        const result = memberThree.split(" ").reverse().join(" ");
        return result;
    }
};

const largestStr = findLargestString(memberOne, memberTwo, memberThree);
// console.log(largestStr);

/* ----------- Given a string, the task is to reverse the order of the words in the given string ----------- */
function reverseWords(inputString) {
    let reversedString;
    if (typeof inputString === "string" && inputString.length > 0) {
        const wordsArray = inputString.split(" ");
        const reversedArray = wordsArray.reverse();
        reversedString = reversedArray.join(" ");
    } else reversedString = "please input valid string";
    return reversedString;
}
const input = "i like this program very much";
const output = reverseWords(input);
console.log(output);
