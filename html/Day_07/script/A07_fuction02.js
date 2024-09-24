// 1) 매개변수의 위치에 ...연산자 사용하기
// ...연산자는 전달된 모든 데이터를 배열의 형태로 받는 문법

function add(a, b, ...c) {
    if (arguments.length != 2) return; //들어온 매개 변수의 개수가 2개가 아니면...
    console.log(a);
    console.log(b);
    console.log(c); // ... 에 들어온 데이터는 배열로 들어와짐 
    console.log(c.length); // c로 받은 데이터의 개수 
    console.log(arguments); //전달된 데이터의 개수를 갖고 있는 내부 property
    return a + b;
}

let result = add(10, 20);
console.log("합계의 결과 -1 : " + result);
result = add(10, 20, 30, 40, 50);
console.log("합계의 결과 -2 : " + result); // 앞의 두 숫자의 합만 계산됨

//--------------------------
console.log("**************************");
// 2) 함수를 반환하는 함수 -1 : 고차함수
function temp() {
    return function () {
        console.log(2 * 3);
    }
}
let x = temp(); // x는 함수를 받음
x(); // 6 출력

temp()(); // 6출력

//--------------------------
console.log("**************************");
// 3) 함수를 반환하는 함수 -2 : 고차함수
function temp2() {
    let result = 2 * 3;
    console.log(result);

    return function () {
        return result;
    }
}
console.log(temp2(5, 7)()); // 6

