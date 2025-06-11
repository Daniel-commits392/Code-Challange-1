function calculateBodaFare(){
    const distancestr = window.prompt('How far are you travelling? Kilometer ngapi ?')
    const distanceInKm = parseInt(distancestr)
    console.log (distancestr)
    const baseFare = 50
    const chargePerKm = 15


 let totalFare =baseFare + (distanceInKm * chargePerKm)
 alert(`Uko kwote? Io ni :${distanceInKm}
        Using a motorbike will cost :KES ${baseFare}
        Mpaka huko :KES ${distanceInKm *chargePerKm}
        Total : KES ${totalFare}`)
   console.log('Thank you.Come again')
}