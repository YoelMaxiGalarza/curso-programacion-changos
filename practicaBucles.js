/* console.log("BUCLE FOR CULIA")

for (let i = 0; i <= 4; i++) {
    console.log(i);
}


console.log("BUCLE WHILE")

var indice = 0

while (indice <= 5) {
    console.log(indice)
    indice++
}

var ind = 0

//------------------------------------------------------------

const cs = ["exotic", "pixel", "CT", "TT"];

for (let i = 0; i < cs.length; i++) {
    console.log(cs[i]);

}

const puntuacion = [
    [10, 20, 30],
    [40, 50, 60]
]

for (let i = 0; i < puntuacion.length; i++) {
    //ESTE BUCLE RECORRE LA MATRIZ Y GUARDA EL VECTOR
    // DE LA POSICION I EN LA VAR RECORRER
    let recorrer = puntuacion[i];
    console.log(recorrer)

    //ESTE BUCLE FOR RECORRE EL VECTOR EN LA POSICION I 
    for (let b = 0; b < recorrer.length; b++) {

        console.log(recorrer[b])
    }

} */


var parrafoPepe = document.getElementsByClassName("interior")








function pyramid(numPisos) {
    /* Espacios que se debe empujar el asterisco*/
    let spaces = numPisos - 1;
    
    /* Recorrer cada piso */
    for (let i = 0; i < numPisos; i++) {
      let piso = '';
      
      /* Agregar el número de espacios */
      for (let j = 0; j < spaces; j++) {      
        piso += ' ';
      }
      
      /* Agregar el número de asteriscos */
      for (let k = 0; k <= i; k++) {      
        piso += '*';
      }
      
      /* Mostrar espacios y asteriscos por piso*/
      console.log(piso)
      
      /* El siguiente piso tendrá un espacio menos */
      spaces--;
    } 
  }
  
  pyramid(5);

  function pyramidBeto(numPisos) {

    /* Recorrer cada piso */
    for (let i = 0; i < numPisos; i++) {
      let piso = '';
      
      /* Agregar el número de espacios */
      for (let j = 1; j < numPisos - i; j++) {      
        piso += ' ';
      }
      
      /* Agregar el número de asteriscos */
      for (let k = 0; k < i + 1; k++) {      
        piso += '*';
      }
      
      /* Mostrar espacios y asteriscos por piso*/
      console.log(piso)
      
    } 
  }

  pyramidBeto(5)
