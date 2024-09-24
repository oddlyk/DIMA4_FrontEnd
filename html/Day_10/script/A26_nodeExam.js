let submit = document.getElementById("send").addEventListener('click', adddata);

function adddata(event) {
    event.preventDefault(); // submit의 기본 기능 제거 : 서버로 데이터를 전송하여 화면이 초기화되는 기능
    console.log(event); //event가 가지고 있는 기능들을 콘솔창을 통해 확인 가능
    let name = document.getElementById("username").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let data = `고객이름: ${name}, 전화번호: ${phone}, 이메일: ${email}<br>`;
    let result = document.getElementById("result");
    result.insertAdjacentHTML('beforeend', data);

    cleanup(); // name, phone, email 초기화
}

function cleanup() {
    document.getElementById("username").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").focus();
}