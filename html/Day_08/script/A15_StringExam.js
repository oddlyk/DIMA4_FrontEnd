// 이벤트를 일으키는 이벤트 소스
let check = document.getElementById("check");

// 이벤트를 당하는 이벤트 타겟
let userid = document.getElementById("userid");
let birthday = document.getElementById("birthday");

//이벤트 소스와 이벤트 핸들러를 연결
check.addEventListener("click", validation);

// check가 눌렸을 때 발생하는 이벤트 핸들러
function validation() {
    let id = userid.value;
    // id에 공백이 포함되어서는 안됨.
    if (id.includes(' ')) {
        alert("아이디는 한 단어로 입력하십시오 (공백불가)");
        // userid.select();
        userid.value = "";
        userid.focus();
        return;
    }

    // id는 5글자 이상 10글자 이하여야 함
    if (!(id.trim().length >= 5 && id.trim().length <= 10)) {
        alert("5~10 글자로 정확히 입력하시오");
        //userid.focus(); // userid로 입력 커서를 집어 넣음
        userid.select(); //userid 속 내용을 선택해 지우기 쉽게 해둔 상태 focus()도 자동 적용됨
        return;
    }

    let birth = birthday.value;
    // 생년 월일은 8자리 이상이며 문자가 포함되어서는 안됨
    if (birth.length != 8 || isNaN(birth)) { // isNaN : 숫자로만 이루어지면 0, 문자가 포함되면 1 (true)
        alert("생년월일을 숫자 8자리로 입력하시오");

        // 값을 초기화 시킨 후 커서 넣기
        birthday.value = "";
        birthday.focus();
        return;
    }
    alert("아이디: " + id + "\n생년월일: " + birth);
}