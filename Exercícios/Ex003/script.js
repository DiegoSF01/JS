function porcentagem(n1, n2){
    return (n2 / n1) * 100;
}

let n1 = 40;
let n2 = 10;
let resultado = porcentagem(n1, n2);
console.log(`${resultado}% de ${n1} é ${n2}`);