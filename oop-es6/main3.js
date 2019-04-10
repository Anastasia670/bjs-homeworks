'use strict'  
class StudentLog {
  constructor(name) {
    this.name = name
    this.marks = {} 
    
  }
  getName() {
    return this.name    
  }
addGrade( grade, subject ){
   if (this.marks[subject] === undefined){
   this.marks[subject] = [];
        };  
  if (grade > 5 || grade < 1 || isNaN (parseInt(grade)))  {
    console.log (`Вы пытались поставить оценку ${grade} по предмету ${subject} Допустимый предел: 0-5`)
  }
  else{
    this.marks[subject].push(grade);
          }
    return this.marks[subject].length;
 }

 getAverageBySubject( subject ){
   if (this.marks[subject] === undefined) {
   return 0
 } else{
   let sum = 0
   for (let i = 0; i < this.marks[subject].length; i ++){
    sum += this.marks[subject][i] 
   }
   let average = sum / this.marks[subject].length;
   return average    
    }
 }
getTotalAverage(){
 if (this.marks === undefined) {
   return 0
 } else{
let total = 0
let average = 0
for(let value in this.marks) {  
  total += this.getAverageBySubject( value )
 }
  return total / Object.keys(this.marks).length
 }
 
}
  }
const log = new StudentLog( 'Игорь Иванов' );
console.log( log.getName() );
console.log( log.addGrade( 5, 'algebra'));
console.log( log.addGrade( 3, 'algebra'));
console.log( log.addGrade( 4, 'english'))
console.log( log.getAverageBySubject( 'algebra' ));
console.log (log.getTotalAverage())