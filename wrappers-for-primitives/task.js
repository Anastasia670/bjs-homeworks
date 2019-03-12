"use strict"
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  //задаем сегодняшнюю дату
  let now = new Date();
  //считаем количество месяцев от сегодншней даты до даты аргумента
  let n = ((date.getMonth() - now.getMonth()) + (12 * (date.getFullYear() - now.getFullYear())));
  // считаем сумму, которую необходимо вернуть банку
  let S = parseInt(amount) - parseInt(contribution);
  // коофициент для процентной ставки
  let P = parseInt(percent)/100/12
   //считаем ежемесячный платеж и округляем до 2-х десятых
  let monthPay = (S * (P + P / (((1 + P) ** n) - 1))).toFixed(2)
  //считаем сумму по кредиту 
  let totalAmount = (monthPay * n).toFixed(2)
 //проверяем корректность данных с помощью function checkData
checkData ({
    'Процент': percent,
    'Первоначальный взнос': contribution,
    'Сумма кредита':  amount
  })
  return totalAmount
 }
 //проверка корректности данных
function checkData (data){
for (let key in data) {    
     parseInt (data[key]) ;      
   if (parseInt(data[key]) !== parseInt(data[key])) {
      console.log(`Параметр ${key} содержит неправильное значение ${data[key]} `)}
  }
 }

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
// если тип имени не undefined, null и не пустая строка
  if (typeof (name) !== "undefined" && typeof (name) !== null && name.length !== 0) {
    greeting = (`Привет, мир! Меня зовут ${name}`)
  } else {
    name = "Аноним"
    greeting = (`Привет, мир! Меня зовут ${name}`)
  }
  return greeting
}

