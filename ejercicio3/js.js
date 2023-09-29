const MAXIMO = 100;
const MINIMO = 1;
const DIVISORES = [2,3,5,10];
function meterNumero(){
    var numero;
    while(numero<0 || numero%1!==0){
        numero = prompt("Cual es el numero que quieres comprobar?");
    }
    numero = 10;
    return numero;
}
function esDivisible(numero ,divisores){
    var divisoresAceptados = [];
    if(numero%divisores[0] == 0){
        divisoresAceptados = [divisores[0]];
    } 
    if(numero%divisores[1] == 0){
        divisoresAceptados += [divisores[1]];
    } 
    if(numero%divisores[2] == 0){
        divisoresAceptados += [divisores[2]];
    } 
    if(numero%divisores[3] == 0){
        divisoresAceptados += [divisores[3]];
    }
    var resultado = "Los divisores aceptados son: ";
    var numeros;
    for(var i = 0 ; i<divisoresAceptados.length; i++){
        numeros = divisoresAceptados[i]; 
    }
    return resultado += numeros;
}
var indicado = meterNumero();
alert(esDivisible(indicado,DIVISORES));

