function chessMove(t, testCases) {
    const moves = [];
    for (let i = 0; i < t; i++) {
        const [col, row] = testCases[i];
        const possibleMoves = [];

        for (let j = 0; j < 8; j++) {
            if (j + 1 !== parseInt(row)) {
                possibleMoves.push(col + (j + 1));
            }
        }

        for (let j = 0; j < 8; j++) {
            if (String.fromCharCode(j + 97) !== col) {
                possibleMoves.push(String.fromCharCode(j + 97) + row);
            }
        }

        moves.push(possibleMoves);
    }
    return moves;
}

const t = 1;
const testCases = [["d", "5"]];
const result = chessMove(t, testCases);
for (const moves of result) {
    console.log(moves.join("\n"));
}
