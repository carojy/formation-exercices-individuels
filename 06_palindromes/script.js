// ETAPE 1 : check si la date est valide

function isValidDate(date){
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
console.log(isValidDate("28/02/2024"))


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
// A - afficher date du jour
// function dateOfToday(){
//     const today = new Date()    
//     const thisYear = today.getFullYear()
//     const thisMonth = today.getMonth() + 1
//     const todayNumber = today.getDate()

//     if (thisMonth <10 ){
//         return todayNumber + '/0' + thisMonth + '/' + thisYear
//     }else{
//         return todayNumber + '/' + thisMonth + '/' + thisYear
//     }

// }
// console.log(dateOfToday())

// B - 
function getNextPalindromes(){
    const today = new Date()    
    const thisYear = today.getFullYear()
    const thisMonth = today.getMonth() 
    const todayNumber = today.getDate()


}

getNextPalindromes()

// boucle while : 
// changelocaldatetoString => afficher au format jjmmaa
// + 1j avec (setDate et GetDate)
// Condition : 
//if palindrome => push dans tableau 
// else => ajouter 1 j
// return tableau de dates palindromes

