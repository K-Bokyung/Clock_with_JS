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

  alarm();
}

// 10보다 작은 숫자 앞에 '0' 붙임
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

// 배터리
let bettery = 100;
let bettery_out;
const timeBox = document.getElementById('box');

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

// 시간 출력창 배경을 검은색으로 바꾸는 함수
function changeColor() {
  timeBox.style.backgroundColor = 'black';
}

// 알람 현황 - 디버깅 중
function alarm() {
  const alarm_list = [0, 0, 0];
  let txt;

  let buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.value === 'hour') {
        alarm_list[0] += 1;
        console.log('clicked');
      } else if (button.value === 'minute') {
        alarm_list[1] += 1;
        console.log('clicked');
      } else if (button.value === 'second') {
        alarm_list[2] += 1;
        console.log('clicked');
      }
      txt = alarm_list.join('');
      document.getElementById('span').innerHTML = txt;
    });
  });
}
