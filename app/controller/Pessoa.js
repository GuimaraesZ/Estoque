const Pessoa = require("../model/Pessoa");
const readline = require('readline');

const duvida = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

duvida.question("Qual é o seu nome? ", (nome) => {

  // Função para perguntar a idade
  function perguntarIdade() {
    duvida.question("Quantos anos você tem? ", (idade) => {
      idade = parseInt(idade);  //A idade é convertida de string para número com parseInt(), e caso não seja um número válido.
      if (isNaN(idade)) { //Caso não seja um número válido, é tratado com isNaN() e o código repete a pergunta até a idade ser válida.
        console.log("Por favor, insira uma idade válida.");
        perguntarIdade();  // Repete a pergunta se a idade for inválida
      } else {
        // Se a idade for válida, chama a função de perguntar o gênero
        perguntarGenero(nome, idade);
      }
    });
  }

  // Função para perguntar o gênero
  function perguntarGenero(nome, idade) {
    duvida.question("Seu gênero é Masculino ou Feminino? ", (genero) => {

      // Verifica se o gênero é válido
      if (genero === "Masculino" || genero === "masculino") {
        console.log("Gênero:", "Masculino");
        continuar(nome, idade, genero);  // Passa o nome, idade e gênero para a próxima função
      } else if (genero === "Feminino" || genero === "feminino") {
        console.log("Gênero:", "Feminino");
        continuar(nome, idade, genero);  // Passa o nome, idade e gênero para a próxima função
      } else {
        console.log("Erro: Gênero inválido. Por favor, digite 'Masculino' ou 'Feminino'.");
        perguntarGenero(nome, idade);  // Chama novamente até o usuário acertar
      }
    });
  }

  // Função que continua o fluxo após o gênero ser validado
  function continuar(nome, idade, genero) {
    duvida.question("Onde você mora? ", (cidade) => {
      duvida.question("Qual é a sua profissão? ", (funcao) => {
        // Cria a Pessoa com todos os dados coletados pelo usuario
        const pessoa = new Pessoa(nome, idade, genero, cidade, funcao);
        console.log(pessoa.descricao());  // Imprime a descrição
        duvida.close();  
      });
    });
  }

  
  perguntarIdade();

});
