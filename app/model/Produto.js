class Produto {
    constructor(marca, modelo, placa, cor) {
        this.nome = marca;
        this.quantidade = modelo;
        this.placa = placa
        this.cor = cor;
    }
    getNome() {
        return this.marca;
    }
    getQuantidade() {
        return this.modelo;
    }
    getCor() {
        return this.placa;
    }
    getCor() {
        return this.cor;
    }
    descricao(){
        return `Seu carro é: "${this.marca}\n
        O Modelo é: ${this.modelo}\n 
        A placa do carro é: ${this.placa};
        A cor é: ${this.cor}`;      
    }

}

module.exports = Produto;
