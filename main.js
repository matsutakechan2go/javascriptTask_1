'use strict'

{
  const stopwatch = document.getElementById('stopwatch');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0; //タイマーが走っていた時間


//カウントアップの定義
  function countUp() {

    // console.log(Date.now() - startTime); // Date.nowで取得した現在の時刻（協定世界時）からstartボタンを押した時の時刻であるstartTimeを引けば、startTimeからの経過ミリ秒が出る

    const d = new Date(Date.now() - startTime + elapsedTime); //↑では数値の単位はミリ秒なので、分や秒にしてわかりやすくする
    //そして経過のタイマー時間を足す（ストップしても経過の時間を残すため）

    const h = String(d.getUTCHours()).padStart(2,); //getHoursにすると地方時に基づいた時間になるのでgetUTCHoursを使う

    const m = String(d.getMinutes()).padStart(2,); //Stringで数字を文字列として取得してpadStartで桁数を揃える
    const s = String(d.getSeconds()).padStart(2,);
    const ms = String(d.getMilliseconds()).padStart(3, '0').slice(0, 1); //msは三桁目の値しか表示したくないので、sliceで文字列の１番目の１文字だけを取得、とする
    stopwatch.textContent = `${h}:${m}:${s}` + `: ${ms}`;


  
  //10ミリ秒後にcountUp()を呼び出す
    timeoutId = setTimeout(()=>{
      countUp(); //この()は(() => { countUp(); }の無名関数
    }, 10); //これにより10ミリ秒ごとに現在時刻とstartTime の差が表示されていく
  }


  //ボタンの状態をセットする
  function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }

  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }

  function setButtonStateStoped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }

  //ページ読み込み時にセットした状態を呼び出す
  setButtonStateInitial() 


  // ボタンにクリックイベントの設定
  start.addEventListener('click', () => {
    setButtonStateRunning() 
    startTime = Date.now(); //Startボタンをクリックした瞬間の時刻をstartTimeに保存
    countUp(); //ここでカウントアップの処理を実行する
  });

  stop.addEventListener('click', () => {
    setButtonStateStoped()
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime; 
  });

  reset.addEventListener('click', () => {
    setButtonStateInitial()
    stopwatch.textContent = ' 0: 0: 0: 0';
    elapsedTime = 0;
  });

}


