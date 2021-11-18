const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
];

function chooseStations (list) {
  let results = []
  for (let item of list) {
    if (item[1] >= 20 && (item[2] === 'school' || item[2] === 'community centre')) {
      results.push(item[0])
    }
  }
  return results
}

console.log(chooseStations(stations))