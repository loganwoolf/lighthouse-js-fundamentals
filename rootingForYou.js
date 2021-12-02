const arr = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

function judgeVegetable(vegetables, metric) {
  vegetables.sort((a, b) => b[metric] - a[metric])
  return vegetables[0].submitter
}

console.log(judgeVegetable(arr, 'plumpness'))