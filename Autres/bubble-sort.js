let tab = [8,12,3,1,4] ;

function croissantSort(tableau){
  for (i=0 ; i < tableau.length ; i++) {

    for (j=0 ; j < tableau.length ; j++) {
      
      if (tableau[j] > tableau[j+1]) {
        [tableau[j], tableau[j+1]] = [tableau[j+1],tableau[j]]
      }

        
      }
    }
    return tableau
    
  }


console.log(croissantSort(tab))