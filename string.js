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

/* ----------- string ------------- */
