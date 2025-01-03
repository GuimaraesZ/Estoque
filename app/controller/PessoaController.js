const Pessoa = require("../model/Pessoa");
const readline = require('readline');

class PessoaController {
  // Atribui 'duvida' como propriedade da classe
  duvida = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Função para perguntar o nome
  perguntarNome() {
    this.duvida.question("Qual é o seu nome? ", (nome) => {
      // Formatar o nome para que a primeira letra seja maiúscula
      nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

      // Perguntar a idade após o nome
      this.perguntarIdade(nome);
    });
  }

  // Função para perguntar a idade
  perguntarIdade(nome) {
    this.duvida.question("Quantos anos você tem? ", (idade) => {
      idade = parseInt(idade);  // A idade é convertida de string para número com parseInt(), e caso não seja um número válido.
      if (isNaN(idade)) { // Caso não seja um número válido, é tratado com isNaN() e o código repete a pergunta até a idade ser válida.
        console.log("Por favor, insira uma idade válida.");
        this.perguntarIdade(nome);  // Repete a pergunta se a idade for inválida
      } else {
        // Se a idade for válida, chama a função de perguntar o gênero
        this.perguntarGenero(nome, idade);
      }
    });
  }

  // Função para perguntar o gênero
  perguntarGenero(nome, idade) {
    this.duvida.question("Seu gênero é Masculino ou Feminino? ", (genero) => {
      // Verifica se o gênero é válido
      if (genero === "Masculino" || genero === "masculino") {
        console.log("Gênero:", "Masculino");
        // Perguntar cidade após o gênero
        this.perguntarCidade(nome, idade, "Masculino");  // Passa nome, idade e gênero para a próxima função
      } else if (genero === "Feminino" || genero === "feminino") {
        console.log("Gênero:", "Feminino");
        // Perguntar cidade após o gênero
        this.perguntarCidade(nome, idade, "Feminino");  // Passa nome, idade e gênero para a próxima função
      } else {
        console.log("Erro: Gênero inválido. Por favor, digite 'Masculino' ou 'Feminino'.");
        this.perguntarGenero(nome, idade);  // Repete a pergunta até o gênero ser válido
      }
    });
  }

  // Função para perguntar a cidade
  perguntarCidade(nome, idade, genero) {
    this.duvida.question("Onde você mora? ", (cidade) => {
      // Formatar o nome da cidade para que a primeira letra seja maiúscula
      cidade = cidade.charAt(0).toUpperCase() + cidade.slice(1).toLowerCase();

      // Perguntar profissão após a cidade
      this.perguntarProfissao(nome, idade, genero, cidade);  // Passa nome, idade, gênero e cidade para a próxima função
    });
  }

  // Função para perguntar a profissão
  perguntarProfissao(nome, idade, genero, cidade) {
    console.log("\nEscolha a sua profissão:");
    console.log("1 - Desenvolvedor Jr");
    console.log("2 - Desenvolvedor Pleno");
    console.log("3 - Desenvolvedor Senior");
    console.log("4 - Gerente de Arquitetura");
    console.log("5 - Assistente de TI");
    console.log("6 - Estagiário de TI");
    console.log("7 - Porteiro");
    console.log("8 - Segurança");
    console.log("9 - Recursos Humanos (RH)");
    console.log("10 - QA");

    this.duvida.question("\nDigite o número da profissão: ", (opcao) => {
      let profissao = "";
      // Utilizando o switch/case para definir a profissão por número
      switch (opcao) {
        case "1":
          profissao = "Desenvolvedor Jr";
          break;
        case "2":
          profissao = "Desenvolvedor Pleno";
          break;
        case "3":
          profissao = "Desenvolvedor Senior";
          break;
        case "4":
          profissao = "Gerente de Arquitetura";
          break;
        case "5":
          profissao = "Assistente de TI";
          break;
        case "6":
          profissao = "Estagiário de TI";
          break;
        case "7":
          profissao = "Porteiro";
          break;
        case "8":
          profissao = "Segurança";
          break;
        case "9":
          profissao = "Recursos Humanos (RH)";
          break;
        case "10":
          profissao = "QA";
          break;
        default:
          console.log("Opção inválida. Por favor, selecione um número entre 1 e 10.");
          return this.perguntarProfissao(nome, idade, genero, cidade);  // Repete a pergunta caso seja uma entrada inválida
      }
      // Chama a função continuar com a profissão selecionada
      this.continuar(nome, idade, genero, cidade, profissao);
    });
  }

  // Função para continuar o fluxo e criar a pessoa
  continuar(nome, idade, genero, cidade, funcao) {
    const pessoa = new Pessoa(nome, idade, genero, cidade, funcao);  // Cria a Pessoa com todos os dados coletados pelo usuário
    console.log(pessoa.descricao());  // Imprime a descrição
    this.duvida.close();
  }
}

// Criar uma instância do controller e iniciar o fluxo
const pessoaController = new PessoaController();
pessoaController.perguntarNome();

module.exports = PessoaController;