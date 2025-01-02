const Produto = require("../model/Produto");
const readline = require("readline");

const duvida = readline.createInterface({
input: process.stdin,
output: process.stdout
});

duvida.question("Qual seu carro?: ", (nome) =>{
    duvida.question("Qual a quantidade de carro?: ", (quantidade)=>{
        duvida.question("Qual valor a ser pago?: ", (valor) =>{
            duvida.question("Qual a cor do carro: ", (cor) =>{   
                console.log(`Seu carro é um ${nome}, a quantidade é ${quantidade}, o valor é ${valor}, e sua cor é ${cor}`);
                   duvida.close()      
            });
                
        });
    }); 
    
});

    





 
 



