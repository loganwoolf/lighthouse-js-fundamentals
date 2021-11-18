const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let w = 0
while (w < ingredients.length) {
  console.log(ingredients[w])
  w++
}
// Write a for loop that prints out the contents of ingredients:
for (let i of ingredients) {
  console.log(i)
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i > -1; i--) {
  console.log(ingredients[i])
}