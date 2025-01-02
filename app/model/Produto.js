class Produto {
    constructor(nome, quantidade, valor, cor) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.cor = cor;
    }

    getNome() {
        return this.nome;
    }

    getQuantidade() {
        return this.quantidade;
    }

    getValor() {
        return this.valor;    
    }
    getCor() {
        return this.cor;
    }
    descricao(){
        return `Seu carro é: "${this.nome}\n
        O valor é: R$${this.valor}\n 
        A quantidade é: ${this.quantidade}\n 
        A cor é:${this.cor}`;      
    }

    formataValor(valor){  
        return "R$ " + valor;
    }
}

module.exports = Produto;
