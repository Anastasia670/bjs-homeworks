'use strict'
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}



function checkBirthday(birthday) {
  
  let now = Date.parse(new Date())  
  birthday = Date.parse(birthday)

    const diff = now - birthday

    const age = diff / (365.25 * 24 * 60 * 60 * 1000)  

       return age >= 18

}
    


function initPrintAnimalSound() {    
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {

   const sound = animal.sound    
   return (animal = undefined)? null: sound
  }


function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
       for (let i = 0; i < marks.length; i++) {
       sum += parseInt(marks[i])
    }

    const average = sum / marks.length;
    const roundedAverage = Math.round(average)
    return roundedAverage
}

