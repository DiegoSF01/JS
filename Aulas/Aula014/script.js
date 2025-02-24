let personagem = {
    nome: 'Diego',
    idade: 18,
    pais: 'Brazil',
    logado: true,
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 70,
        defesa: 80,
        stamina: 20,
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} e mora no ${personagem.pais}`);
console.log(`Características: Força: ${personagem.caracteristicas.forca}; Defesa: ${personagem.caracteristicas.defesa}; Stamina: ${personagem.caracteristicas.stamina}`);
console.log(`Cor dos olhos: Direito: ${personagem.olhos[0]}; Esquerdo: ${personagem.olhos[1]}`);

personagem.nome = 'Julia';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('verde');

console.log(personagem.olhos);

let personagem2 = {
    nome: 'Josie',
    idade: 43,
    carros: [
        {modelo: 'Fiat', cor: 'Cinza'},
        {modelo: 'Fiat', cor: 'vermelho'}
    ]
}

console.log(personagem2.carros[1].modelo);