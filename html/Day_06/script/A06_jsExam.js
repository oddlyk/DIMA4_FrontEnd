/*
    난수 발생하기 
*/


let theBody = document.getElementById("theBody");

function randRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    theBody.style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log(`rgb(${red},${green},${blue})`);
}

setInterval(function () {
    randRGB();
}, 1000);