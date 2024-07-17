// ETAPE 1 : check si la date est valide

function isValidDate(date){

    if(typeof date !== "string"){
        return false
    }
    
    const cut = date.split('/')
    const day = parseInt(cut[0])
    const month = parseInt(cut[1])
    const year = parseInt(cut[2])

    const maxDayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


    
    if ( day > 0 && day <= maxDayInMonth[month-1] && month > 0 && month < 12 && year > 999 && year < 9999 ) {
        return true;
    } else {
        return false;
    }

}
console.log(isValidDate("28/12/2023"))



// ETAPE 2 : checker si la date est un palindrome

function isPalindrome(date){
    let cut = date.split('/')
    let dateWithoutSlash = cut.join("")
    let separate = dateWithoutSlash.split('')
    let backwards = separate.reverse()
    let backwardsJoined = backwards.join('')

    if (dateWithoutSlash == backwardsJoined) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome("11/02/2011"))



// Etape 3 : donner les x futures dates palindroems à partir d'aujourd'hui

function getNextPalindromes(x){
    let today = new Date()  
    let tableau = []
    
    while (tableau.length < x){
        today.setDate(today.getDate()+1) //ajoute un jour à today
        if (isPalindrome(today.toLocaleDateString()) == true){
            tableau.push(today.toLocaleDateString())
        } else {
            today.setDate(today.getDate()+1)
        }
    }
    
    return tableau
}

console.log(getNextPalindromes(6))


module.exports = isValidDate;