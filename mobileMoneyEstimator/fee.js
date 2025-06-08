function estimateTransactionFee(amountToSend ){
    let prompt = 'How much are you sending ?'
    let amount = 1.5/100 * 3000 + 3000
    let message = 'Send money securely'
    if (amount>=70) {
        return  amount + 300}
        else if(amount>=10){
            return amount + 300
        }
    console.log (prompt) || console.log(amount) || console.log(message)

}

