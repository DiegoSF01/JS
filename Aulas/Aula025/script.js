class person{

    passos = 0;
    _age = 10;

    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    aumentarpassos(){
        this.passos++;
    }

    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }

    /*setage(newage){
        if(typeof newage == 'number'){
            this.age = newage;
        }
    }*/

    get age(){
        return this._age;
    }

    set age(x){
        if(typeof x == 'number'){
            this._age = x;
        }
    }
}

let p1 = new person('João', 'Silva');
let p2 = new person('Maria', 'Dalva');
let p3 = new person('Pedro', 'Biffe');

console.log(p1.firstname);
console.log(p1.fullname);

p1.aumentarpassos();
p1.aumentarpassos();
console.log(p1.passos);

//p1.setage(20);

p1.age = 20;
console.log(p1.age);