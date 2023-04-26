'use strict'

{
  const stopwatch = document.getElementById('stopwatch');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;

//カウントアップの定義
  function countUp() {
    // console.log(Date.now() - startTime); // Date.nowで取得した現在の時刻からstartボタンを押した時の時刻であるstartTimeを引けば、startTimeからの経過ミリ秒が出る
    const d = new Date(Date.now() - startTime); //↑では数値の単位はミリ秒なので、分や秒にしてわかりやすくする
    const h = String(d.getUTCHours()).padStart(2,);
    const m = String(d.getMinutes()).padStart(2,);
    const s = String(d.getSeconds()).padStart(2,);
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    stopwatch.textContent = `${h}:${m}:${s}:${ms}`;

    //10ミリ秒後にcountUp()を呼び出す
    setTimeout(()=>{
      countUp(); //この()は(() => { countUp(); }の無名関数
    }, 10); //これにより10ミリ秒ごとに現在時刻とstartTime の差が表示されていく
  }

  // スタートボタンにクリックイベントの設定
  start.addEventListener('click', () => {
    startTime = Date.now(); //Startボタンをクリックした瞬間の時刻をstartTimeに保存
    countUp(); //ここでカウントアップの処理を実行する
  });
}

// let hour 
// let minute 
// let second 
// let cSecond 

// let hourCount = 0;
// let minuteCount = 0;
// let secondCount = 0;
// let cSecondCount = 0;

// let hoursetInterval = 0;
// let minutesetInterval = 0;
// let secondsetInterval = 0;
// let cSecondsetInterval = 0;

// hour = document.getElementById("hour")
// minute = document.getElementById("minute")
// second = document.getElementById("second")
// cSecond = document.getElementById("cSecond")

// function startSW() {

 

//   $("#stop").removeAttr('disabled');
//   $("#reset").removeAttr('disabled');
//   $("#start").attr({ 'disabled': 'disabled' });

//   hoursetInterval = setInterval(function() {
//     hourCount += 1
//     hour.innerHTML = hourCount
//   }, 3600000)

//   minutesetInterval = setInterval(function() {
//     minuteCount += 1
//     minute.innerHTML = minuteCount
//   }, 60000)

//   secondsetInterval = setInterval(function () {
//     secondCount += 1
//     if (secondCount > 59) {
//       secondCount = 1
//     }
//     second.innerHTML = secondCount
//   }, 1000)

//   cSecondsetInterval = setInterval(function () {
//     cSecondCount += 1
//     if (cSecondCount > 99) {
//       cSecondCount = 1
//     }
//     cSecond.innerHTML = cSecondCount
//   }, 10)
// }

// function stopSW() {
//   $("#start").removeAttr('disabled');
//   $("#stop").attr({ 'disabled': 'disabled' });

//   clearInterval(hoursetInterval)
//   clearInterval(minutesetInterval)
//   clearInterval(secondsetInterval)
//   clearInterval(cSecondsetInterval)
// }

// function resetSW() {
//   $("#start").removeAttr('disabled');
//   $("#reset").attr({ 'disabled': 'disabled' });
//   $("#stop").attr({ 'disabled': 'disabled' });

//   clearInterval(hoursetInterval)
//   clearInterval(minutesetInterval)
//   clearInterval(secondsetInterval)
//   clearInterval(cSecondsetInterval)

//   hourCount = 0,minuteCount = 0,secondCount = 0,cSecondCount = 0;

//   hour.innerHTML = hourCount
//   minute.innerHTML = minuteCount
//   second.innerHTML = secondCount
//   cSecond.innerHTML = cSecondCount
// }

