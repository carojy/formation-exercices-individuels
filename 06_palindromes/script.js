// ETAPE 1

function isValidDate(day){
    let cut = day.split('/')
    let jour= parseInt(cut[0])
    let month =parseInt(cut[1])
    let year = parseInt(cut[2])

    let maxDayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (jour >0 && jour <= maxDayInMonth[month-1] && month >0 && month <12 && year > 999 && year< 9999){
        return true;
    } else {
        return false;
    }

}

// console.log(isValidDate("30/04/2001"))


// ETAPE 2

function isPalindrome(test){

    let cut = test.split('')
    let envers = cut.reverse()
    let enversJoined = envers.join('')


    if (test == enversJoined) {
        return true;
    } else {
        return false;
    }
}


console.log(isPalindrome("2012"))


