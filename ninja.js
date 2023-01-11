class Ninja { 
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`${this.name}`)
    }

    showStats(){
        console.log(`${this.name} has ${this.speed} speed, ${this.strength} strength , and ${this.health} health.`)
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name,200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log(`${this.name} Says man cannot remake himself without suffering for he is both the marble and sculptor.`)
    }
}

const oldman = new Sensei("Jacobian")
oldman.sayName();
oldman.showStats();
oldman.speakWisdom();
oldman.showStats();





const ninja1 = new Ninja("Carson",100);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
