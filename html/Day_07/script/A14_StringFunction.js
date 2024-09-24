/*
    문자열 관련 메소드
    문자열의 특징 : sequence 데이터면서 immutable한 타입

    1) 문자열.charAt(index), 문자열.at(index) : 전달된 인덱스 위치의 문제 1개 반환
    2-1) 문자열.startsWith(str), 문자열.endsWith(str) : 해당문자열로 시작하거나 끝나는지 여부 (t/f)
    2-2) 문자열.inclues(str) : 해당 문자열이 포함되어있는지 여부 (t/f)
    2-3) 문자열.search(str) : 해당 문자열 검색 결과 시작 index. 존재하지 않으면 -1 반환 
    3) 문자열.replace(m,n) : 문자열 m을 찾아 n으로 수정 (원본데이터 수정이 아닌 새로운 객체 생성)
    4) 문자열.slice(index1, index2) : index1 ~ index2-1 까지의 부분 문자열 반환. 음수 위치 사용 가능. 순서 필수. (앞의 위치가 앞 숫자로 올것.)
    5) 문자열.substring(index1, index2) : index1 ~ index2-1 까지의 부분 문자열 반환. 음수 위치 사용 불가.  순서 뒤집어져도 가능.
        - (substr()은 ES5 이후에서는 사용을 권장하지 않음)
    6) 문자열.split(str): 문자열의 토큰화. 반환타입은 배열이 됨.
    7) 문자열.trim() : 문자열 앞, 뒤의 공백 문자를 제거
*/

let data = 'abcdefg';

// 1) charAt() at()
console.log(data.charAt(3)); //d
console.log(data.at(3)); //d

// 2) startsWith(str), endsWith(str), inclues(str), search(str)
data = 'Hello, world! Wecome to the Javascript!';
console.log(data.startsWith("Hello")); // true
console.log(data.endsWith("!")); // true
console.log(data.includes("world")); // true

console.log(data.search('world')); // 7
console.log(data.search('earth')); // -1 : 존재하지 않음

// 3) replace(m,n)
let text = data.replace('Hello', 'Hi');
console.log("원본: ", data);
console.log("변경후: ", text);

// 4) slice(index1, index2)
// 주의 사항 : 앞 < 뒤 여야 함. (앞의 인덱스 값은 뒤의 인덱스 값보다 적어야 함)
// 주의 사항을 어긴 경우 에러는 발생하지 않으나, 데이터 또한 없음.
console.log(data.slice(5, 10));
console.log(data.slice(-5, -1)); // -1은 가장 마지막 데이터. -1-1인 -2까지만 추출됨.

// 5) substring(index1, index2)
console.log(data.substring(5, 10));
console.log(data.substring(10, 5));

// 6) split(str): 문자열의 토큰화. 반환타입은 배열이 됨.
let arr = data.split(' ');
console.log(typeof arr);
console.log(arr.length);
console.log(arr);

// 7) trim() : 문자열 앞, 뒤의 공백 문자를 제거
data = '   Hello~       ';
console.log('문자열의 길이: ', data.length);
console.log('trim() 후 문자열의 길이: ', data.trim().length);

