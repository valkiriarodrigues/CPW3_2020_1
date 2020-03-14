import LojaController from '../controller/LojaController';

export default class LojaView{
    constructor(){
        this.lojaCtrl = new LojaController();
    }

    renderizarTabelaClientes(){
        let clientes = this.lojaCtrl.recuperarClientes();

        let tabela = document.createElement('table');

        let cabecalho = this.criarCabecalhoTabelhaClientes();
        let corpo = this.criarCorpoTabelaClientes(clientes);

        tabela.insertAdjacentHTML('beforeend', cabecalho);
        tabela.insertAdjacentHTML('beforeend', corpo);

        document.getElementById('visualizacaoClientes').innerHTML = tabela;
    }

    criarCabecalhoTabelhaClientes(){
        let cabecalho = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Tel</th>
                <th>End.</th>
            </tr>
        </thead>
        `; // crase permite que cria um codig como string

        return cabecalho;

    }
    criarCorpoTabelaClientes(clientes){
        let corpo = '';
        clientes.forEach(cliente => {
            let clienteStr = `
            <tr>
                <td>${cliente.nome}</td>
                <td>${cliente.CPF}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.Endereco}</td>
            </tr>
            `;

            corpo += clienteStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`; //varialvel corpo dentro do tbody
        return tbody;
    }
}

