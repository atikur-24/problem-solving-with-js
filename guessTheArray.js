// Problem: Add solution for "Guess The Array" problem

function findBeautifulArray(n, arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    let result = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            result.push(Math.ceil(sum / n));
        } else {
            result.push(Math.ceil(sum / n) - 1);
        }
    }
    return result.join(" ");
}

function guessTheArray(t, testCases) {
    const beautifulArrays = [];
    for (let i = 0; i < t; i++) {
        const [n, arr] = testCases[i];
        beautifulArrays.push(findBeautifulArray(n, arr));
    }
    return beautifulArrays;
}

const t = 4;
const testCases = [
    [5, [1, 2, 3, 4, 5]],
    [2, [4, 6]],
    [2, [1, 1000000000]],
    [6, [3, 4, 8, 1, 2, 3]],
];
const result = guessTheArray(t, testCases);
for (const beautifulArray of result) {
    console.log(beautifulArray);
}
