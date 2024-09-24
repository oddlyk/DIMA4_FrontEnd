// ary 안에 1 ~ 100 사이의 정수 10개를 발생시켜 추가한다.
// 모두 발생 시킨 후, 홀수인 데이터의 위치를 찾아 새로운 배열에 다시 추가
// ex 
let temp_ary = [1, 3, 5, 10, 9, 6, 8, 99, 2, 4];
let temp_idx = [0, 1, 2, 4, 7];

// 진행
let ary = []; // 정수 발생 시킬 곳
let idx = []; // 홀수만 찾아 그 위치를 추가할 곳



for (let i = 0; i < 10; ++i) {
    let temp = Math.ceil((Math.random() * 100) + 1);
    ary.push(temp);
}
console.log(ary);
ary.forEach(item, index => {
    if ((item % 2)) {
        idx.push(index);
    }
});
console.log(idx);