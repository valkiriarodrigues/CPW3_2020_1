

export default class Cliente {
    constructor(nome, cpf, endereco, telefone){
        Object.assign(this, {nome, cpf, endereco, telefone});
        /**
         * isso é a mesma caisa que 
         * this.nome= nome,
         * this.cpf=cpf,
         * this.endereco=endereco,
         * this.telefone=telefone,
         * 
         */
    }
}