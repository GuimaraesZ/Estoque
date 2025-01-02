const Produto = require("../model/Produto");
const readline = require("readline");

const duvida = readline.createInterface({
input: process.stdin,
output: process.stdout
});
function perguntarMarca() {
    duvida.question("Qual marca do seu carro?: ", (marca) =>{
     
      marca = marca.charAt(0).toUpperCase() + marca.slice(1).toLowerCase();
      // Perguntar a idade após o nome
      perguntarIdade(marca);
    });
  }
  function perguntarModelo() {
    duvida.question("Qual modelo do seu carro?: ", (modelo) =>{
     
      modelo = modelo.charAt(0).toUpperCase() + modelo.slice(1).toLowerCase();
      // Perguntar o modelo do carro
      perguntarIdade(modelo);
    });
    function perguntarPlaca(placa) {
        duvida.question("Digite os ultimos dois numeros da placa do seu carro: ", (placa) => {
          placa = parseInt(placa);  // Converte  o numero da placa de string para número com parseInt()
          if (isNaN(placa)) { // Verifica se os numeros da placa são válidos
            console.log("Por favor, insira os dois numeros válido.");
            perguntarIdade(placa);  // Repete a pergunta se o numero da placa for inválida
          } else {
            
            perguntarGenero(marca, modelo,placa);
          }
        });
      }
      function perguntarCor() {
        duvida.question("Qual a cor do carro: ", (cor) =>{  
          cor = cor.charAt(0).toUpperCase() + cor.slice(1).toLowerCase();
          
          perguntarIdade(cor); 
          console.log("A cor do seu carro é ${cor}");
             duvida.close()      
      });
         
         modelo = modelo.charAt(0).toUpperCase() + modelo.slice(1).toLowerCase();
          
          perguntarIdade(modelo);
        });
 

    





 
 



