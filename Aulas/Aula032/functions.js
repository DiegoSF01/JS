const Heroi = {
    name: '',
    life: 1,
    maxlife: 1,
    attack: 0,
    defense: 0
}

const Cavaleiro = (name) =>{
    return{
        ...Heroi,
        name,
        life: 100,
        maxlife: 100,
        attack: 10,
        defense: 8
    }
}

const Mago = (name) =>{
    return{
        ...Heroi,
        name,
        life: 80,
        maxlife: 80,
        attack: 15,
        defense: 5
    }
}

const Monsters = {
    name: '',
    life: 1,
    maxlife: 1,
    attack: 0,
    defense: 0
}

const LittleMonster = (name) => {
    
}