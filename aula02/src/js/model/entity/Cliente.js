export default class Cliente {

    constructor(nome, cpf, endereco, telefone) {
        Object.assign(this, { cpf, telefone, nome, endereco });
    }
}