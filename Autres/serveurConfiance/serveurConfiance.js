async function recuperationDonneesAPI(){
        const url = 'https://www.affirmations.dev/'
        
        // Retourne ce qui sera géré par le await
        return fetch(url)
        
        .then((response) => {
            return response.text() // Pas .json car ce n'est pas un .json que l'on souhaite afficher
        })
        .then((resultat) => {
            return resultat
        })
        
}

recuperationDonneesAPI()


// Necessaire pour utiliser protocole http
const http = require('http');


const server = http.createServer (async(req,res) => {
    // definition du type d'entête + infos relatives à l'encodage dans la balise head
    res.setHeader("content-type","text/html") 
    res.write("<head><meta charset='utf8'><head>")

    // pour attendre le resultat de recupérationDonneesAPI() : ces 2 fonctions sont async + await devant l'appel
    res.write("<h1>Accueil</h1><p>" + await recuperationDonneesAPI() +"</p>")

    // Obligatoire
    res.end()

})


server.listen(3000,"localhost", () => {
    console.log(`Ton serveur de confiance en soi démarré sur http://localhost:3000`);
    });

    