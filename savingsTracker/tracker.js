let saved= Number(prompt('How much money are you planning to save today ?'))
let period = Number(prompt('For how many days did you save this week 🧐?'))
function savingTracker(savings,days){
   let totalSavings= savings * days

   console.log(
    `Weekly Savings summary
    Daily savings:KES ${savings} 
    Days saved: ${days}
    Total saved this week: KES ${totalSavings}`
   )
}
 if(isNaN(saved) || isNaN(period) || saved<=0 || period<=0){
    console.log('Please input a number only')
   }
   else{savingTracker(saved,period)}

   // this challange shows how both parameters and variables can be used to solve a problem.