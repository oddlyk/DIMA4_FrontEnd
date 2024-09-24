// 변경될 이미지를 모아둔 공간
let imgAry = ['../images/man1.png', '../images/man2.png', '../images/female1.png', '../images/female2.png'];

let eventSource = document.getElementById("face");

let i = 0;
setInterval(function () {

    let myImg = imgAry[i];
    eventSource.setAttribute('src', myImg);
    i++;
    if (i >= imgAry.length) i = 0;
}, 1500);
