function diagonalDifference(arr) {
  // Create two empty array to store numbers for 'leftToRight' diagonal and 'rightToLeft' diagonal
  let leftToRight = [];
  let rightToLeft = [];
  // Assign arr.length (the number of rows and columns in the matrix) to variable 'n'
  let n = arr.length;
  // Loop through arr starting at index of 0 while i < n
  for (let i = 0; i < n; i++) {
    // push number at row i / column i to leftToRight array
    leftToRight.push(arr[i][i]);
    // push number at row i / column at (n-1)-i to rightToLeft array
    // (because column needs to go backward)
    rightToLeft.push(arr[i][n - 1 - i]);
  }
  // Sum all numbers inside of each array
  leftToRight = leftToRight.reduce((a, b) => a + b);
  rightToLeft = rightToLeft.reduce((a, b) => a + b);
  // Return absolute number of the subtract of both numbers
  return Math.abs(leftToRight - rightToLeft);
}
