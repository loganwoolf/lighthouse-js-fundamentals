let myBin = { waste: 4, recycling: 2, compost: 5 }

function smartGarbage(trash, bins) {
  bins[trash]++
  return bins
}

console.log(smartGarbage('waste', myBin))

