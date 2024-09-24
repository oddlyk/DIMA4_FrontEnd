/**
 * Number 클래스 : 숫자를 다루는 클래스
 * // Date()는 new 선언이 필요하나, Math는 필요없음. Number또한 필요 없음.
 * 
 * 1) 문자열을 숫자로 변환하는 메소드
 *  - Number(문자열) : 문자열을 숫자로 변환. 변환 불가 시 NaN return 
 *  - parseInt(문자열) : 문자열을 정수로 변환. 변환 불가 문자가 포함된 경우, 변환 가능한 곳 까지만 변환.
 *  - parseFloat(문자열) : 문자열을 실수로 변환. 변환 불가 문자가 포함된 경우, 변환 가능한 곳 까지만 변환.
 *      - parseInt(2.4a5) => 2 / parseFloat(2.4a5) => 2.4
 *  - Number.MAX_VALUE : 자바 스크립트의 Float형이 가질 수 있는 최댓값 (5e-324)
 *  - Number.MIN_VALUE : 자바 스크립트의 Float형이 가질 수 있는 최솟값 (1.7976931348623157e+308)
 */

// Number() : 문자열을 숫자로 변환
console.log("---------- Number(문자열)")
let data = "2.5";
let temp = Number(data);
console.log(temp);

console.log(temp, typeof temp);

let data2 = "2.5a7";
temp = Number(data2);
console.log(temp); // NaN

// parseInt(문자열) : 문자열을 정수로 변환.
console.log("---------- parseInt(문자열) , parseFloat(문자열)");
data2 = "2.5a7";
console.log(parseInt(data));
console.log(parseInt(data2)); // NaN
console.log(parseFloat(data2)); // NaN

// 다바 스크립트의 최대, 최솟값 확인
console.log(`Float형 최댓값: ${Number.MAX_VALUE}`);
console.log(`Float형 최댓값: ${Number.MIN_VALUE}`);
