let send = Number(prompt('How much money do you want to send ?'))// global scope

function feeAmount(amountSent,){
    let fee = amountSent * 0.02
    if(fee <10) return 10;
    if (fee>70) return 70;
    return fee
    }// calculates the feet hat will be charged

function calculatTransactionFee(amountSent,fee){
   let totalDeducted = amountSent + fee 
   console.log(`
    Mobile money Transaction Summary
    Amount sent: KES ${amountSent}
    Transaction Fee: KES ${fee}
    Total Deducted: KES ${totalDeducted}`)
} // calculates the total amount 

if(isNaN(send) || send<=0 ){
    console.log('Please enter the valid amount.');
}else{
    let fee =feeAmount(send) 
    calculatTransactionFee(send,fee);
    
}
