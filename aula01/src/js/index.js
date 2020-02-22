import PessoaView from './view/PessoaView'; // ./ acessa um vizinho seu

let view = new PessoaView(); //cria um objeto





//criando a função aoCalcular q sera atrelada a submissao do formulario
window.aoCalcularIMC = event => {
    event.preventDefault(); // evita que a pagina se recarregue automaticamente
    view.calcularIMC();
}