/* Problem: Find the index number of the largest string in the list of members and return reverse output */
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

/* Problem: Given a string, the task is to reverse the order of the words in the given string */
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
// console.log(reverseWords(input));

/* Problem: Given a set of strings, find the longest common prefix */
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

/* Problem: Given two strings of lowercase alphabets and a value k, the task is to find if two strings are K-anagrams of each other or not */
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
// if (areKAnagrams(str1, str2, k)) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

/* Problem: Create a function that counts the number of occurrences of a specific substring within a given string. Utilize the relevant string method to simplify the implementation. */
function countOccurrences(mainString, subString) {
    const regex = new RegExp(subString, "gi");
    const matches = mainString.match(regex);
    return matches ? matches.length : 0;
}
// console.log(countOccurrences("hello hello Hello world", "hello"));

/* Problem: Implement a function that capitalizes the first letter of each word in a sentence. */
function capitalizeWords(sentence) {
    const splitWords = sentence.split(" ");
    const uppercaseFirstLetter = splitWords.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizeSentence = uppercaseFirstLetter.join(" ");
    return capitalizeSentence;
}
// console.log(capitalizeWords("this is a simple sentence"));

/* Problem: takes a string as input and returns a new string with all whitespace characters (spaces, tabs, and newlines) removed */
function removeWhitespace(inputString) {
    const removedSpace = inputString.replace(/\s/g, "");
    return removedSpace;
}
// console.log(removeWhitespace("  remove    whitespace  "));

/* Problem: A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward*/
function isPalindrome(inputString) {
    const cleanedString = inputString.toLowerCase().replace(/\s/g, "");
    const reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
}

// console.log(isPalindrome("A man a plan a canal Panama"));
