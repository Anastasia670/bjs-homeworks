

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
    "use strict"

let diskriminant = (b ** 2) - (4 * a * c);

let x;
let x1;
let x2;
let d = Math.sqrt(diskriminant)

if (diskriminant < 0) {
  console.log("Корней уравнения нет");
} else if (diskriminant = 0) {
  x = (-b) / (2 * a);
  console.log('Корень уравнения= ' + x)
} else {
  x1 = (-b + d) / 2 * a;
  x2 = (-b - d) / 2 * a;
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

switch (true) {
case age > 18: 
  result = `Не желаете ли олд-фэшн, ${name}?`;
  break;
default:
 result=`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
 break;
}
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
а затем длина массива обрезается до 5-ти*/
   console.log(marks.length);
   if (marks.length > 5) {
      console.log(`У ученика ${marks.length} оценок`)  
      marks.length = 5  
   }

let sum = 0;
for(i = 0; i < marks.length; i++){
    sum +=marks[i];
    }

let averageMark = sum/marks.length
console.log(averageMark)

return averageMark
}