
const secaoResposta = document.querySelector(".secao.resposta");
const resposta = secaoResposta.querySelector(".resposta__texto");
const imgResultado = secaoResposta.querySelector(".resultado_img");
const alerta = secaoResposta.querySelector(".resposta__alerta");
const subtexto = secaoResposta.querySelector(".resposta__subtexto");
const btnCopiarContainer = secaoResposta.querySelector(".conteudo__botao");


function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function btnEncriptar() {
    const texto = document.querySelector(".mensagem__texto").value; 
    if (!validarTexto(texto)) {
        alert("Por favor, insira apenas letras minúsculas sem acentos e sem caracteres especiais.");
        document.querySelector(".mensagem__texto").value = "";
        resposta.value = "";
        alterarVisibilidade(true);
        return;
    }
    const textoEncriptado = encriptar(texto);
    resposta.value = textoEncriptado;
    document.querySelector(".mensagem__texto").value = "";
    alterarVisibilidade(false);
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const texto = document.querySelector(".mensagem__texto").value;
    if (!validarTexto(texto)) {
        alert("Por favor, insira apenas letras minúsculas sem acentos e sem caracteres especiais.");
        document.querySelector(".mensagem__texto").value = "";
        resposta.value = "";
        alterarVisibilidade(true);
    }
    const textoDesencriptado = desencriptar(texto);
    resposta.value = textoDesencriptado;
    document.querySelector(".mensagem__texto").value = "";
    alterarVisibilidade(false);
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    const textoResposta = resposta.value;
    if (textoResposta === "") {
        alert("Não há texto para copiar.");
        return;
    }

    resposta.select();
    resposta.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.querySelector(".mensagem__texto").value = "";
    resposta.value = "";
    alterarVisibilidade(true); 

    alert("Texto copiado para a área de transferência!");
}

function alterarVisibilidade(mostrarTexto) {
    if (mostrarTexto) {
        
        resposta.className = "resposta__texto escondido";
        imgResultado.className = "resultado_img visivel";
        alerta.className = "resposta__alerta visivel";
        subtexto.className = "resposta__subtexto visivel";
        btnCopiarContainer.className = "conteudo__botao escondido";
    } else {
       
        resposta.className = "resposta__texto visivel";
        imgResultado.className = "resultado_img escondido";
        alerta.className = "resposta__alerta escondido";
        subtexto.className = "resposta__subtexto escondido";
        btnCopiarContainer.className = "conteudo__botao visivel";
    }
}
