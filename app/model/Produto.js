class Produto {
    constructor(marca, modelo, placa, cor) {
        this.marca = marca;
        this.modelo = modelo;
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
    descricao() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Placa: ${this.placa}, Cor: ${this.cor}`;
      }
    }
    
    module.exports = Produto;
