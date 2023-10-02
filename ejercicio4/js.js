var primerNumero = pedirNumero();
var segundoNumero = pedirNumero();
var operacion = pedirOperacion();
alert(operar(primerNumero,segundoNumero,operacion));

function pedirNumero(){
    var numero  = prompt("Di un numero entero positivo");
    return numero;
}
function pedirOperacion(){
    var operacion = prompt("Elige entre 1_+ \n 2_- \n 3_* \n 4_/");
    operacion = +operacion;
    var devolver = "";
    switch(operacion){
        case 1:
            devolver = "+";
        break;
        case 2:
            devolver = "-";
        break;
        case 3:
            devolver = "*";
        break;
        case 4:
            devolver = "/";
        break;
    }
    return devolver;
}
function operar(numero1,numero2,operacion){

    return devolver;
}
