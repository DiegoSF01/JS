let pessoa = {
    nome: 'Diego',
    sobrenome: 'de Souza Furlanetto',
    idade: 18,
    nomecompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomecompleto());