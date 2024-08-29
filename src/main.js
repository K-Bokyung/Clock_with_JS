// body 출력 시 바로 onload 되는 함수
function startTime() {
  // 날짜
  const todayTime = new Date();
  let y = todayTime.getFullYear();
  let mon = todayTime.getMonth() + 1;
  let d = todayTime.getDate();
  mon = checkTime(mon);
  d = checkTime(d);
  let date = y + '-' + mon + '-' + d;
  document.getElementById('today_date').innerHTML = date;

  // 시간
  let h = todayTime.getHours();
  let m = todayTime.getMinutes();
  let s = todayTime.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  let time = h + ':' + m + ':' + s;
  document.getElementById('today_time').innerHTML = time;

  betteryCount();

  setTimeout(startTime, 1000);
}

// 10보다 작은 숫자 앞에 '0'을 붙임
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

// 배터리
let bettery = 100;
let bettery_out;

function betteryCount() {
  document.getElementById('bettery__percent').innerHTML = '배터리 : ' + bettery + '%';
  if (bettery <= 0) {
    stopCount();
  } else {
    --bettery;
  }
  bettery_out = setTimeout(betteryCount, 100000);
}

function stopCount() {
  clearTimeout(bettery_out);
}
