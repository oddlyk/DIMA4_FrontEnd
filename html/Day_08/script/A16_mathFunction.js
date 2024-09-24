/**
 * Math 클래스는 수학이나 수치와 관련된 데이터를 처리하는 함수
 * [값에 관한 함수] 
 * - Math.PI (원주율), Math.E (오일러 상수)
 * 
 * [함수]
 * - Math.abs(값) : 절대값을 반환. 
 *      - null, "", " ", []는 0으로 인식. (Falsy값이기 때문)
 *      - 문자열이나 배열은 NaN으로 인식. 단, 숫자 치환이 가능한 문자는 숫자로 반환. 
 *          - Falsy값 : 0, null, undefined, ''  / Truely값 : [], 문자열, 0을 제외한 숫자들
 *      + Math.abs()를 값을 주지않고 출력시에도 NaN
 * 
 * - Math.ceil(n) : 올림. 주어진 숫자의 양의 방향으로 만나는 정수로 올림.
 * 
 * - Math.floor(n) : 버림. 주어진 숫자의 음의 방향으로 만나는 정수로 올림.
 * 
 * - Math.trunc(n) : 절삭(버림). 소숫점 이하를 버림
 * 
 * - Math.round(n) : 반올림. **주의** 소숫점 n자리 이하 등의 반올림 위치를 직접 제어할 수 없음.
 *      - 5부터 올림을 진행하나, -0.5는 반올림 하지 않음. 단, -0.51의 경우 반올림됨.
 *      - 양수를 올림하면 더 큰 수가 되지만, 음수를 올림 시 더 작은 수가 됨 (ex Math.round(-0.6) => -1)
 *      - 내림은 버림과 같은 역할을 함
 * 
 * - Math.min(n), Math.max(n) : 여러 숫자 중 최솟값 최댓값 
 *      - Math.max(), Math.min() 과 같이 아무 값도 주지 않고 사용 시, -Infinity, Infinity
 * 
 * - Math.pow(n1,n2): 거듭제곱 함수 n1을 n2만큼 거듭제곱함 (= n1**n2). n2가 실수여도 음수여도 가능.
 *      - 단, 두 수 모두 음수면 NaN
 * 
 * - Math.random() : [0, 1) 사이의 실수 난수 발생
 * 
 * - 숫자.toFixed(n) : 소수 이하 자릿수를 n까지로 제어 (반올림)
 *      - -0.5도 반올림함 
 *      - 숫자를 주지 않으면 소수 모두 제거 (반올림)
 * 
 * - 참고
 *      - 0으로 나누는 일
 *          - 0/0 : 둘모두 0 일 때 NaN
 *          - n/0 : 나누는 수가 0일 때 Infinity. 분자가 음수라면 -Infinity
 */

// 값에 관한 함수 : Math 클래스에 선언된 상수
console.log(`원주율: ${Math.PI}`)
console.log(`오일러 상수: ${Math.E}`)

//Math.abs(값) : 절대값을 반환
//   - Falsy값 : 0, null, undefined, ''  / Truely값 : [], 문자열, 0을 제외한 숫자들
console.log('---------- Math.abs(n)');
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-2')); //2
console.log(Math.abs(null)); // 0 : null은 Object
console.log(Math.abs('')) // 0
console.log(Math.abs(' ')) // 0
console.log(Math.abs([])) // 0
console.log(Math.abs('Korea')) // NaN
console.log(Math.abs()) // NaN
console.log(Math.abs([1, 2, 3])); // NaN

// Math.ceil(n) : 올림. 주어진 숫자의 양의 방향으로 만나는 정수로 올림.
console.log('---------- Math.ceil(n)');
console.log(Math.ceil(0.95)); // 1
console.log(Math.ceil(5.00000001)); //6
console.log(Math.ceil(5)); // 5
console.log(Math.ceil(-0.95)) // -0
console.log(Math.ceil(-5.00000001)); // -5

// Math.floor(n) : 버림. 주어진 숫자의 음의 방향으로 만나는 정수로 올림.
console.log('---------- Math.floor(n)');
console.log(Math.floor(0.95)); // 0
console.log(Math.floor(5.00000001)); // 5
console.log(Math.floor(5)); // 5
console.log(Math.floor(-0.95)) // -1 
console.log(Math.floor(-5.00000001)); // -6

// Math.trunc(n) : 절삭(버림). 소숫점 이하를 버림
console.log('---------- Math.trunc(n)');
console.log(Math.trunc(0.95)); // 0
console.log(Math.trunc(5.00000001)); // 5
console.log(Math.trunc(5)); // 5
console.log(Math.trunc(-0.95)) // -0
console.log(Math.trunc(-5.00000001)); // -5

// Math.round(n) : 반올림. **주의** 소숫점 n자리 이하 등의 반올림 위치를 직접 제어할 수 없음.
console.log('---------- Math.round(n)');
console.log(Math.round(0.95)); // 1
console.log(Math.round(5.00000001)); // 5
console.log(Math.round(5)); // 5
console.log(Math.round(-0.95)) // -1
console.log(Math.round(-5.00000001)); // -5
console.log(Math.round(-5.6)); // -6
console.log(Math.round(-5.5)); // -5 (-0.5는 반올림 하지 않음)
console.log(Math.round(-5.51)); // -6
console.log(Math.round(5.6)); // 6
console.log(Math.round(5.5)); // 6


// 참고 : 
console.log('---------- 참고');
console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity


// Math.min(n), Math.max(n) : 여러 숫자 중 최솟값 최댓값 
console.log('---------- Math.max(n)');
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.max(-1, -5, -3)); // -1 
console.log(Math.max()); // -Infinity
console.log(Math.max(-0.94)); // -0.94

console.log('---------- Math.min(n)');
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.min(-1, -5, -3)); // -5 
console.log(Math.min()); // Infinity
console.log(Math.min(-0.94)); // -0.94

// 연습 ary = [2,5,7,1,6] 배열에 들어있는 값 중 최댓값, 최솟값을 구하시오. => ... 연산자 사용
let ary = [2, 5, 7, 1, 6];
console.log(`최댓값: ${Math.max(...ary)}`); // 7
console.log(`최솟값: ${Math.min(...ary)}`); // 1

// Math.pow(n1,n2): 거듭제곱 함수
console.log('---------- Math.pow(n1,n2)');
console.log(Math.pow(5, 3)); //125
console.log(5 ** 3); // 125
console.log(Math.pow(4, 0.5)); // 2
console.log(4 ** 0.5); // 2
console.log(Math.pow(4, -2)); // 0.0625
console.log(4 ** -2); // 0.0625
console.log(Math.pow(-5, 3)); //-125
console.log((-5) ** 3); // -125  : 괄호 필수! 앞 값에 -를 붙이는 것보다 거듭제곱이 우선되기에 괄호가 없다면 에러.
console.log(Math.pow(-4, -2)); // 0.0625
console.log(Math.pow(-4, -0.5)); // NaN : 두 수 모두 음수면 NaN


// Math.random() : [0, 1) 사이의 실수 난수 발생
console.log('---------- Math.random()');
for (let i = 0; i < 5; ++i) {
    console.log(Math.ceil(Math.random() * 50)); // 1~50 사이의 정수 값이 나옴. (Math.ceil(n) : 올림.)
}

// Math.toFixed() : 소수 이하 자릿수 제어 (반올림)
console.log('---------- Math.toFixed(n)');
let data = Math.random();
console.log(data);
console.log(data.toFixed(2));