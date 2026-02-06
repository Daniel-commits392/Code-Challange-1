let input =prompt('Karibu ! How many cups of Chai Bora would you like to make ?')
let cups=Number(input)
function calculateChaiIngredients(cups){
  const water = 200 
  const milk = 50
  const teaLeaves= 1 
  const sugar= 2 
  let totalWater = cups * water 
  let totalMilk  = cups * milk 
  let totalTeaLeaves = cups * teaLeaves
  let totalSugar = cups *sugar
  console.log(`
    To make ${cups} cups of Kenyan Chai, you will need :
    Water : ${totalWater} ml
    Milk : ${totalMilk} ml
    Tea Leaves (Majani) : ${totalTeaLeaves} tablespoons
    Sugar (Sukari) : ${totalSugar} teaspoons

    😇 Enjoy your chai Bora 😇!
    `)
}
if(isNaN(cups)|| cups<=0){
  console.log('Please input a valid number')
}else{
  calculateChaiIngredients(cups)
}




