class person{
    age = 0;

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`${this.name} diz oi!`);
    }
}

class student extends person{
    constructor(name, id){
        super(name);
        this.id = id;
    }

    sayHi(){
        console.log(`${this.name} é um estudante e diz oi!`);
    }

    sayhello(){
        super.sayHi();
    }
}

let p1 = new student('Diego', 1);
p1.age = 20;

console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}`);

p1.sayHi();

p1.sayhello();