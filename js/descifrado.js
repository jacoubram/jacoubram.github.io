function descifrado_cifrado(texto,desplazamiento, accion){
    const indiceActual = abecedario.indexOf(letraActual)
    
        if(indiceActual === -1){
            resultado += letraActual
        }else{
            let nuevoIndice
            if(accion == 1){
                nuevoIndice = (indiceActual + desplazamiento)%abecedario.length;
            }else{
                nuevoIndice = (indiceActual - desplazamiento)%abecedario.length;
                if(nuevoIndice < 0){
                    nuevoIndice += abecedario.length;
                }
            } 
            resultado += abecedario [nuevoIndice];
        }
    }
    return resultado;

/*
let textoOriginal = "Hola";
let desplazamiento = 25;
let textoCifrado = descifrado_cifrado(textoOriginal,desplazamiento,1);
console.log(textoCifrado);*/

export default descifrado_cifrado
