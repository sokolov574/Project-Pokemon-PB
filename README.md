# Project-Pokemon-PB

Greetings, dear reader!

I would like to introduce you to a Pokemon battle simulator written in JavaScript. This program defines two classes, Pokemon and AttackSkill. The Pokemon class includes methods for learning skills, displaying the Pokemon's status, attacking another Pokemon, and restoring magic. The AttackSkill class acts as a blueprint for the attack skills that each Pokemon can learn.

The simulator also creates four Pokemon: Pikachu, Charmander, Vulpix, and Psyduck. Each Pokemon has a name, health, magic, and no skills initially. The Pokemon learn several attack skills by calling the learnAttackSkill method on the Pokemon instance with a new instance of the AttackSkill class as an argument.

Lastly, the simulator simulates a battle between Pikachu and Charmander by calling the attack and getMagic methods of each Pokemon instance. The battle ends when one of the Pokemon's health reaches 0, and the winner is printed to the console.

I hope you enjoy exploring this Pokemon battle simulator!