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

//5
let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
]

cars.sort ( (a, b) => {
    if(a.year > b.year){
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
})

console.log(cars);