export  default class PessoaController{

    //controlador, ele controla os dados, aqui vamos calcular o IMC
    calcularIMC(pessoa){
        const imc = pessoa.peso / Math.pow(pessoa.altura, 2); //calculando o peso dividido pela altura ao quadrado
        return imc;
    }
}

//const o valor vai variar boa pratica usar ela quando os valores vão variar, tipo peso 