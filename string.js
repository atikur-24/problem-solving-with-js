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
// console.log(output);

/* ----------- Given a set of strings, find the longest common prefix ----------- */
function longestCommonPrefix(arr) {
    if (arr.length === 0) return "";

    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let j = 0;

        while (j < result.length && j < arr[i].length && result[j] === arr[i][j]) {
            j++;
        }

        result = result.substring(0, j);

        if (result === "") {
            return "-1";
        }
    }

    return result;
}

// Driver code to test the function
const inputArr = ["geeksforgeeks", "geeks", "geek", "geezer"];
// console.log("The longest Common Prefix is:", longestCommonPrefix(inputArr));

function areKAnagrams(s1, s2, k) {
    if (s1.length !== s2.length) {
        return false;
    }

    const map = new Map();
    for (let i = 0; i < s1.length; i++) {
        const ch = s1[i];
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        } else {
            map.set(ch, 1);
        }
    }

    for (let i = 0; i < s2.length; i++) {
        const ch = s2[i];
        if (map.has(ch) && map.get(ch) > 0) {
            map.set(ch, map.get(ch) - 1);
        }
    }

    let count = 0;
    for (const [ch, freq] of map.entries()) {
        count += freq;
    }

    return count <= k;
}

const str1 = "anagram";
const str2 = "grammar";
const k = 2;
if (areKAnagrams(str1, str2, k)) {
    console.log("Yes");
} else {
    console.log("No");
}
