/*
    1) 함수의 정의 (선언 함수)
    function 함수명([파라미터]){
    실행문;
    [return 데이터];
    }

    2) 함수의 정의 (표현함수)
    let 변수명 = function ([파라미터]){
    실행문;
    [return 데이터];
    }

    3) 호출(Call)
    변수명([argument]);
*/

//첫 번째 예제
function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}

let temp = plus;
temp(10, 20);

function proxy(func, a, b) { // 함수명, 값1, 값2
    return func(a, b);
}
let result = proxy(plus, 11, 21);
console.log(`결과: ${result}`);
result = proxy(minus, 11, 21);
console.log(`결과: ${result}`);

//2) DOM에 접근하는 함수+
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let clock = document.getElementById('clock');

function makeHour() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let second = now.getSeconds();
    let data = `<span style="color:red;">${hour}시 ${min}분 ${second}초 </span>`;
    clock.innerHTML = data;
}

// makeHour(); //이번트와 상관없이 시간을 화면에 출력

//이벤트와 상관없이 시간을 1초마다 화면에 출력
// setInterval(function () {
//     makeHour();
// }, 1000);

let timer = "";
start.addEventListener('click', function () {
    makeHour(); //아래 코드는 1초 후부터 실행되기에 시작하자 마자 함수를 보여줄 필요가 있어 사용
    timer = setInterval(function () { //특정 시간 마다 행동을 반복
        makeHour();
    }, 1000);
});

stop.addEventListener('click', function () {
    timer = clearInterval(timer); //지정한 인터벌을 제거 - 인터벌 명을 전달. 따라서 인터벌 명은 전역 변수여야 함
    alert("시간이 멈췄습니다.");
});