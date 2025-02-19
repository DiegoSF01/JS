let x = 0;

x = x + 2;

console.log(x);

x = (x * 10) / 2;

console.log(x);

let y = 3;
let z = 9;

x = ((y + z - x) / 2);

console.log(x);

let nome = 'Diego';
let sobrenome = 'de Souza Furlanetto'

console.log('Prazer, ' + nome + ' ' + sobrenome);

// `${}` me permite escrever a vontade sem ter que usar o espaço entre as 2 variaveis como no exemplo a cima 
let nomecompleto = `${nome} ${sobrenome}`;
console.log('Nome: ' + nomecompleto)

let idade = 18;

let idadestring = `Idade: ${idade + 2} anos`;
console.log(idadestring);