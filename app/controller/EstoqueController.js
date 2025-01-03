// controllers/EstoqueController.js
const PessoaController = require("./PessoaController");

class EstoqueController {
  iniciar() {
    
    const pessoaController = new PessoaController();
  
    const perguntaNome = pessoaController.perguntarNome();
    
    if(perguntaNome){
      const perguntaIdade = pessoaController.perguntarIdade();
      if(perguntaIdade){
        const perguntaGenero = pessoaController.perguntarGenero();
        if(perguntaGenero){
          const perguntaCidade = pessoaController.perguntarCidade();
          if(perguntaCidade){
            const perguntaProfissao = pessoaController.perguntarProfissao();
            if(perguntaProfissao){
              const continuar = pessoaController.continuar();
              if(continuar){
                console.log("Fluxo finalizado com sucesso!");
              }
            }
          }
        }
      }
    }
  }
}

module.exports = EstoqueController;
