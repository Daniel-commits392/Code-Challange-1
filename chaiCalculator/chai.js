function calculateChaiIngrindients(){
    const noOfCups = window.prompt('How many cups of tea do you want?')
    const numberOfCups = parseInt(noOfCups)
    const  water =parseInt('200ml')
    const  milk = parseInt('50ml')
    const tealeaves = parseInt('1tablespoon')
    const  sugar = parseInt('2 teaspoons')
  let chaiCups = numberOfCups
    alert (`To make ${numberOfCups} cups of Kenyan Chai, you will need
            Water : ${numberOfCups * water } ml
             Milk : ${numberOfCups * milk} ml
         Tealeaves: ${numberOfCups * tealeaves} tablespoon
             sugar :${numberOfCups * sugar} teaspoons`)

}

