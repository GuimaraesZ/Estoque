class Pessoa {
  constructor(nome, idade, genero, cidade, funcao) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.cidade = cidade;
    this.funcao = funcao;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  getGenero() {
    return this.genero;
  }

  getCidade() {
    return this.cidade;
  }

  getFuncao() {
    return this.funcao;
  }

  descricao() {
    return `Nome: ${this.nome}\nIdade: ${this.idade}\nGênero: ${this.genero}\nCidade: ${this.cidade}\nFunção: ${this.funcao}`;

  }

  verificaIdade() {
    if (this.idade < 18) {
      return "Menor de idade";
    } else if (this.idade >= 18 && this.idade <= 60) {
      return "Adulto";
    } else {
      return "Idoso";
    }
  }

}


module.exports = Pessoa;
