const usuarios = ["Mario","Marcos","David","Pablo","Jandro"];
const contraseñas = ["2004","1999","2000","2003","2002"];

var usuarioEntrante = prompt("Nombre de Usuario");
var contraseñaEntrante = prompt("Contraseña");

existeLogin(usuarioEntrante);
var respuesta = passwordCorrecto(usuarioEntrante,contraseñaEntrante);
if(respuesta ==true){
    alert("Inicio de sesion correcto, Disfrute de la experiencia <3");
}else{
    alert("La contraseña o el usuario es incorrecto, Casco");
}


function existeLogin(Nombre){
    var existe = false;
    if(usuarios.includes(Nombre)){
        existe = true;
    }
    return existe;
}
function passwordCorrecto(nombre,contraseñaEntering){
    var devolver = false;
    if(contraseñas[usuarios.indexOf(nombre)]===contraseñaEntering){
        devolver=true;
    }
    return devolver;
}