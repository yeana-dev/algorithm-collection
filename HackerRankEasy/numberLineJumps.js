function kangaroo(x1, v1, x2, v2) {
  // Define a time when both kangaroo will meet
  let t = (x2 - x1) / (v1 - v2);
  // If variable t is not a whole number or is a negative
  if (t % 1 !== 0 || t < 0) {
    // Return no because ...
    // 1. If t is not a whole number, it means
    // kangaroo never meet. (T doesn't exist)
    // 2. If t is negative, that means second kangaroo's
    // speed is faster than first's, and second kangaroo
    // is always a head of first one. Therefore, they
    // will never meet
    return "NO";
  } else {
    // Otherwise, Return 'Yes'
    return "YES";
  }
}
