export  default class Pessoa { //nome da classe tem q ser o mesmo nome do arquivo. export esta exportando ele, não precisa esportar no js, usar a palavra export antes da palavra classe

    constructor (peso, altura){ //obrigatoriamente informar peso e altura
        //this é uma caracteristica para algo especifico
        this.peso = peso;
        this.altura = altura;
    }

} 