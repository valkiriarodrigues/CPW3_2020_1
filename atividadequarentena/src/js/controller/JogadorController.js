import jogadorDAO from '../model/dao/JogadorDAO'

export default class JogadorController {

    constructor() {
        this.jogadorDAO = new jogadorDAO();
    }

    recuperarJogadores() {
        return this.jogadorDAO.recuperarTodos();
    }


}
