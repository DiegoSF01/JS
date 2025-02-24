let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');
/*
for(let n = 0; n < cores.length; n++){
    console.log(cores[n]);
}
*/

/*
for (let i in cores) {
    console.log(cores[i]);
}
*/

for(let cor of cores) {
    console.log(cor);
}

let cores2 = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
]

/*
for (let i in cores2) {
    cores2[i].nome = cores2[i].nome.toUpperCase();
    console.log(cores2[i].nome);
}
*/

for (let cor of cores2) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}