/* html 태그
<h1 id="clock">00:00</h1>
*/

const clock = document.querySelector('#clock');

function currentTime() {
  const date = new Date();  //⛔ date를 함수가 실행될 때마다 불러와야함. 1초마다 컴퓨터로부터 현재 시간을 받아와야 실시간으로 업데이트 가능.
  let hour = date.getHours(); // 24시를 12시로 바꿔주려면 hour를 새로운 값으로 업데이트 해야하니까. 
  if (hour > 12) {  // 24시를 12시로 바꿔줌.
    hour = hour - 12;
  }
  hour = String(hour).padStart(2, '0');  // padstart로 2자리 수 맞춰주기.
  const minute = String(date.getMinutes()).padStart(2, '0');
  
  clock.innerText = `${hour}:${minute}`;
}

currentTime();
setInterval(currentTime, 1000); // 1000ms = 1s마다 함수를 실행. 현재 시각을 받아옴.


/*
시계를 만들려면 new Date();를 선언해야함. 
new Date();는 현재 시간을 불러오는 함수.
시계는 매 초마다 현재 시간을 불러와 업데이트 해야하므로

clock needs to be updated per second, so function should bring current time per second, too. 
*/
