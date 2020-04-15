import Jogador from '../entity/Jogador'
import * as db from '../../db/jogador.json'

export default class JogadorDAO {

    recuperarTodos() {
        let jogadores =
            db.jogadores.map(
                jogador => new Jogador(
                    jogador.time_campeao,
                    jogador.ano,
                    jogador.tecnico,
                    jogador.time_derrotado));

        return jogadores;
    }
}