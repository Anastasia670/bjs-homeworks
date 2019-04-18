'use strict'

let intervalID1 
let intervalID2 

function setDailyRhythm(wakeUpTime, bedTime){

const goodMorning = () => console.log('Доброе утро!') ;
const goodNight = () => console.log('Спокойной ночи!')
const checkTimeGetUp = () => setAlarm(wakeUpTime, goodMorning);
const checkTimeGoBed = () => setAlarm(bedTime, goodNight);

intervalID1 = setInterval(checkTimeGetUp, 1000);
intervalID2 = setInterval(checkTimeGoBed, 1000);
   }

function setAlarm(time, callback){
const now = new Date ()
let hours = now.getHours()
let minutes = now.getMinutes()

if (hours < 10) { hours = '0'+ hours }
else if (minutes < 10) { minutes = '0'+ minutes }

const nowTime = hours +':'+ minutes

if (nowTime === time){
callback ()
clearAlarm(intervalID1)
clearAlarm(intervalID2)
  } 
}

function clearAlarm(intervalID) {
clearInterval(intervalID);
}

setDailyRhythm('12:00', '17:04')