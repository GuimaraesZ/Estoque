// controllers/EstoqueController.js
const PessoaController = require("./PessoaController");

class EstoqueController {
  iniciar() {
    // Cria uma instância do PessoaController
    const pessoaController = new PessoaController();
    
    // Inicia o fluxo de perguntas
    pessoaController.perguntarNome();
  }
}

module.exports = EstoqueController;
