
let urls = [
"https://adatechschool.fr/",
"https://www.sagacosmetics.com/",
"https://www.decathlon.fr/",
"https://www.asphalte.com/",
"https://carocirier.fr/",
"https://www.komilfo.fr/",
"https://www.mipise.com/fr",
"https://www.tablesoccer.org/",
"https://www.realites.com/fr",
"https://www.agence-i-communication.com/",
"https://www.manitou-group.com/fr/",
"https://www.flamingoofoods.com/"

]

function tempsChargement(){
    let result=[];

    for(let i=0; i<urls.length; i++){
        start = performance.now()
        fetch(urls[i])
        .then(resp => {
            end = performance.now()
            time = end - start
            result.push({time, url: urls[i]})
            if (result.length === urls.length){
                console.log(result.sort())
            }
        
        })
    }
}

tempsChargement()




async function responseTempsSite() {
    let resultat = []
    for (let i = 0; i < urls.length; i++) {
        let start = performance.now()
        let response = await fetch(urls[i])
        let end = performance.now()
        let time = end - start
        let url = urls[i]
        resultat.push({time, url})
    }
    resultat.sort((a, b) => a.time - b.time)
    console.log(resultat)
}

console.log(responseTempsSite())

