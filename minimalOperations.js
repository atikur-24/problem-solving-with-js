function minimalOperations(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let count = 0;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === word[j + 1]) {
                count++;
                j++;
            }
        }
        result.push(count);
    }
    return result;
}

// Sample Test
const words = ["ab", "aab", "abb", "abab", "abaaaba", "jbj"];
const result = minimalOperations(words);
console.log(result);
