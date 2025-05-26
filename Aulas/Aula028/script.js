class person{

    age = 0;

    constructor(name){
        this.name = name;
    }
}

function createPerson(name, age){
    let p = new person(name);
    p.age = age;
    return p;
}

let p1 = createPerson('Diego', 18);

console.log(`${p1.name} tem ${p1.age} anos`);