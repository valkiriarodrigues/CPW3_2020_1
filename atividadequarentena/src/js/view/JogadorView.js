import JogadorController from  '../controller/JogadorController';

export default class JogadorView {

    constructor() {
        this.jogadorCtrl = new JogadorController();
    }

    renderizarTabelaDeJogadores() {
        let jogadores = this.jogadorCtrl.recuperarjogadores();

        let cabecalho = this.criarCabecalhoDaTabelaDeJogadores();
        let corpo = this.criarCorpoDaTabelaDeJogadores(jogadores);

        let tabela = `<table>${cabecalho}${corpo}</table> `

        document.getElementById('texto').innerHTML = tabela;
    }

    criarCabecalhoDaTabelaDeJogadores() {
        let cabecalho = `
            <thead>
                <tr>
                    <th>Time Campeão</th>
                    <th>Ano</th>
                    <th>Técnico</th>
                    <th>Time Derrotado</th>
                </tr>
            </thead>
        `;

        return cabecalho;
    }

    criarCorpoDaTabelaDeJogadores(jogadores) {
        let corpo = '';
        jogadores.forEach(jogador => {
            let jogadorStr = `
                <tr>
                    <td>${jogador.time_campeao}</td>
                    <td>${jogador.ano}</td>
                    <td>${jogador.tecnico}</td>
                    <td>${jogador.time_derrotado}</td>
                </tr>
            `;

            corpo += jogadorStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`;
        return tbody;
    }
}
