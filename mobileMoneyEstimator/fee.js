function estimateTransactionFee(){
    const amountStr =window.prompt('How much are you sending')
    const amount = parseInt(amountStr)
  

let transactionCost = (amount * 1.5) /100
if  (transactionCost<=10){
    alert(`Sending KES: ${amount}
          Calculated Transaction Fee: KES 10
          TotalAmount To Be Debited : ${amount+10}`
    )
}
if (transactionCost>=70){
    alert(`Sending KES ; ${amount}
           Calculated Transaction Fee :KES 70
           Total Amount To Be Debited : ${amount +70}`)
}
console.log('Thanks for trusting us')
}

