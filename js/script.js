import descifrado_cifrado from "./descifrado.js";

const mensaje = document.getElementById("mensaje");
const desplazamiento = document.getElementById("desplazamiento")
const boton_cifrar = document.getElementById("cifrar")
const boton_descifrar = document.getElementById("descrifrar")

boton_cifrar.addEventListener("click",()=>{
    if(mensaje.value ==""){
        alert("Ingresa tu mensaje secreto")
    }else if(desplazamiento.value ==""){
        alert("Ingresa tu clave secreta")
    }else{
        let texto = "";
        let textoCifrado = descifrado_cifrado(mensaje.value,desplazamiento.value,1);
        texto += "El mensajo cifrado es: "
        texto += textoCifrado;
        document.getElementById("resultado").innerHTML = texto;
    }
})