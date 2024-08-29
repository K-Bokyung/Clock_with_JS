// 시간 표시 함수
function startTime() {
  const todayTime = new Date();
  // 날짜
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

  setTimeout(startTime, 1000);
}

function checkTime(i) {
  // 10보다 작은 숫자 앞에 '0'을 붙임
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
