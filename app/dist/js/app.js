import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Not possible to start application.Please verify if 'form' exists.");
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw Error("Button 'import' not found.");
}
//# sourceMappingURL=app.js.map