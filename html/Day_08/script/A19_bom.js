// window 객체의 open() 함수 사용

//  화면이 로드되면 실행
window.addEventListener('load', function () { // unload라면 해당 창을 닫을 때 이 화면이 생성
    window.open('./notice.html', 'win', 'height=600px, left = 100px, width=400px, menubar = no');
});


// 버튼 클릭 시 실행
let newWin = document.getElementById("newWin");
newWin.addEventListener('click', function () {
    window.open('./notice.html', 'win', 'height=600px, left = 100px, width=400px, menubar = no');
});