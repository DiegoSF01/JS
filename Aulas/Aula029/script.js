let char = new Mago('Diego');
let monster = new LittleMonster();

/*
console.log(char.name);
console.log(char.life);
console.log(char.attack);

console.log(monster.name);
console.log(monster.life);
console.log(monster.attack);
*/

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start();