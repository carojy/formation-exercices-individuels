// creer variable boleen qui sera resultat de didIwin et la jouer ds gameplay pr pas jouer didIwin 2x)


const guessNumber = prompt("fournis un nombre compris entre 0 et 50 ")


let givenNumber = prompt("Donnes un nombre stp")

function didIWin() {
    if (givenNumber < guessNumber){
    givenNumber=prompt("Plus grannnnnd")
    return false
    }

   else if (givenNumber > guessNumber){
   givenNumber=prompt("plus petiiiiit")
   return false
   }

   else {
        alert("C'est gagné, bien joué !")
        return true     
   }
    
}

function gamePlay(){
    while (didIWin()==false){ 
        didIWin()
        }        
}

gamePlay()

// arrete etape 4 car pas compris ce qu'ilf aut faire