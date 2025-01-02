const Produto = require("../model/Produto");
const readline = require("readline");

const duvida = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntarMarca() {
  duvida.question("Qual marca do seu carro?: ", (marca) => {
    marca = marca.charAt(0).toUpperCase() + marca.slice(1).toLowerCase();
    // Perguntar o modelo do carro após a marca
    perguntarModelo(marca);
  });
}

function perguntarModelo(marca) {
  duvida.question("Qual modelo do seu carro?: ", (modelo) => {
    modelo = modelo.charAt(0).toUpperCase() + modelo.slice(1).toLowerCase();
    // Perguntar a placa após o modelo
    perguntarPlaca(marca, modelo);
  });
}

function perguntarPlaca(marca, modelo) {
  duvida.question("Digite os últimos dois números da placa do seu carro: ", (placa) => {
    // Verifica se a placa tem exatamente dois números
    if (/^\d{2}$/.test(placa)) {
      placa = parseInt(placa);  // Converte o número da placa de string para número com parseInt()
      // Perguntar a cor após a placa
      perguntarCor(marca, modelo, placa);
    } else {
      console.log("Por favor, insira exatamente dois números para a placa.");
      perguntarPlaca(marca, modelo);  // Repete a pergunta se a placa não for válida
    }
  });
}

function perguntarCor(marca, modelo, placa) {
  duvida.question("Qual a cor do carro?: ", (cor) => {
    cor = cor.charAt(0).toUpperCase() + cor.slice(1).toLowerCase();
    // Chama a função continuar para criar e mostrar a descrição do produto
    continuar(marca, modelo, placa, cor);
  });
}

function continuar(marca, modelo, placa, cor) {
  // Cria o Produto com os dados coletados
  const produto = new Produto(marca, modelo, placa, cor);
  
  // Imprime a descrição do produto
  console.log(produto.descricao());
  
  // Fecha a interface de leitura
  duvida.close();
}

// Inicia o processo perguntando pela marca
perguntarMarca();
