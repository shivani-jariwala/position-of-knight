const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let xPosition,
  yPosition,
  n = 8,
  m = 8;
//representation of chessboard where 0 = nothing at that position
let mat = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const findPossibleMoves = (mat, p, q) => {
  // Possible moves of a knight
  let X = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y = [1, 2, 2, 1, -1, -2, -2, -1];

  let count = 0;

  // Check if each possible move is valid or not
  for (let i = 0; i < 8; i++) {
    // After move
    let x = p + X[i];
    let y = q + Y[i];

    // counting valid moves
    if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0) {
      count++;
    }
  }
  return count;
};

rl.question("Enter X position  ", function (x) {
  rl.question("Enter Y position ", function (y) {
    xPosition = Number.parseInt(x);
    yPosition = Number.parseInt(y);
    console.log(`Position of Knight is (${xPosition},${yPosition})`);
    rl.close();
  });
});

rl.on("close", function () {
  const result = findPossibleMoves(mat, xPosition, yPosition);
  console.log("Possible moves of a Knight on 8*8 chessboard is", result);
  process.exit(0);
});
