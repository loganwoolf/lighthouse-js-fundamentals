function range(start, end, step) {
  let arr = [];

  //add error conditions
  if (start === undefined || end === undefined || step === undefined) {
    return arr
  } else if (start > end) {
    return arr
  } else if (step <= 0) {
    return arr
  }

  //if no errors (else)
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));