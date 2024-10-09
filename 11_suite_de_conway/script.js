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
  