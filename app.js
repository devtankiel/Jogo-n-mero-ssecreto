// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secereto.';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';
let listaNumeroSorteados = [];
let quantidadeDeNumeroSecreto = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

// função com parâmetro, mas sem retorno
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoisce.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTexto() {
  exibirTextoNaTela('h1', 'Jogo do número secreto.');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
  
}

exibirTexto();

// função sem parâmetro e sem retorno
function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
    else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor.');
      }
        else {
          exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limpeCampo();
    }
}

// função sem parâmetro, mas retorna varlor
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * quantidadeDeNumeroSecreto + 1);
  let quantidadeDeElementosNaLista = listaNumeroSorteados.length;
  if(quantidadeDeElementosNaLista == 10) {
    listaNumeroSorteados = [];
  }
  if(listaNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumeroSorteados.push(numeroEscolhido);
    console.log(listaNumeroSorteados);
    return numeroEscolhido;
  }
}

function limpeCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limpeCampo();
  tentativas = 1;
  exibirTexto();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}