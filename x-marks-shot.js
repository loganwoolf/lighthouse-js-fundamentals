function finalPosition(route) {
  let northing = 0
  let easting = 0
  for (let i of route) {
    switch (i) {
    case 'north':
      northing++
      break
    case 'east':
      easting++
      break
    case 'south':
      northing--
      break
    case 'west':
      easting--
      break
      }
    }
  return [easting, northing]
}
        
const directions = ['north', 'north', 'west', 'west', 'north', 'east','north']  
        
console.log(finalPosition(directions))