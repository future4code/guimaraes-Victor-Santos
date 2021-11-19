// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
  
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const area1 = prompt ("Digite a altura do retangulo")
  const area2 = prompt ("Digite a largura do retangulo")

  const calculaAreaRetangulo = area1 * area2

  console.log(calculaAreaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const idade = prompt ("Qual é o ano atual?")
  const idade2 = prompt ("Qual é o ano do seu nascimento?")

  const imprimeIdade = idade - idade2

  console.log(imprimeIdade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura, soma) {
  // implemente sua lógica aqui

  soma = peso / (altura * altura)
  return soma

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

const nome = prompt ('Qual é seu nome?')
let idade = prompt('Qual é a sua idade ?')
const email = prompt('Qual é o seu email ?')


  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("Qual e sua cor favorita?")
let cor2 = prompt("Qual a sua segunda cor favorita?")
let cor3 = prompt("Qual a sua terceira cor favorita ?")

const cores = [cor1, cor2, cor3]
console.log(cores)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let maiscula = string.toUpperCase()
return maiscula
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let valor = custo / valorIngresso
return valor

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let primeraString = string1.length
  let segundaString = string2.length

  return primeiraString == segundaString

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  var ultimoElemento = array[array.length - 1];
  return ultimoElemento 

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let reversao = array.move(1, 0)
  
  return reversao
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  let compare = string1.toUpperCase() === string2.toUpperCase();
  return compare
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}