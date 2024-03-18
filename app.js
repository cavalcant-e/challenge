

function limpar( ) {
  document.getElementById("textEntrada").value = "";
}

function criptografar() {

   texto = document.getElementById("textEntrada").value;
   let criptografar
   //verificar se letras minúsculas e sem acento

   if (/[A-ZÀ-ÖØ-öø-ÿ]/.test(texto)) {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
    return; 
  }
  
    criptografar = texto.replace(/e/g, "enter");
    criptografar = criptografar.replace(/i/g, "imes");
    criptografar = criptografar.replace(/a/g, "ai");
    criptografar = criptografar.replace(/o/g, "ober");
    criptografar = criptografar.replace(/u/g, "ufat");
  
    ocultarImagem();
    frase = "todo frank é gay!"
    document.getElementById("textSaida").value = frase

    criptografar = null
    limpar()
     
}

function descriptografar() {

  texto = document.getElementById("textEntrada").value;
  let descriptografar

    descriptografar = texto.replace(/ai/g, "a");
    descriptografar = descriptografar.replace(/enter/g, "e");
    descriptografar = descriptografar.replace(/imes/g, "i");
    descriptografar = descriptografar.replace(/ober/g, "o");
    descriptografar = descriptografar.replace(/ufat/g, "u")
  
    ocultarImagem();
    frase = "todo frank é gay!"
    document.getElementById("textSaida").value = frase

    descriptografar = null
    limpar()
    
}

function copiar() {

  navigator.clipboard.writeText(document.getElementById("textSaida").value);
  
  mostrarImagem()

}

function ocultarImagem () {

  var imagemSaida = document.getElementById("textSaida");
  imagemSaida.style.background = "none";
  
}

function mostrarImagem () {

  
  location.reload ()
 

}

// function exibirMensagemInicial() {
//     exibirTextoNaTela('textEntrada', document.querySelector('textEntrada').value;);
//     exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
// }





