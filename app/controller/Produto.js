const Produto = require("../model/Produto");
const readline = require("readline");

const duvida = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de marcas e modelos
const marcasModelos = {
  Volkswagen: ["Gol", "Fusca","Fox", "Cross Fox","Space Fox", "Polo", "Passat", "Jetta"],
  Ford: ["Fiesta", "Fusion", "Ford Ka", "Ford Focus", "EcoSport"],
  Fiat: ["Fiat Uno", "Palio", "Fiat Toro", "Argo", "Fiat Mobi"],
  Hyundai: ["HB20", "Creta", "Elantra", "Santa Fe", "Tucson"],
  Toyota: ["Corolla", "Hilux", "Etios", "Yaris", "RAV4"],
  Honda: ["Civic", "HR-V", "Fit", "CR-V", "City"],
  Nissan: ["Kicks", "Versa", "Frontier", "Sentra", "Altima"],
  Renault: ["Sandero", "Logan", "Captur", "Kwid", "Duster"]
};

function perguntarMarca() {
  duvida.question("Qual marca do seu carro? (Volkswagen, Ford, Fiat, Hyundai, Toyota, Honda, Nissan, Renault): ", (marca) => {
    marca = marca.charAt(0).toUpperCase() + marca.slice(1).toLowerCase();
    // Verifica se a marca está na lista
    if (marcasModelos[marca]) {
      // Perguntar o modelo do carro após a marca
      perguntarModelo(marca);
    } else {
      console.log("Marca não reconhecida. Por favor, escolha uma das marcas listadas.");
      perguntarMarca(); // Repete a pergunta se a marca não for válida
    }
  });
}

function perguntarModelo(marca) {
  console.log(`Escolha o modelo do seu carro entre as opções abaixo:`);
  marcasModelos[marca].forEach((modelo, index) => {
    console.log(`${index + 1} - ${modelo}`);
  });
  
  duvida.question("Qual modelo do seu carro? (Digite o número correspondente): ", (numero) => {
    const modeloIndex = parseInt(numero) - 1;
    if (modeloIndex >= 0 && modeloIndex < marcasModelos[marca].length) {
      const modelo = marcasModelos[marca][modeloIndex];
      // Perguntar a placa após o modelo
      perguntarPlaca(marca, modelo);
    } else {
      console.log("Opção inválida. Tente novamente.");
      perguntarModelo(marca); // Repete a pergunta se o número do modelo for inválido
    }
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

// inicia a perguta
perguntarMarca();
