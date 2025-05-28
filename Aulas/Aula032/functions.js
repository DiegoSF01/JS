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

const LittleMonster = () => {
        return{
        ...Monsters,
        name: 'Little Monster',
        life: 40,
        maxlife: 40,
        attack: 4,
        defense: 4
    }
}

const BigMonster = () => {
    return{
        ...Monsters,
        name: 'Big Monster',
        life: 120,
        maxlife: 120,
        attack: 8,
        defense: 8
    }
}

const Stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.update();
        
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    },

    update(){
        //Fight 1
        this.fighter1El.querySelector('.name').innerText = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;

        let f1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;


        //Fight 2
        this.fighter2El.querySelector('.name').innerText = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0){
            Log.addMessage('Atacando cachorro morto');
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const actualAttack = attacking.attack * attackFactor;
        
        const defenseFactor = (Math.random() * 2).toFixed(2);
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            Log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(1)} de dano em ${attacked.name}`);
        }else{
            Log.addMessage(`${attacked.name} conseguiu defender...`)
        }

        this.update();
    }
}

const Log = {
    list: [],

    addMessage(msg){
        this.list.push(msg);
        this.render();
    },

    render(){
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for(let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}