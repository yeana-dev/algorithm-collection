function staircase(n) {
  // Using for loop, loop from 1 to n
  for (let i = 1; i < n + 1; i++) {
    // console log i amount of # and fill rest of the area with space (n-i)
    // Make sure spaces are on the left side of #
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

// staircase(5)
// Output :
//     #
//    ##
//   ###
//  ####
// #####
