let idade = 18;

if (idade > 17){
    console.log('Você é maior de idade!');
}
else{
    console.log('Você é menor de idade!');
}

idade = '18';

if(idade === 18){
    console.log(`Você tem ${idade} anos!`)
}
else if(idade == 18){
    console.log(`Você tem ${idade}!`)
}

idade = 80;

/*
if (idade >= 18){
    if(idade < 60){
        console.log('Você é adulto');
    }
}
*/

if (idade >= 18 && idade < 60){
    console.log('Você é adulto!');
}
else if (idade < 18 || idade >= 60){
    console.log('Você não é um adulto!');
}

idade = 36;

let maiorOUmenor = idade >= 18 && idade < 60;

if(maiorOUmenor){
    console.log('Adulto!')
}
else (
    console.log('Não é adulto!')
)