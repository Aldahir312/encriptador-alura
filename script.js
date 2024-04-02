const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

function btnEncriptar() {
    const texto = encriptarTexto(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptarTexto(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    // Reemplazar cada vocal según las reglas
    const textoEncriptado = texto.split('').map(char => {
        if (vocales.includes(char)) {
            switch (char) {
                case 'a':
                    return 'ai';
                case 'e':
                    return 'enter';
                case 'i':
                    return 'imes';
                case 'o':
                    return 'ober';
                case 'u':
                    return 'ufat';
                default:
                    return char; // Si no es una vocal, mantener el carácter original
            }
        } else {
            return char; // Si no es una vocal, mantener el carácter original
        }
    }).join('');

    return textoEncriptado;
}

function btnDesencriptar() {
    const texto = desencriptarTexto(campo_texto.value);
    campo_mensaje.value = texto;
}

function desencriptarTexto(textoEncriptado) {
    const vowelMap = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Buscar y reemplazar cada combinación de letras según el mapa
    const textoDesenc = textoEncriptado.replace(/ai|enter|imes|ober|ufat/g, match => vowelMap[match] || match);

    return textoDesenc;
}