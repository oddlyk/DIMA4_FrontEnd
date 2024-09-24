// 이벤트 소스
let get = document.getElementById("get");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let replace = document.getElementById("replace");
let toggle = document.getElementById("toggle");
let contains = document.getElementById("contains");

// 이벤트 핸들러와 소스 연결
get.addEventListener('click', getHandler);
add.addEventListener('click', addHandler);
remove.addEventListener('click', removeHandler);
replace.addEventListener('click', replaceHandler);
toggle.addEventListener('click', toggleHandler);
contains.addEventListener('click', containsHandler);

// 이벤트 타겟
let target = document.getElementById("target");
let content = document.getElementById("content");
//이벤트 핸들러
function getHandler() {
    let data = '';
    data = content.classList; // #content요소의 class value들를 가져옴
    console.log(data); //DOMTokenList ['red', value: 'red']
    output(data);
}
function addHandler() {
    content.classList.add('info', 'blue'); // 특정 클래스를 추가. (기존 클래스와는 띄어쓰기로 연결됨)
}
function removeHandler() {
    content.classList.remove('info', 'blue');
}
function replaceHandler() {
    content.classList.replace('red', 'green');
}
function toggleHandler() {
    content.classList.toggle('visible'); //특정 클래스를 넣었다가 뺐다가 할 수 있음. 하나의 버튼으로 2가지 동작 가능
}
function containsHandler() {
    output(content.classList.contains('visible'));
}

// 사용자정의 함수 : output(classList)
function output(data) {
    target.innerHTML = data;
}