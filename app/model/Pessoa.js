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

}


module.exports = Pessoa;
