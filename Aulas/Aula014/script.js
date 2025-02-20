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