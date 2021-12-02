function loopyLighthouse (range, multiples, words) {
  let count = range[0];
  while (count <= range[1]) {
    if (count % multiples[0] === 0 && count % multiples[1] === 0) {
      console.log(words[0]+words[1]);
    } else if (count % multiples[0] === 0) {
      console.log(words[0]);
    } else if (count % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(count);
    }
    count++;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);