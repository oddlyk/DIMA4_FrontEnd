/**
 *  배열을 다루는 여러 메소드
 * 1) 배열.join("문자열") : 문자열을 기준으로 배열 속 개체 잇기
 * 2) 배열.reverse() : 역순으로... (원래 데이터에 영향 있음)
 * 3) 배열.slice(), 배열.splice() : 값1 위치부터 값2 위치 전까지 잘라 추출.
 *      - slice(값1, 값2): 원본에 영향을 주거나 받지 않는 분리된 복사본
 *      - splice(값1, 값2): 원본에서 추출되었기에 원본에 변형 발생. (추출된 개체들이 원본에서 사라짐)
 * 4) 배열.sort() : 배열 요소를 정렬
 * 5) 배열.concat() : 두개 이상의 배열을 연결
 * 6) 배열.push(), 배열.pop()
 *      - push(값) : 우측 끝에 데이터가 추가됨
 *      - pop() : 우측 끝의 데이터가 삭제됨 (삭제된 데이터는 변수로 받을 수 있음)
 * 7) 배열.unshift(), 배열.shift()
 *      - unshift(값) : 가장 처음(왼쪽 끝) 부분에 삽입
 *      - shift() : 가장 처음(왼쪽 끝) 부분에서 추출
 * 8) 배열.toString() : 배열 요소를 콤마로 연결된 문자열로 반환
 * 9) 배열.indexOf(값) : 배열 내에 해당 값이 존재하는 위치 추출
 */

// 1) join("문자열") : 문자열을 기준으로 배열 속 개체 잇기
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.join('/'));

// 2) reverse() : 역순으로... (원래 데이터에 영향 있음)
//console.log(arr.reverse());

// 3-1) slice(값1, 값2): 값1 위치부터 값2 위치 전까지 잘라 추출. 값 2가 없다면 끝까지 추출.
//      원본에 영향을 주거나 받지 않는 분리된 복사본
let temp = arr.slice(1, 5);
console.log("슬라이스된 배열: " + temp);
console.log("원본: ", arr);

// 원본을 수정하면 temp는? 그대로. 즉, 원본의 영향을 전혀 받지 않은 분리된 복사본
console.log("슬라이스된 배열 temp와 원본 배열 arr의 연관관계 - arr[2]의 값을 수정했을 때...")
arr[2] = 22;
console.log(arr);
console.log(temp);

// 음수로 호출하기 가능
temp = arr.slice(1, -2);
console.log(temp); //[2, 22, 4, 5, 6, 7, 8]

// 3-2) splice(값): 값1 위치부터 값2 위치 전까지 잘라 추출. 값 2가 없다면 끝까지 추출.
//      splice(위치,개수,대체값1, 대체값2, ...) : 위치부터 개수만큼 데이터를 없애고 해당 위치에 대체값들을 삽입
//      원본에서 추출되었기에 원본에 변형 발생. (추출된 개체들이 원본에서 사라짐)
let color = ['빨강', '주황', '노랑', '초록', '파랑', '남색', '보라'];
//temp = color.splice(4); //'파랑', '남색', '보라'
color.splice(2, 1, 'Yellow', '노란'); // 2번 인덱스에서 1개자리에 yellow와 노란 을 삽입
console.log(temp); //['빨강', '주황', 'Yellow','노란', '초록', '파랑', '남색', '보라'];
console.log(color);

// 4) sort() : 오름차순 정렬
arr.reverse();
console.log(arr); // [10, 9, 8, 7, 6, 5, 4, 22, 2, 1]
arr.sort();
console.log(arr); // [1, 10, 2, 22, 4, 5, 6, 7, 8, 9]

// 5) 배열.concat(값1,값2) : 배열에 다른 배열들을 연결 
let food = ['피자', '죽', '뼈해장국'];
let drink = ['물', '주스', '커피'];
let fruit = ['수박', '블루베리', '복숭아'];

let lunch = food.concat(drink, fruit);
console.log(lunch);

// 6) push(값), pop()
//      - push(값) : 가장 끝(오른쪽 끝)부분의 인덱스로 삽입
//      - pop() : 가장 끝(오른쪽 끝)부분의 값이 추출됨
let data = "짜장면";
food.push(data);
console.log(food);
temp = food.pop();
console.log(food);
console.log(temp);

food = ['라볶이'];
data = food.pop();
console.log(food); // [] : 데이터가 모두 추출되어 빈 배열이 됨
console.log(food.pop()); // 데이터가 없는데 또 추출하게 되면 undefined

// 7) unshift(), shift()
//      - unshift(값) : 가장 처음(왼쪽 끝) 부분에 삽입
//      - shift() : 가장 처음(왼쪽 끝) 부분에서 추출
drink = ['물', '주스', '커피'];
data = drink.shift();
console.log(drink);
console.log(data);
drink.unshift('맥주');
console.log(drink);

// 8) toString() : 배열 요소를 콤마로 연결된 문자열로 반환
console.log(lunch.toString());


// 9) indexOf(값) : 배열 내에 해당 값이 존재하는 위치 추출
fruit = ['수박', '블루베리', '복숭아'];
fruit.sort();
console.log(fruit);
idx = fruit.indexOf('블루베리');
console.log('블루베리 위치:' + idx);