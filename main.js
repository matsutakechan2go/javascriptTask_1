'use strict'

let hour 
let minute 
let second 
let cSecond 

let hourCount = 0;
let minuteCount = 0;
let secondCount = 0;
let cSecondCount = 0;

let hoursetInterval = 0;
let minutesetInterval = 0;
let secondsetInterval = 0;
let cSecondsetInterval = 0;

hour = document.getElementById("hour")
minute = document.getElementById("minute")
second = document.getElementById("second")
cSecond = document.getElementById("cSecond")

function startSW() {

 

  $("#stop").removeAttr('disabled');
  $("#reset").removeAttr('disabled');
  $("#start").attr({ 'disabled': 'disabled' });

  hoursetInterval = setInterval(function() {
    hourCount += 1
    hour.innerHTML = hourCount
  }, 3600000)

  minutesetInterval = setInterval(function() {
    minuteCount += 1
    minute.innerHTML = minuteCount
  }, 60000)

  secondsetInterval = setInterval(function () {
    secondCount += 1
    if (secondCount > 60) {
      secondCount = 1
    }
    second.innerHTML = secondCount
  }, 1000)

  cSecondsetInterval = setInterval(function () {
    cSecondCount += 1
    if (cSecondCount > 100) {
      cSecondCount = 1
    }
    cSecond.innerHTML = cSecondCount
  }, 10)
}

function stopSW() {
  $("#start").removeAttr('disabled');
  $("#stop").attr({ 'disabled': 'disabled' });

  clearInterval(hoursetInterval)
  clearInterval(minutesetInterval)
  clearInterval(secondsetInterval)
  clearInterval(cSecondsetInterval)
}

function resetSW() {
  $("#start").removeAttr('disabled');
  $("#reset").attr({ 'disabled': 'disabled' });
  $("#stop").attr({ 'disabled': 'disabled' });

  clearInterval(hoursetInterval)
  clearInterval(minutesetInterval)
  clearInterval(secondsetInterval)
  clearInterval(cSecondsetInterval)

  hourCount = 0,minuteCount = 0,secondCount = 0,cSecondCount = 0;

  hour.innerHTML = hourCount
  minute.innerHTML = minuteCount
  second.innerHTML = secondCount
  cSecond.innerHTML = cSecondCount
}

