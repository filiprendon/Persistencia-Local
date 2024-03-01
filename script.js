let InfoUsuario = document.cookie;
let botonBorrar = document
function EnmagatzemaCookie(){
    let nombreUsuario = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    // InfoUsuario = document.cookie;
    document.cookie = `usuario=${nombreUsuario}`;
    document.cookie = `email=${email}`;
    console.log(InfoUsuario);
} 

function recuperarCookie(){

    if(InfoUsuario){
        let datos = InfoUsuario.split(" ");
        // console.error("hola", datos);
        document.getElementById('recuperar').innerHTML = JSON.stringify(datos);
    }else{
        alert("Hola, no tengo tus datos aún, por favor pon tu nombre y email");
    }

}

function eliminarCookie(){
    if(InfoUsuario !== ''){
        alert("Voy a eliminar estas cookies y no hay nada que puedas hacer");
        document.cookie = "usuario= ; max-age=-1";
        document.cookie = "email= ; max-age=-1";
        location.reload();
    } else {
        alert("No tienes ninguna cookie para borrar");
    }
    
}