class Character{

    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        this._life;
    }

    set life(newlife){
        this._life = newlife < 0 ? 0 : newlife;
    }
}

class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 0;
        this.defense = 8;
        this.maxlife = this.life;
    }
}