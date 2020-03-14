import Cliente from '../entity/Cliente';
import * as db from '../../db/loja.json';

export default class ClienteDAO {

    recuperarTodos() {
        let clientes =
            db.clientes.map(
                cliente => new Cliente(
                    cliente.nome_cliente,
                    cliente.cpf,
                    cliente.endereco,
                    cliente.telefone));

        return clientes;
    }
}