let nomUtilisatrice = prompt("Ton blaze please")
let messagePerso = "Hello "+nomUtilisatrice

document.body.innerHTML += '<h2 id="monTitre"></h2>'
document.getElementById("monTitre").innerText = messagePerso

let anneeNaissUtilisatrice = prompt("T'es de quelle année")
let anneActuelle =  2024
let ageUtilisatrice = anneActuelle-anneeNaissUtilisatrice +" ans"
console.log(ageUtilisatrice)

document.body.innerHTML +='<h3 id="monAge"></h3>'
document.getElementById("monAge").innerText = "Vous avez "+ageUtilisatrice



