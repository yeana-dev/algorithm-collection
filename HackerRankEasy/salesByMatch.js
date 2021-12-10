function sockMerchant(n, ar) {
  // Create an array to store the count of each color's socks (called socks), fill 0 on each index
  let socks = [];
  socks.length = Math.max(...ar) + 1;
  socks.fill(0);
  // forEach to map each socks in arr, increment by 1 on the index of the color number
  ar.forEach((num) => {
    socks[num]++;
  });
  // Create a result variable to count how many pairs comes up from socks array
  let result = 0;
  // Map through array 'socks' to see how many pairs are there for each color
  socks.forEach((each) => {
    result += Math.floor(each / 2);
  });
  // Return how many pairs of socks we can from ar
  return result;
}
