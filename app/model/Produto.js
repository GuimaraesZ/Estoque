class Produto{

    constructor(nome,quantidade,valor){
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
    };
    
    getNome(){
        return this.nome;   
    }

    getQuantidade(){
        return this.quantidade;
    }

    getValor(){
        return this.valor;
    }

    
} 
module.exports = Produto;