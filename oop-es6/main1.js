'use strict'
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

const arm = new Weapon ('Рука', 1, Infinity, 1)
const bow = new Weapon ('Лук', 10, 200, 3)
const sword = new Weapon ('Меч', 25, 500, 1)
const staff = new Weapon ('Посох', 8, 300, 2)
const longBow = new Weapon ('Длинный лук', 15, bow.durability, 4)
const axe = new Weapon ('Секира', 27, 800, sword.range)
const stormStaff = new Weapon ('Посох Бури', 15, staff.durability, 4)

sword.takeDamage(50);
console.log(sword.durability);  
arm.takeDamage(10);
console.log(arm.durability); 
bow.takeDamage(119);
console.log(bow.firstDurability); 
console.log(bow.getDamage())
console.log(arm.isBroken())