/*
    반복문 / 제어문
    1) 반복문 : while, do~while, for문
        - for문은 3종류
        - continue, break
    2) 제어문 : if, swith~case문
*/

//1) 반복문
// 1-1) 첫번째 for문
console.log("1-1) 첫번째 for문");
let ary = [1, 2, 3, 4, 5];
for (let i = 0; i < ary.length; ++i) {
    console.log(ary[i]);
}

//1-2) 두번째 for문 (for~in 반복문)
console.log("두번째 for문 (for~in 반복문): 변수에 인덱스가 추출됨"); //for와 in 사이의 변수에는 인덱스 값이 지정됨
for (let j in ary) {
    console.log(ary[j]);
}

//1-3) 세번째 for문 (for~of 반복문)
console.log("세번째 for문 (for~of 반복문): 변수에 값이 추출됨");
let cities = ['서울', '도쿄', '뉴욕', '상하이'];
for (let k of cities) {
    console.log(k);
}

///(연습문제) 1 ~ 50까지 반복하되, 3이나 5의 배수를 출력
console.log("(연습문제) 1 ~ 50까지 반복하되, 3이나 5의 배수를 출력");
for (let i = 1; i < 51; ++i) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
    }
}

//연산 시 주의
console.log("연산 시 주의 사항 1 : 문자열로 되어있는 숫자에 대해 자동으로 parsing을 실시해 연산")
let x = "10";
let result = 10 / x;
console.log(`문자열 "10"을 산술연산한 결과 : ${result}`);

console.log("연산 시 주의 사항 2 : 숫자로 parsing할 수 없는 문자열과 연산 시 NaN")
let y = "10!";
let result2 = 10 / y;
console.log(`문자열 "10"을 산술연산한 결과 : ${result2}`);

console.log("연산 시 주의 사항 3 : isNaN - parsing할 수 없으면 t, 가능하면 f") //+) 빈문자열은 f로 처리되나, 그 값이 0이 됨 
let z = prompt("숫자를 입력", "6"); // 페이지에 들어가면 입력 창을 띄움 : prompt("설명글",default값)
if (isNaN(z)) console.log("연산 불가");
else {
    let result3 = 10 / z; //나눗셈이기에, 0이나 빈문자열, 음수라면  Infinity가 됨.
    console.log(`문자열 ${z}를 산술연산한 결과 : ${result3}`);
}

// 홈페이지 생성 또는 실행 중 만나면 그 뒤가 중단되고, 창이 뜨는 것들
// 1) alert("경고문구") : 경고문구가 출력되고 "확인" 버튼이 존재
// 2) prompt(), prompt("메시지"), prompt("메시지",초기값) : 입력창이 출력되고, "확인","취소" 버튼이 존재)
//  - 확인 : 입력한 값이 변수에 대입 | 취소 : null이 변수에 대입
// 3) confirm("문구") : 문구가 출력되고, "확인","취소" 버튼이 존재

let cf = confirm("처리를 진행할까요?"); // 확인: true, 취소: false
console.log(cf);