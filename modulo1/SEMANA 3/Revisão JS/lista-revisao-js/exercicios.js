// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

   return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
    return array.sort(function (a , b) {return a-b});

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
return array.sort(function (a , b) {return a-b});

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
let arrayPares = []

for (const i of array){

if (i % 2 === 0)
arrayPares.push(i)

}
return arrayPares


}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = []

    for (const i of array){
    if (i % 2 === 0)
    arrayPares.push(i*i)

    } return arrayPares

    
} 

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
 
    return array.reduce(function(a,b){
        return Math.max(a,b);})
        


}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let numeroMaior = undefined;
    let numeroMenor = undefined;
    let maiorDivisivelPorMenor = undefined;
    let diferenca = undefined;
    //{"maiorNumero":30,"maiorDivisivelPorMenor":true,"diferenca":15}

    if (num1 > num2) {
        numeroMaior = num1;
        numeroMenor = num2
    } else {
        numeroMaior = num2;
        numeroMenor = num1
    }

    if (numeroMaior % numeroMenor === 0){
        maiorDivisivelPorMenor = true;
    } else {
        maiorDivisivelPorMenor = false;
    }

    diferenca = numeroMaior - numeroMenor

    return {"maiorNumero":numeroMaior,"maiorDivisivelPorMenor":maiorDivisivelPorMenor,"diferenca":diferenca}



}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
     
   
        let numerosPares = []
    
        for(let i = 0; numerosPares.length < n; i++){
        if (i % 2 === 0){
            numerosPares.push(i)
        }
    
        }
        return numerosPares
    
    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC & ladoC === ladoA){
        return "Equilátero"
    }
     else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
         return "Escaleno"
     }
      else { return "Isósceles"}
    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    array.sort(function (a, b) {
        return a - b
    })

    let menor = array[1];
    let maior = array[array.length-2];
    array = [maior, menor]

    return array

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.` 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let objeto = {...pessoa}

    return {
    'nome': "ANÔNIMO",
    'idade': objeto.idade,
    'email': objeto.email,
    'endereco': objeto.endereco
    } 
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}