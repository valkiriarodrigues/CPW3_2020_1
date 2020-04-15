import JogadorDAO from '../model/dao/JogadorDAO'

export default class JogadorController {

    constructor() {
        this.jogadorDAO = new JogadorDAO();
    }

    recuperarJogadores() {
        return this.jogadorDAO.recuperarTodos();
    }


}
