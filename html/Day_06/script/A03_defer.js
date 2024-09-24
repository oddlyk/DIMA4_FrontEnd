//1) defer 없는 상태의 스크립트 코드가 실행되었을 때
let btn = document.getElementById("btn"); // html Object
let del = document.getElementById("del"); // html Object
let printing = document.getElementById("printImg");
let printStar = document.getElementById("printStar");
console.log(btn);
// 데이터가 null인 곳에는 onclick 이벤트를 실행할 수 없음
// => html문서 내에서 header에 선언되어 있어, 돔트리 이전에 생성되어 문제 발생
// => html 내에서 파일을 부를 때 defer를 붙여 선언 (<script defer src="./script/A03_defer.js"></script>)
btn.onclick = write;
del.onclick = remove;
printing.onclick = printImg;
printStar.onclick = drawStar;
function write() {
    // alert("클릭하셨군요!");
    let result = document.getElementById("result");
    let data = "<h3 style='color: red;'>클릭했습니다.</h3>";

    result.innerHTML = data;
}

function remove() {
    let result = document.getElementById("result");
    result.innerHTML = "";
}

function printImg() {
    let result = document.getElementById("result");
    result.innerHTML = '<img src="./home.png" alt="집">';
}

function drawStar() {
    let result = document.getElementById("result");
    let data = ''; //선언 및 초기화
    for (let i = 0; i < 5; ++i) {
        for (let j = 0; j < (i + 1); ++j) {
            data += "*";
        }
        data += "<br>";
    }
    result.innerHTML = data; //끝 태그가 없는 태그 내에는 사용할 수 없음
}