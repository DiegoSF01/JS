function gravidade(){
    console.log('A gravidade do planeto é: ');
    console.log(9.8);
}

gravidade();



function somar(n1, n2){
    let resultado = n1 + n2
    console.log(`Resultado: ${resultado}`);
}

somar(10, 15);



function nomecompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

let completo = nomecompleto('Diego', 'de Souza Furlanetto');
console.log(completo);