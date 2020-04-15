import LojaController from '../controller/LojaController';

export default class LojaView {

    constructor() {
        this.lojaCtrl = new LojaController();
    }

    renderizarTabelaDeClientes() {
        let clientes = this.lojaCtrl.recuperarClientes();

        let tabela = document.createElement('table');

        let cabecalho = this.criarCabecalhoDaTabelaDeClientes();
        let corpo = this.criarCorpoDaTabelaDeClientes(clientes);

        tabela.insertAdjacentHTML('beforeend', cabecalho);
        tabela.insertAdjacentHTML('beforeend', corpo);

        document.getElementById('visualizacaoClientes').innerHTML = tabela;
    }

    criarCabecalhoDaTabelaDeClientes() {
        let cabecalho = `
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Tel</th>
                    <th>End.</th>
                </tr>
            </thead>
        `;

        return cabecalho;
    }

    criarCorpoDaTabelaDeClientes(clientes) {
        let corpo = '';
        clientes.forEach(cliente => {
            let clienteStr = `
                <tr>
                    <td>${cliente.nome}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.endereco}</td>
                </tr>
            `;

            corpo += clienteStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`;
        return tbody;
    }
}
