// 1) 선언적 함수
function add(a, b) {
    return a + b;
}

// 2) 표현적 함수의 생김새 (함수 리터럴이 변수에 대입)
let two = function (x, y) {
    return x * y;
}

// 3) 화살표 함수 : 함수 리터럴(표현적 함수)을 다른 방식으로 표기한 것
// 공식 (1) function 키워드 제거
//      (2) ) { 사이에 => 를 삽입
//      (3) 실행 명령문이 1줄이라면 중괄호 제거
//      (4) return 키워드를 지운다.
//      (5) 매개 변수가 1개 일때는 () 도 생략가능.
//      (6) 단, 매개변수가 0개라면 생략 불가
//      (7) 매개변수의 디폴트값은 NaN이기에 매개변수 선언시에 초기화 해주어야 함 
let three = (x, y) => x * y;

// (예) 아래 함수를 화살표 함수로 변경하시오.
let four = function (a) {
    return a ** 3;
}
four = a => a ** 3;

// (예) 아래 함수를 화살표 함수로 변경하시오.
// setInterval(function () {
//     console.log("아무 값이나 출력");
// }, 1000);

// setInterval(() => console.log("아무값이나 출력"), 1000);


// 매개변수 초기화
function five(a, b, c = 5) { // 디폴트 값을 줄 때는 반드시 우측값부터 채워야 함 (중간만 값이 있거나 할수는 없음)
    return a * b * c;
}
let result = five(1, 2);
console.log("five 함수의 결과: " + result); // c를 default로 초기화 하지 않으면 NaN이 출력.

// 디폴트 파라미터를 화살표 함수에 적용
let six = (x, y = 10) => console.log(`${x} + ${y} = ${x + y}`);
six(10, 20); //20
six(8); // 18
console.log("")

// [연습문제] html 문서 내에 있는 div.box 의 데이터를 가져와, 첫번째 요소는 화면 여기저기에 나타나도록 하고자 한다.
let items = document.getElementsByClassName('box');
let firstItem = items[0];
// let left = Math.floor(Math.random() * 1820); // 화면 상 1920*1080이며, div의 크기가 100*100 이기에 상자가 돌아다닐 공간은 1820*980이 됨
// let tp = Math.floor(Math.random() * 980);
// firstItem.style.top = tp + 'px';
// firstItem.style.left = left + 'px';

setInterval(() => {
    // 화면 상 1920*1080이며, div의 크기가 100*100 이기에 상자가 돌아다닐 공간은 1820*980이 됨. 
    // 단, 크롬 화면 상의 줌인아웃으로 인한 크기로 인해 변동 존재
    let left = Math.floor(Math.random() * 1436);
    let tp = Math.floor(Math.random() * 595);
    firstItem.style.top = tp + 'px';
    firstItem.style.left = left + 'px';
}, 1000)

// [연습문제] html 문서 내에 있는 div.box 의 데이터를 가져와, 두번째 요소는 가로1, 세로1씩 1초마다 커지도록 한다.
let boxes = document.getElementsByTagName('div');
let box = boxes[1];
let w = box.style.width;
let h = box.style.height;
setInterval(() => {
    box.style.width = w++ + 'px';
    box.style.height = h++ + 'px';
}, 50);