//Ressortir string en paramètre avec espaces quand lettres sont différentes

function decoupeChaine(string){
    let result = ""
    
    for (let i = 1 ; i < string.length + 1 ; i++){
      if (string[i] === string[i-1]){
        result += string[i]
      }else{
        result += string[i-1] + " "
      }
    }
    
    return result
  }
  
  console.log(decoupeChaine("aaabbbccdddefghh"))
  

//Renvoie une string qui décrit les caractères qui constituent la chaîne en paramètre.

function decritChaine(stringADecrire){
    let result = ""
    
    for (let i = 1 ; i < stringADecrire.length + 1 ; i++){
      if (stringADecrire[i] === stringADecrire[i-1]){
        result += stringADecrire[i]
      }else{
        result += stringADecrire[i-1] + " "
      }
    }
    
    return result
}

console.log(decritChaine("aabbca"))