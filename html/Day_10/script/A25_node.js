// 이벤트 소스
let afterend = document.getElementById('afterend');
let afterbegin = document.getElementById('afterbegin');
let beforeend = document.getElementById('beforeend');
let beforebegin = document.getElementById('beforebegin');

// 이벤트 타겟
let list = document.getElementById('list');
let data = "추가 데이터";

// 이벤트 핸들러
afterend.addEventListener('click', afterendFunc);
afterbegin.addEventListener('click', afterbeginFunc);
beforeend.addEventListener('click', beforeendFunc);
beforebegin.addEventListener('click', beforebeginFunc);


function afterendFunc() {
    // innerHTML과 동일하나, 추가되는 방식 지정 가능.
    list.insertAdjacentHTML('afterend', data);
}

function afterbeginFunc() {
    // innerHTML과 동일하나, 추가되는 방식 지정 가능.
    list.insertAdjacentHTML('afterbegin', data);
}

function beforeendFunc() {
    // innerHTML과 동일하나, 추가되는 방식 지정 가능.
    list.insertAdjacentHTML('beforeend', data);
}

function beforebeginFunc() {
    // innerHTML과 동일하나, 추가되는 방식 지정 가능.
    list.insertAdjacentHTML('beforebegin', data);
}