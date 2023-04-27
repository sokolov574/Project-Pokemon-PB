class AttackSkill { 
    constructor(name, damage, magicPoints) {
        this.name = name;
        this.damage = damage;
        this.magicPoints = magicPoints;
    }
};


class Pokemon {
    constructor (name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }

    learnAttackSkill(attackSkill) {
        this.skills.push(attackSkill);
    };
    
    
    showStatus() {
        console.log(`${this.name} has ${this.health} health and ${this.magic} magic.`)
    };
    
    
    attack(index, enemy) {
        const attackSkill = this.skills[index]
    
        if (attackSkill.magicPoints > this.magic) {
            console.log(`${this.name} can't use ${attackSkill.name} because they don't have enough magic`)
            return;
        }
    
        enemy.health -= attackSkill.damage;
        this.magic -= attackSkill.magicPoints;
    
        console.log(`${this.name} uses ${attackSkill.name} and deals ${attackSkill.damage} damage to ${enemy.name}`)
    
        if (enemy.health <= 0) {
            console.log(`${enemy.name} was defeated`)
        }
    };
    
    
    getMagic(points) {
        console.log(`${this.name} restores ${points} magic.`);
        this.magic += points;
    };
}

// Create two Pokemons
const pikachu = new Pokemon("Pikachu", 100, 50);
const charmander = new Pokemon("Charmander", 80, 70);
const vulpix = new Pokemon("Vulpix", 103, 116);
const psyduck = new Pokemon("Psyduck", 120, 127);

//Create winner
let winner;
if (pikachu.health <= 0) {
  winner = charmander;
} else if (charmander.health <= 0) {
  winner = pikachu;
} else {
  winner = null;
}

if (winner) {
  console.log(`The winner is ${winner.name}!`);
} else {
  console.log("It's a draw!");
}


// Pikachu learns two attack skills/////////////////////////////////////////////////////////////////////////
const thunderbolt = new AttackSkill("Thunderbolt", 20, 30);
const quickAttack = new AttackSkill("Quick Attack", 10, 15);
const thunderShock = new AttackSkill("Thunder Shock", 45, 48);
pikachu.learnAttackSkill(thunderbolt);
pikachu.learnAttackSkill(quickAttack);
pikachu.learnAttackSkill(thunderShock);

// Charmander learns two attack skills//////////////////////////////////////////////////////////////////////
const flameThrower = new AttackSkill("Flame Thrower", 25, 35);
const frustration = new AttackSkill("Frustration", 45, 55);
charmander.learnAttackSkill(flameThrower);
charmander.learnAttackSkill(frustration);

// Vulpix learns for attack skills///////////////////////////////////////////////////////////////////////
const ember = new AttackSkill("Ember", 18, 14);
const flameBall = new AttackSkill("Flame Ball", 50, 55);
const flameCharge = new AttackSkill("Flame Charge", 70, 90);
  vulpix.learnAttackSkill(ember);
  vulpix.learnAttackSkill(flameBall);
  vulpix.learnAttackSkill(flameCharge);

// Psyduck learns for attack skills///////////////////////////////////////////////////////////////////////
const waterGun = new AttackSkill("Water Gun", 13, 12);
const zenHeadbutt = new AttackSkill("Zen Headbutt", 40, 25);
const psybeam = new AttackSkill("Psybeam", 70, 85);
  psyduck.learnAttackSkill(waterGun);
  psyduck.learnAttackSkill(zenHeadbutt);
  psyduck.learnAttackSkill(psybeam);

// The battle begins
console.log("The battle begins!");
console.log("--------------------------------------");






// Pikachu attacks Charmander three times
pikachu.attack(0, charmander);
charmander.showStatus();
console.log("--------------------------------------");

pikachu.attack(2, charmander);
charmander.showStatus();
console.log("--------------------------------------");

pikachu.attack(0, charmander);
charmander.showStatus();
console.log("--------------------------------------");

// Charmander attacks Pikachu
charmander.attack(0, pikachu);
pikachu.showStatus();
console.log("--------------------------------------");

// Pikachu restores magic
pikachu.getMagic(20);
console.log("--------------------------------------");

// Charmander attacks Pikachu again
charmander.attack(0, pikachu);
pikachu.showStatus();
console.log("--------------------------------------");

// Charmander attacks Pikachu again
charmander.attack(0, pikachu);
pikachu.showStatus();
console.log("--------------------------------------");

// Pikachu restores magic
pikachu.getMagic(20);
console.log("--------------------------------------");

pikachu.attack(1, charmander);
charmander.showStatus();
console.log("--------------------------------------");


pikachu.attack(2, charmander);
charmander.showStatus();
console.log("--------------------------------------");

// Pikachu restores magic
pikachu.getMagic(20);
console.log("--------------------------------------");

pikachu.attack(2, charmander);
charmander.showStatus();
console.log("--------------------------------------");

pikachu.attack(1, charmander);
charmander.showStatus();
console.log("--------------------------------------");


// charmander.showStatus();
// pikachu.showStatus();



// Output the result of the battle
console.log("The battle is over!");












/* // Vlupix attacks Psyduck 
vulpix.attack(0, psyduck);
psyduck.showStatus();
console.log("--------------------------------------");

// Psyduck attacks Vlupix 
psyduck.attack(2, vulpix);
vulpix.showStatus();
console.log("--------------------------------------");


// Vulpix restores magic
vulpix.getMagic(20);
vulpix.showStatus()
console.log("--------------------------------------");

// Vlupix attacks Psyduck 
vulpix.attack(2, psyduck);
psyduck.showStatus();
console.log("--------------------------------------");


// Psyduck attacks Vlupix 
psyduck.attack(1, vulpix);
vulpix.showStatus();
console.log("--------------------------------------"); */