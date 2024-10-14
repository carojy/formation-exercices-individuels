// STEP 1
//Return string as parameter with spaces when letters are different

function cutChain(string){
    let resultString = ""
    
    for (let i = 1 ; i < string.length + 1 ; i++){
      if (string[i] === string[i-1]){
        resultString += string[i]
      }else{
        resultString += string[i-1] + " "
      }
    }
    
    return resultString
  }
  
  console.log(cutChain("aaabbbccdddefghh"))
  

// STEP 2
//Returns a string which describes how many chars in the parameter string

function decritChain(stringToDescribe){
    let describedString = ""
    let charNumber = 1
    
    for (let i = 1 ; i < stringToDescribe.length + 1 ; i++){
      if (stringToDescribe[i] === stringToDescribe[i-1]){
        charNumber += 1
      
      }else{
        describedString += charNumber + stringToDescribe[i-1] + " "
        charNumber = 1
      }
    }
    
    return describedString
}

console.log(decritChain("aggkiii"))


// STEP 3
// Returns the first n terms of the sequence beginning with the character carac. n and carac are passed as parameters to the function.

function conwaySuite(n, char){

}