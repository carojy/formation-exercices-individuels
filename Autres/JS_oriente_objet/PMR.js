class Trip {

    constructor(name, start, duration, price) {
        this.name = name
        this.start = start
        this.duration = duration
        this.end = this.start + this.duration
        this.price = price 

    }

    #isCompatible(trip){

            if (this.end < trip.start){
                return true
            } else {
                return false
            }
    }

    getInformation(){
        return this.#isCompatible(trip)
    }
}


class Agence {

    parseTrips(tickets){
        let  storageData = []

        for (let i=0 ; i < tickets.length; i++){
         let donneeBienRangees = parseTrip((tickets[i]))
         storageData.push(donneeBienRangees)
        }
         return storageData
      }
    
    findCompatibilities(list){
        let listeCompatible=[]
    
        for(let i = 0 ; i < list.length-1 ; i++ ){
            if(parseTrip(list[i]).getInformation(parseTrip(list[i+1])) == true){
                listeCompatible.push([list[i],list[i+1]])
            }
        }
        return listeCompatible

    }

}




function parseTrip(ticket){
    words= ticket.split(" ") 
    client= words[0]
    start=  parseInt(words[1])
    duration= parseInt(words[2])
    price= parseInt(words[3])

    return new Trip(client, start , duration , price) 
}


let trip = parseTrip("Perdita 8 10 8")
let autreTrip = parseTrip("Cara 19 10 8")
let tripes = [
    "Perdita 8 10 8",
    "Caro 19 11 8",
    "Line 20 1 8",
    "Jane 23 11 8",
    "Morgane 10 11 8"    
    ]

console.log(trip.getInformation(autreTrip))


let agence = new Agence()
console.log(agence.parseTrips(tripes))
console.log(agence.findCompatibilities(tripes))












































// //----methode 1----"
// function callback(valeurCour){
//     console.log (valeurCour);
// }
// tripsToParse.forEach(callback)

// console.log("----methode 2----")
// tripsToParse.forEach((test) => console.log(test));

// console.log("----methode 3----")
// tripsToParse.forEach((test2) => {console.log(test2)})

// console.log("----methode 4----")
// tripsToParse.forEach(function call(valeur){
// console.log(valeur)
// })  

