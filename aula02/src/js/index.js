import LojaView from "./view/LojaView";

let view = new LojaView();

//o evento onload é invocado automaticamente qnd a pg é carregada.
window.onload = () => view.renderizarTabelaClientes();