class person{
    
    static maos = 2;
    age = 0;

    constructor(name){
        this.name = name;
    }

    static sayHiS(){
        console.log(`${this.name} diz oi, ${this.name} tem ${person.maos} mãos.`);
    }

    sayHi(){
        console.log(`${this.name} diz oi, ${this.name} tem ${person.maos} mãos.`);
    }
}

let p1 = new person('Diego');

person.sayHiS();

p1.sayHi();