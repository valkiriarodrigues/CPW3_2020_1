//view pega dados da tela, e devolve a resposta pra tela, um éxemplo é um formulario]

import Pessoa from '../model/Pessoa'; //sai da pasta view e entra na pasta model
import PessoaController from '../controller/PessoaController'; // ../ sai da pasta que vc esta

export  default class PessoaView{

    constructor(){
        this.controller = new PessoaController();
        this.$ = document.querySelector.bind(document);  //seletor de elementos da pagina (o $ deixa o codigo mais enxuto)
    }

    calcularIMC(){ //pega os valores de peso e altura do formulario
        
         let peso = this.$('#peso').value; //isso é um id de um elemnto do body(#peso)
         let altura = this.$('#altura').value; //isso é um id de um elemnto do body(#altura)


         let pessoa = new Pessoa(peso, altura); // instancia o objeto de pessoa


         let imc = this.controller.calcularIMC(pessoa);//invoca o controller para calcular o valor do imc da paessoa
         this.exibirIMC(imc); //  exibi o imc na tela

    }

    exibirIMC(imc){
        let resultado = `o seu imc é de ${imc.toFixed(1)}` // esse 1 é a casa decimal
        this.$('#resultado').innerText = resultado; // exibir o texto dentro do span do hatml
    }
}