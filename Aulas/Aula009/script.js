function maiordeidade(idade){
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}

let idade = 6;
let verificacao = maiordeidade(idade);

if (verificacao){
    console.log('É maior de idade');
} else{
    console.log('É menor de idade');
}