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
        document.getElementById('recuperar').innerHTML = datos;
    }else{
        console.log("Hola no tengo tus datos aún");
    }

}