let char = Mago('Diego');
let monster = BigMonster();

console.log(char.name);
console.log(char.life);
console.log(char.attack);

console.log(monster.name);
console.log(monster.life);
console.log(monster.attack);

Stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
);