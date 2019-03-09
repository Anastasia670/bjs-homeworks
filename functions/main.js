"use strict"

function getSolutions(a, b, c) {
  let D;
  D = b * b - 4 * a * c;
  let x1;
  let x2;

  if (D < 0) {
    return { D }
  } else if (D === 0) {
    x1 = -b / 2 * a;
    return {
      roots: [x1], D
    }
  } else {
    x1 = (-b + Math.sqrt(D)) / 2 * a;
    x2 = (-b - Math.sqrt(D)) / 2 * a;
    return {
      roots: [x1, x2], D
    }
  }
}

function showSolutionsMessage(a, b, c) {

  let result = getSolutions(a, b, c);
  console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
  console.log(`Значение Дискриминанта ${result.D}`);
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D === 0) {
    console.log(`Уравнение имеет ${result.roots.length} корень, x1 = ${result.roots} `);
  } else {
    console.log(`Уравнение имеет ${result.roots.length} корня. x1 = ${result.roots[0]}, x2= 
    ${result.roots[1]} `);
  }
} 

//Задача 2
//создаем функцию для проверки 1 или 0
function secretDataNumber(n) {
    if (n == 0) {
      return "Pодриго"
    } else if (n === 1) {
      return "Эмильо"
    }
  }
  //Возвращаем полученное значение.
function getPersonData(secretData) {
    return {
    firstName: secretDataNumber(secretData.aaa),
    lastName: secretDataNumber(secretData.bbb)

  }
}

console.log(getPersonData({
  aaa: 1,
  bbb: 1
}))

console.log(getPersonData({
  aaa: 0,
  bbb: 1
}))

console.log(getPersonData({
  aaa: 0,
  bbb: 1
}))

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}))

//Задача 3

//Передача объекта с оценками в функцию
getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physisc: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4],
})

//создаем объект для записи предмет-средняя оценка 
function getAverageScore(data) {
  let obj = {};
  let arr = [];  
  //создаем массив и переносим туда среднюю оценку
     for (key in data) {
    obj[key] = getAverageMarks(data[key]);     
    arr.push(getAverageMarks(data[key]));         
    }
  //считаем среднее по всем предметам   
  let total = 0;
    for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
 //добавляем среднее по всем предметам в объект и возвращием оъект
  let average = total/arr.length
  obj.average = total/arr.length
  return obj
 }
//функция подсчета среднего балла по предмету
function getAverageMarks(arrMarks) {
  let sum = 0;
  for (let i = 0; i < arrMarks.length; i++) {
    sum += arrMarks[i];
  }
  return sum / arrMarks.length;
};