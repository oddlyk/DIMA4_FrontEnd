/*
    구조 분해 할당 (Destructuring)
*/
let one = [10, 20, 30];
// 데이터를 각각 꺼내려면..
let a = one[0];
let b = one[1];
let c = one[2];
console.log(a, b, c);

// 구조 분해 할당
let [a1, b1, c1] = one; // 대괄호 필수!
console.log(a1, b1, c1);

let [a2, b2, c2, d2] = one; // 배열 속 값은 3개지만 4개로 받으려하면 데이터가 들어갈 수 없는 마지막 객체는 undefined
console.log(a2, b2, c2, d2);


// 예전 방식
let x = 10;
let y = 20;
let temp;

// temp = x;
// x = y;
// y = temp;

// 구조분해 할당을 이용한 변수 값 교환
[y, x] = [x, y];
console.log(`두 변수의 교환 결과 : x = ${x}, y = ${y}`);


/*
    구조 분해 할당 (객체)
        - 객체의 키값과 변수명이 같아야 함.
        - 다른 이름을 사용하고자 할 때에는 별칭으로 사용해야 함
            - 키명:별칭
*/
let objOne = { name: '손오공', age: 29 };

// 예전 방식
//let name = objOne['name']; // == objOne.name;

// 구조 분해 할당
let { name, age } = objOne; // 키의 이름을 {} 내에 작성해야 함.
console.log(`객체를 구조분해 할당한 결과: ${name} ${age}`);

let objTwo = { name: '저팔계', age: 25 };
// let { nickName, hisAge } = objTwo; // 키값으로 존재하지 않는 이름을 사용해 봄
// console.log(`객체를 구조분해 할당한 결과: ${nickName} ${hisAge}`); //undefined undefined
let { name: nickName, age: hisAge } = objTwo; // 키이름:별칭 형태로 사용
console.log(`객체를 구조분해 할당한 결과: ${nickName} ${hisAge}`);


// default parameter를 이용한 구조 분해 할당 => 혹시 해당 키가 없을 경우를 대비해 default 값을 제공
let { name: k, age: l, address = "서울" } = objTwo;
console.log(`객체를 구조분해 할당한 결과: ${k} ${l} ${address}`);