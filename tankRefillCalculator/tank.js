let enterDays =  Number(prompt('Hello there! Could  you tell us how many days you will be staying here . ')) // converting the prompt from string to number
let householdNo = Number(prompt('How many households are there ?'))
function calculateWaterUsage(enterDays,householdNo){
    const totalWater = 10000
    const householdUsage = 250
    let usedWater = (householdUsage*enterDays)*householdNo
    let difference = totalWater - usedWater

    if(difference<=0){
        console.log('⚠️ The water has run out ⚠️')
    }
    else{
    console.log(
`   Goodday to you.
    Here is the update on the water storage.
    Remaining water : ${difference} litres.
    Duration : ${enterDays} days 
    Households: ${householdNo} households
  `)
    }
}
// input validation
if(isNaN(enterDays) || isNaN(householdNo) || enterDays<=0 || householdNo<=0){
    console.log('Please enter a valid number  🙂');
}
else{
    calculateWaterUsage(enterDays,householdNo);
}


// Remember [PROMPT() ALWAYS RETURNS A STRING].So you have to convert it depending on the question asked or problem you want to solve.
// Issues i faced
// One is that when running the function on the terminal i got an error, 'Prompt not defined'. This is bcz prompt() exist only in the browser and cant be run in the terminal.
// Parameter and variable for prompt