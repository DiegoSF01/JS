let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];


//1
console.log(fruits.join(', '));


//2
fruits[fruits.length - 1] = 'Pêra';
console.log(fruits);


//3
fruits.sort();
console.log(fruits);


//4
fruits.reverse();
console.log(fruits);


//6
let bigfruits = fruits.filter((valor) => {
    return valor.length > 4;
})

console.log(bigfruits);

//5
let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
]

cars.sort ( (a, b) => {return b.year - a.year})

console.log(cars);

//7
let fruitsevery = fruits.every((value) => {
    return value.length > 3;
});

if (fruitsevery){
    console.log("Todos tem mais de 3 caracteres!");
} else{
    console.log("Nem todos tem mais de 3 caracteres!");
}

//8
let fruitssome = fruits.some((value) => {
    return value.length > 3;
});

if (fruitsevery){
    console.log("Todos tem mais de 3 caracteres!");
} else{
    console.log("Não tem nenhum com mais de 3 caracteres!");
}

//9
if (fruits.includes("Uva")){
    console.log("Tem uva!");
} else{
    console.log("Não tem uva!");
}


