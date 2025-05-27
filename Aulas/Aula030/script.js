function createPerson(name, lastname, age){
    return{
        name,
        lastname,
        age,
        FullName() {
            return `${this.name} ${this.lastname}`;
        }
    }
}

let person1 = createPerson('Diego', 'Furlanetto', 18);

console.log(person1.name);
console.log(person1.FullName());