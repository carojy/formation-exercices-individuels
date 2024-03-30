// Etape 1 

function getLatinCharacterList(element){
    let separation = element.split("")
    return separation
}

console.log(getLatinCharacterList("Hello World"))

// Etape 2
function translateLatinCharacter(lettre){
    const latinToMorse = {
        'A':'.-',
        'B':'-...',
        'C':'-.-.',
        'D':'-..',
        'E':'.',
        'F':'..-.',
        'G':'--.',
        'H':'....',
        'I':'..',
        'J':'.---',
        'K':'-.-',
        'L':'.-..',
        'M':'--',
        'N':'-.',
        'O':'---',
        'P':'.--.',
        'Q':'--.-',
        'R':'.-.',
        'S':'...',
        'T':'-',
        'U':'..-',
        'V':'...-',
        'W':'.--',
        'X':'-..-',
        'Y':'-.--',
        'Z':'--..'
    }

    const tableaux = Object.entries(latinToMorse)   // Object.entries() renvoie un tableau pour chaque ligne d'un objet 

    for (i=0 ; i<tableaux.length ; i++ ){

        if (lettre == tableaux[i][0]){
            return tableaux[i][1]
        }
    }

}

//console.log(translateLatinCharacter("K"))

// Etape 3
function encode(texte){
let majuscule = texte.toUpperCase()
let variable = getLatinCharacterList(majuscule)
let traduction = []

for (let i=0 ; i<variable.length ; i++){
    traduction[i]=translateLatinCharacter(variable[i])
    }
return traduction
}

encode("coucou petit cul")
console.log(encode("coucou petit cul"))




// Etape 4

function getMorseList(element){
    let ciseaux = element.split(" ")
    return ciseaux
}

function translateMorseCharacter(lettre){
    const morseToLatin = {
        '-': "T",
        '--': "M",
        '---': "O",
        '--.': "G",
        '--.-': "Q",
        '--..': "Z",
        '-.': "N",
        '-.-': "K",
        '-.--': "Y",
        '-.-.': "C",
        '-..': "D",
        '-..-': "X",
        '-...': "B",
        '.': "E",
        '.-': "A",
        '.--': "W",
        '.---': "J",
        '.--.': "P",
        '.-.': "R",
        '.-..': "L",
        '..': "I",
        '..-': "U",
        '..-.': "F",
        '...': "S",
        '...-': "V",
        '....': "H"
      }
    
const tableaux2 = Object.entries(morseToLatin)   // Object.entries() renvoie un tableau pour chaque ligne d'un objet 

for (i=0 ; i<tableaux2.length ; i++ ){

    if (lettre == tableaux2[i][0]){
        return tableaux2[i][1]
    }
}

}
//console.log(translateMorseCharacter("...-"))

function decode(morse){
 
    let variable = getMorseList(morse)

    let traduction = []
    
    for (let i=0 ; i<variable.length ; i++){
        traduction[i]=translateMorseCharacter(variable[i])
        }
    return traduction.toString()
    }
    
    decode('-.-. --- ..- -.-. --- ..- .--. . - .. - -.-. ..- .-..')
    console.log(decode('-.-. --- ..- -.-. --- ..- .--. . - .. - -.-. ..- .-..'))

    // To do : afficher le string sans virgules


