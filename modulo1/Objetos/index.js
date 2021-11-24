//Exercicio de interpretação de codigo.



/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) */


//Matheus Nachtergaele
// Virginia Cavendish
// Canal: Globo, horário: 14




//------------------------//--------------//




//Exerccio Leitura de codigo 2


/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */



//a). idade: 3
//nome: "Juca"
//raca: "SRD"

//idade: 3
//nome: "Juba"
//raca: "SRD"


//idade: 3
//nome: "Jubo"
//raca: "SRD"


//B) Ele copia e cola o que está no objeto cachorro, e troca no nome juca por juba.



//-------------//---------------//




//Exercicio 3 interpretação de codigo.


/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

//Resposta
//A) False, Undefined.
//B) Ele retornou o que estava dentro do objeto em backender, e undefined porque não tem a variavel "altura".




//-----------------------//-----------------------//




//Exercicio de escrita de codigo 1
//A.

/* const pessoa = {

nome: "Victor",
apelidos: ["Vitão", "Bigode", "Parasita"]

}

console.log("Eu sou", pessoa.nome, "mas pode me chamar de:", pessoa.apelidos[0], "ou", pessoa.apelidos[1])



const novaPessoa = {
...pessoa,
apelido: ["Feijão", "Farofa", "Traquilo"]

}
console.log(novaPessoa) */


//-------------------//-----------------//

//Exercicio 2 
 
/* const pessoa1 = {

    nome: "Victor",
    idade: 28,
    profissão: "Desenvolvedor"
},

const pessoa2 = {

nome: "Camila",
idade: 25,
profissão: "Desenvolvedora"

}


const frase = (parametro) => {

let array = [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissão, parametro.profissão.length]
return array

} 

console.log(frase(pessoa1)) */

 //---------------------------//----------------------//

 //Exercicio 3


/* let carrinho = []

const fruta = {

    nome: "Banana",
    disponibilidade: true


}


const fruta1 = {

    nome: "Abacaxi",
    disponibilidade: true
}


const fruta2 = {

nome: "Pêra",
disponibilidade: true

}

 
const sacolao = (frutas) => {
carrinho.push(frutas)
return(carrinho)

}

console.log("carrinho", sacolao(Banana))
console.log("carrinho", sacolao(Abacaxi))
console.log("carrinho", sacolao(Pêra)) */