// Problem: Break an Arm
function findAD(AB, AC, BC, ratio) {
    const areaADE = ratio / (ratio + 1);
    const areaBDEC = 1 / (ratio + 1);
    const areaABC = (Math.sqrt(AC * AC - (BC / 2) * (BC / 2)) * BC) / 2;
    const areaADEInABC = areaABC * areaADE;
    const AD = (2 * areaADEInABC) / AB;
    return AD.toFixed(7);
}

function breakAnArm(T, testCases) {
    const results = [];
    for (let i = 0; i < T; i++) {
        const [AB, AC, BC, ratio] = testCases[i];
        const AD = findAD(AB, AC, BC, ratio);
        results.push(`Case ${i + 1}: ${AD}`);
    }
    return results;
}

const T = 4;
const testCases = [
    [100, 100, 100, 2],
    [10, 12, 14, 1],
    [7, 8, 9, 10],
    [8.134, 9.098, 7.123, 5.1],
];
const output = breakAnArm(T, testCases);
for (const result of output) {
    console.log(result);
}
