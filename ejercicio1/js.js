var numeroEntrante = prompt("Dame un numero entero positivo para darte su sumatorio");

numeroEntrante = parseInt(numeroEntrante);

while(!esPositivo){
    numeroEntrante = prompt("Te has equivocado necesito un numero entero positivo, a ser posible superior a 2");
}

function esEntero(numero){
    var esEntero = false;
    if(numero == parseInt(numero)){
        esEntero = true;
    }
    return esEntero;
}
function esPositivo(numero){
    var esPositivo = false;
    if(numero>0){
        esPositivo = true;
    }
    return esPositivo;
}
function getSumatorio(numero){
    var sumatorio = "Sumatorio del numero " + numero;
    var Total = 0;
    if(esEntero == true && esPositivo == true){
        while(numero>=0){
            sumatorio += numero + " + ";
            Total += numero;
            numero--;
        }
    }
    sumatorio+= " = " + Total;
    alert(sumatorio);
    return sumatorio;
}
getSumatorio(numeroEntrante);