// Problem: Add JavaScript solution for 'Determination' problem
function checkSuspicion(n, tasks) {
    const seen = new Set();
    for (let i = 0; i < n; i++) {
        const task = tasks[i];
        if (seen.has(task) && tasks[i - 1] !== task) {
            return "NO";
        }
        seen.add(task);
    }
    return "YES";
}

function determineSuspicion(t, testCases) {
    const results = [];
    for (let i = 0; i < t; i++) {
        const [n, tasks] = testCases[i];
        const result = checkSuspicion(n, tasks);
        results.push(result);
    }
    return results;
}

const t = 5;
const testCases = [
    [3, "ABA"],
    [11, "DDBBCCCBBEZ"],
    [7, "FFGZZZY"],
    [1, "Z"],
    [2, "AB"],
];
const output = determineSuspicion(t, testCases);
for (const result of output) {
    console.log(result);
}
