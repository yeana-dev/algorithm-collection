function birthday(s, d, m) {
  // Create a variable to count how many ways that meets the criteria
  let result = 0;
  // loop through s array
  for (let i = 0; i < s.length; i++) {
    // Create an array containing m numbers from index of i
    let arrayToSum = s.slice(i, i + m);
    // If the sum of numbers from array above equals to d
    if (arrayToSum.reduce((a, b) => a + b) === d) {
      // Increase the result by 1
      result++;
    }
  }
  return result;
}
