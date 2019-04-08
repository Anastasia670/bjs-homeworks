'use strict'
//ЗАДАНИЕ 2
class Weapon{
  constructor(name, attack, durability, range){
    this.name = name
    this.attack = attack
    this.durability = durability
    this.range = range
    this.firstDurability = this.durability
  }

 takeDamage(damage){

 if ((this.durability - damage) > 0){
  this.durability = this.durability - damage} 

  else  {
    this.durability = 0 }

   return this.durability
  }
   
  getDamage(){

if (this.durability >= this.firstDurability * 0.3) {
      return this.attack;

    } else if (this.durability === 0) {
      return 0;

    } else {
      return this.attack / 2;
    }
 
  }

  isBroken(){
    if (this.durability > 0) {
      return false
    }  
    else {
      return true
    }
  }
}

class Sword extends Weapon {
  constructor(){
    super ('Меч', 25, 500, 1)
  }
}

class Arm extends Weapon {
  constructor(){
    super ('Рука', 1, Infinity, 1)
  }
} 

class Bow extends Weapon {
  constructor(){
    super ('Лук',10, 200, ) 
        }
}

class Knife extends Weapon {
  constructor(){
    super ('Нож', 5, 300, 1)
  }
}

class Staff extends Weapon{
  constructor(){
    super ('Посох', 8, 300, 2)
  }
}

class LongBow extends Bow {
  constructor(name, attack, durability, range) {
    super(durability);
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor(name, attack, durability, range) {
    super(range);
    this.name = 'Секира';
    this.durability = 800;
    this.attack = 27;
    this.firstDurability = this.durability
    }
}

class StormStaff extends Staff {
  constructor(name, attack, durability, range) {
    super(durability);
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
    }  
}

const sword = new Sword ()
const arm = new Arm()
const bow = new Bow()
const knife = new Knife()
const staff = new Staff ()
const longBow = new LongBow() 
const axe = new Axe()
const stormStaff = new StormStaff () 

stormStaff.takeDamage(50);
console.log(stormStaff.durability);  
arm.takeDamage(10);
console.log(arm.durability); 
bow.takeDamage(119);
console.log(bow.firstDurability); 
console.log(bow.getDamage())
console.log(arm.isBroken())