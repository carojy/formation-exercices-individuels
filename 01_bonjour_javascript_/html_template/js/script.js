function askName(){
let nomUtilisatrice = prompt("Ton blaze please")
return nomUtilisatrice
}

function askBirthYear() {
let anneeNaissUtilisatrice = prompt("T'es de quelle année")
let moisNaissanceUtilisatrice = prompt("Et de quel mois?")
let anneeNaissNumber = parseInt(anneeNaissUtilisatrice)
let anneActuelle = 2024
console.log(anneeNaissNumber)

if (moisNaissanceUtilisatrice > 3)
anneeNaissNumber +=1 // user younger if born after March

return anneActuelle-anneeNaissNumber+" ans"
}

document.body.innerHTML += '<h2 id="monTitre"></h2>'
document.getElementById("monTitre").innerText ="Hey "+ askName()

document.body.innerHTML +='<h3 id="monAge"></h3>'
document.getElementById("monAge").innerText = "Vous avez "+askBirthYear()