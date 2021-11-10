function getTotalX(a, b) {
  // Create an array to store the integers that are between the sets
  let result = [];
  // Create a counter, starting from last number from a
  let counter = a[a.length - 1];
  // Create a starting index
  let i = 0;
  // Sort b
  b = b.sort((a, b) => a - b);

  // Let's do a while loop. Since the integer that are between the sets
  // is not going to be bigger than first integer from array b, set the breakpoint of the loop
  while (counter <= b[0]) {
    if (
      b.every((num) => num % counter === 0) &&
      a.every((num) => counter % num === 0)
    ) {
      // If the current counter is
      result.push(counter);
    }
    counter++;
  }
  return result.length;
}
