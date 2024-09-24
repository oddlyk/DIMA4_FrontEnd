let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let equal = document.getElementById('equal');
let plus = document.getElementById('plus');
let clear = document.getElementById('clear');
let result = document.getElementById('result');

equal.addEventListener('click', add);
clear.addEventListener('click', clearAll);

function add() {
    if (isNaN(number1.value) || isNaN(number2.value) || number1.value.trim() == 0 || number2.value.trim() == 0) {
        alert('숫자만 입력해 주세요');
        clearAll();
        number1.focus();
        return;
    }
    result.value = parseInt(number1.value) + parseInt(number2.value);
}
function clearAll() {
    number1.value = "";
    number2.value = "";
    result.value = "";
}

// 쓰기 읽기 모두 가능
// innerHTML : 시작태그와 끝내그 사이에 태그를 삽입
// innerText : 시작태그와 끝태그 사이에 문자열을 삽입
// value : 폼 태그의 데이터를 읽어오거나 씀