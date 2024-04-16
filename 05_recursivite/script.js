const array=[1,2,3,4,8]

//ETAPE 1

function sum1(tableau) {
    let sum=0;

    for (i=0 ; i<tableau.length ; i++){
        sum+= tableau[i]
    }
    
    return sum
}
console.log(sum1(array))


// ETAPE 2
function sum2(base, times){
    if (times <= 0) {
        return 0;
        
    }else{
        return sum2(base,times-1)+ base[times - 1]
    }

}

console.log(sum2(array,array.length))


// Etape 3 
function factorial(nombre) {
    let result=1;

    for ( let i=1 ; i<= nombre ; i++) {
        result *= i  
    }

    return result
}

console.log(factorial(5))

//meme chose mais en recursive
function factorialRecursive(nombre){

    if (nombre ===1){
        return 1
    } else {
        return nombre * factorialRecursive(nombre-1)
    }

}

console.log(factorialRecursive(1))