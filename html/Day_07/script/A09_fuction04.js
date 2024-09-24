//
let ary = [10, 11, 100, 101, 1000];
console.log('배열의 크기: ' + ary.length);

// 1) forEach()는 배열의 모든 데이터에 접근 하는 함수
let total = 0;
ary.forEach(function (item, index, ary) { // item: 각 요소값, index: 순서(0부터), ary: 배열 그 자체
    //  console.log(item + ', ' + index + ', ' + ary);
    total += item;
});
console.log('배열의 총합: ' + total);

// 2) 위 예제를 화살표 함수로 변경
total = 0;
ary.forEach(item => total += item);
console.log('배열의 총합: ' + total);

//-------------------------------
/*
    map() : 배열의 요소를 변경
    배열 요소 전체를 순회. 그 결과 값으로 새로운 배열을 만들어 반환함.
    원본의 값은 변경하지 않음.
*/
let result = ary.map(item => item * 2);
console.log("map으로 처리한 결과: " + result);
console.log("원본: " + ary);

//-------------------------------
/*
    filter() : 배열 요소의 데이터를 필터링 하여 원하는 데이터만 추출
    배열 요소 전체를 순회. 연산 결과가 true인 데이터만 모아 그 요소들로 묶은 새로운 배열을 반홤.
    원본의 값은 변경하지 않음.
*/
result = ary.filter(item => { if (item % 2 == 0) return true }); // 짝수만 출력
result = ary.filter(item => { if (item % 2) return !false }); // 홀수만 출력 (2로 나누었을 때, 0이면 false, 1이면 true 그의 반대에 대한 처리)
console.log("filter로 처리한 결과: " + result);
console.log("원본: " + ary);