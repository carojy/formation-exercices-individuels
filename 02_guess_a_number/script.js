// creer variable boleen qui sera resultat de didIwin et la jouer ds gameplay pr pas jouer didIwin 2x)

function askNumberPlayer1(){
    let popUp = prompt("Joueur 1 : entre un nombre entre 0 et 50")
    if (popUp>= 0 && popUp<= 50){
        return popUp
    }
    else {
        while (isNaN(popUp) || popUp< 0 || popUp > 50){
            alert("Relis la consigne !")
            return askNumberPlayer1()
        }
    }

}


function askNumberPlayer2(){
    let popIn = prompt("Joueur 2 : Devine le nombre choisi par le joueur 1")
    if (popIn >=0 && popIn <= 50) {
        return popIn
    }
    else {
        while (isNaN(popIn) || popIn< 0 || popIn > 50){
            alert("Relis la consigne !")
            return askNumberPlayer2()
        }
    }
}


let givenNumberPL1 = askNumberPlayer1()
let givenNumberPL2 = askNumberPlayer2()



function didIWin(PL2, PL1) {
    if (PL2 < PL1){
    alert("Plus grannnnnd")
    return false
    }

   else if (PL2 > PL1){
   alert("plus petiiiiit")
   return false
   }

   else {
        alert("C'est gagné, bien joué !")
        return true     
   }
    
}

function gamePlay(){
    while (didIWin(givenNumberPL2,givenNumberPL1)==false){ 
        askNumberPlayer2()
        }
    alert("bravoooo")
}

gamePlay()

