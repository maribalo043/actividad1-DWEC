function pedirNumero() {
    let numero;
    do {
      numero = parseInt(prompt("Introduce un número entero positivo:"));
    } while (isNaN(numero) || numero <= 0);
    return numero;
  }
  
  const numeros = [];
  
  for (let i = 0; i < 4; i++) {
    numeros.push(pedirNumero());
  }
  
  let esCreciente = true;
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] <= numeros[i - 1]) {
      esCreciente = false;
      break;
    }
  }
  
  if (esCreciente) {
    alert("Los números están en orden estrictamente creciente.");
  } else {
    alert("Los números no están en orden estrictamente creciente.");
  }
  