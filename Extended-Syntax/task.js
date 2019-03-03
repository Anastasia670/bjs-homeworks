
"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    
let diskriminant = (b ** 2) - (4 * a * c);
let x;
let x1;
let x2;
let sqtrDiskriminant = Math.sqrt(diskriminant)

if (diskriminant < 0) {
  x = null
  console.log("Корней уравнения нет");
} else if (diskriminant = 0) {
  x = (-b) / (2 * a);
  console.log('Корень уравнения= ' + x)
} else {
  x1 = (-b + sqtrDiskriminant) / 2 * a;
  x2 = (-b - sqtrDiskriminant) / 2 * a;
  x = [x1, x2]
  console.log('Корни уравнения ' + x);
}
return x
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
let now = new Date();
let age = now.getFullYear() - dateOfBirthday.getFullYear();
let result
if (age > 18){
  result = `Не желаете ли олд-фэшн, ${name}?`}
else {
  result =`Сожалею, ${name}, но я не могу вам продать алкоголь. 
Зато могу предложить вам замечательный клюквенный компот!`}
console.log(result);
return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
/*Проверка количества оценок, если оценок больше 5-ти, то выводится количество оценок у ученика
*/
   console.log(marks.length);
   if (marks.length > 5) {
      console.log(`У ученика ${marks.length} оценок`);  
         }
/*1-е 5 элементов массива копируются в новый массив*/
let newMarks = marks.splice(0, 5);
let sum = 0;
let newMark;
for(newMark of newMarks){
    sum +=newMark;
    }

let averageMark = sum/newMarks.length;
console.log(averageMark);

return averageMark
}