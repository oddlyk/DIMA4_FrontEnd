//event source
let btn = document.getElementById("btn");

//btn.onclick = changeColor;
btn.onmouseenter = changeColor; // 커서가 올라가면... == onmouseover 그러나, onmouseobver는 사용하지 않기를 권장. 이벤트 버블링 이라는 처리 때문

//event target
let theBody = document.getElementById("theBody");

//event handler

let cnt = 0;
function changeColor() {
    let color = ["yellow", "skyblue", "pink", "silver"];
    theBody.style.backgroundColor = color[cnt];
    cnt++;
    if (cnt > color.length) cnt = 0;
}