function precoimovel(metros, quartos){
    let m2 = 3000;
    let preco = 0;

    switch(quartos){
        case 1:
            preco = metros * m2;
            break;
        case 2:
            preco = metros * (m2 * 1.2);
            break;
        case 3:
            preco = metros * (m2 * 1.5);
            break;
        default:
            console.log('Burro!');
            break;
    }

    return preco;
}

let metros = 123;
let quartos = 3;
let preco = precoimovel(metros, quartos);
console.log(`A casa custa R$ ${preco}`)