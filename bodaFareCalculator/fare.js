const ratePerKm = 50
let length = Number(prompt('How far are you traveling '))
let unit = prompt('Enter unit(km,m,miles)').toLowerCase()
// anything comming from a prompt() is a string

function convertToKm(distance,unit){
   if (unit === 'km') return distance
   if (unit === 'm') return distance/1000
   if (unit === 'miles') return distance *1.609
   return null
}

function calculateBodaFare(distanceInKm){
   let totalPrice= distanceInKm * ratePerKm
   console.log(`
      🏍️ Boda Fare Estimate 🏍️
      Distance: ${distanceInKm} km
      Rate: KES ${ratePerKm} per km
      Total Fare: KES ${totalPrice}`)
} 

let distanceInKm=convertToKm(length,unit)

if(isNaN(length)|| length<=0 || distanceInKm === null){
   console.log('Input a valid number')
}else{
   calculateBodaFare(distanceInKm)
}
