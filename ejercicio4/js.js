var primerNumero = pedirNumero();
var segundoNumero = pedirNumero();
primerNumero = Number(primerNumero);
segundoNumero = Number(segundoNumero);

var resultado = pedirOperacionOperar(primerNumero,segundoNumero);
alert(resultado);

function pedirNumero(){
    var numero  = prompt("Di un numero entero positivo");
    return numero;
}
function pedirOperacionOperar(numero1,numero2){
    var operacion = prompt("Elige entre:\n 1_+ \n 2_- \n 3_* \n 4_/");

    if(operacion==1||operacion=="+"){
        var devolver = numero1 + numero2;
        return devolver;
    }
    else if(operacion==2||operacion=="-"){
        var devolver = numero1 - numero2;
        return devolver;
    }
    else if(operacion==3||operacion=="*"){
        var devolver = numero1 * numero2;
        return devolver;
    }
    else if(operacion==4||operacion=="/"){
        var devolver = numero1 / numero2;
        return devolver;
    }else{
        return "Error no es lo comun pero el programa va a cascar,recargue de nuevo la pagina e intentelo de nuevo";
    }
}