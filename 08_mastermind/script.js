// ETAPE 1
const availableColorsTab = ["Blue", "Red", "Purple", "Yellow"]

const masterPlayerTab = ["Blue","Red"]

const guesserPlayerTab = ["Purple","Yellow"]


// check que la proposition est bien composée uniquement des 4 couleurs possibles
function checkColor(codeBreakerTab, allColorsTab){
    
    for (let i = 0 ; i < codeBreakerTab.length ; i++){
        console.log(codeBreakerTab[i])
        if (allColorsTab.includes(codeBreakerTab[i])){
            console.log('Cette couleur est autorisées')
        }
        else{
            console.log('Cette couleur n\'est pas dans la liste des couleurs autorisées')
            return false
        }
    }
    return true
}

console.log(checkColor(guesserPlayerTab, availableColorsTab))


//fonction qui retourne true ou false si la bonne combinaison est trouvée ou non /!\ ne vérifie pas si couleur bonne mais juste mal placée
function isCorrect(codeMakerTab, codeBreakerTab){
    for ( i = 0 ; i < codeBreakerTab.length ; i++){
        if(codeBreakerTab[i]===codeMakerTab[i]){
            console.log("ok")
        }
        else{
            return false
        }

    return true
    }
    

}

console.log(isCorrect(masterPlayerTab, guesserPlayerTab))


//fonction qui gère la partie (continuer tant que/fin si gagné
/*function playGame(victoire){

    while (victoire === false){
        console.log('Code faux, recommence')
    }
        console.log('Tu as trouvé la combinaison, c\'est gagné')
}*/

//playGame(isCorrect(masterPlayerTab, guesserPlayerTab))

