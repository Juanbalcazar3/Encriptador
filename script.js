
function encriptar(texto, desplazamiento) {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        
        if (caracter.match(/[a-z]/i)) {
            // Determina si el carácter es mayúscula o minúscula
            let codigo = texto.charCodeAt(i);
            let asciiOffset = (codigo >= 65 && codigo <= 90) ? 65 : 97;

        
            let nuevoCaracter = String.fromCharCode(((codigo - asciiOffset + desplazamiento) % 26) + asciiOffset);
            encriptado += nuevoCaracter;
        } else {
            // Si no es una letra, se añade tal cual
            encriptado += caracter;
        }
    }
    return encriptado;
}

function desencriptar(texto, desplazamiento) {
    // Desencriptar es simplemente encriptar con un desplazamiento negativo
    return encriptar(texto, -desplazamiento);
}

function encriptarTexto() {
    let texto = document.getElementById("inputText").value;
    let desplazamiento = parseInt(document.getElementById("shift").value);
    let resultado = encriptar(texto, desplazamiento);
    document.getElementById("outputText").value = resultado;
}

function desencriptarTexto() {
    let texto = document.getElementById("inputText").value;
    let desplazamiento = parseInt(document.getElementById("shift").value);
    let resultado = desencriptar(texto, desplazamiento);
    document.getElementById("outputText").value = resultado;
}
