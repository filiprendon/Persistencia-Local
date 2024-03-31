let InfoUsuario = document.cookie;
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
        document.cookie = "usuario= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "email= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
    } else {
        alert("No tienes ninguna cookie para borrar");
    }
    
}

function guardarNombre() {
    let nuevoNombre = document.getElementById('nombreAsistente').value.trim();
    let fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    let localidad = document.getElementById('localidad').value.trim();

    // Obtener los datos existentes de la cookie si los hay
    let datosGuardados = [];
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [name, value] = cookie.split('=');
        if (name.trim() === 'datos') {
            datosGuardados = JSON.parse(value);
            break;
        }
    }

    datosGuardados.push({
        nombre: nuevoNombre,
        fechaNacimiento: fechaNacimiento,
        localidad: localidad
    });

    let datosJSON = JSON.stringify(datosGuardados);
    document.cookie = `datosAsistentes=${datosJSON}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

    console.log('Datos actualizados:', datosGuardados);
}
