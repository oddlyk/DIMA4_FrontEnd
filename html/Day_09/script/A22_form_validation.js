"use strict";

//이벤트 소스 얻어오기
document.getElementById("join").addEventListener('click', joinCheck);
document.getElementById("userid").addEventListener('keyup', idCheck) // keyup: 키보드가 눌리고(press) 떼지는 (relese) 것
let email2 = document.getElementById("email2").addEventListener('change', emailCheck);

//이벤트 핸들러
function idCheck() {
    let userid = document.getElementById("userid");
    let idcheck = document.getElementById("idcheck");
    if (userid.value.trim().length < 5 || userid.value.trim().length > 12) {
        idcheck.style.color = "red";
        idcheck.innerText = "아이디는 영문, 숫자포함 5~12글자로 입력해 주세요.";
        return;
    }
    idcheck.innerText = "";
}

function joinCheck() {
    // 1) 이름 길이 체크
    let username = document.getElementById("username");
    if (username.value.trim().length < 3 || username.value.trim().length > 5) {
        alert("이름은 실명으로 3~5글자로 입력해 주세요.");
        username.select();
        return;
    }

    // 2) 아이디 길이 체크
    let userid = document.getElementById("userid");
    if (userid.value.trim().length < 5 || userid.value.trim().length > 12) {
        alert("아이디는 영문, 숫자포함 5~12글자로 입력해 주세요.");
        userid.select();
        return;
    }

    // 3) 비밀번호 길이 체크
    let userpwd = document.getElementById("userpwd");
    // userpwdcheck.value = ""; => 비동기 통신으로 각각 값을 체크할 때에는 있는게 좋음.
    if (userpwd.value.trim().length < 10 || userpwd.value.trim().length > 12) {
        alert("비밀번호는 영문, 숫자, 특수문자 중 2가지 이상 혼합하여 10~15 글자로 입력해 주세요.");
        userpwd.select();
        return;
    }

    // 4) 비밀번호 확인 체크
    let userpwdcheck = document.getElementById("userpwdcheck");
    if (userpwd.value.trim() != userpwdcheck.value.trim()) {
        alert("비밀번호는 비밀번호 확인값과 같아야 합니다.");
        userpwdcheck.value = "";
        userpwdcheck.value.focus();
        return;
    }

    // 5-1) 전화번호 맨앞자리 얻어오기
    let phone1 = document.getElementById("phone1").value;

    // 5-2) 전화번호 중간자리 얻어오기
    let phone2 = document.getElementById("phone2");
    if (phone2.value.trim().length != 3 || isNaN(phone2.value)) {
        alert("전화번호를 정확히 입력해 주세요.");
        phone2.select();
        return;
    }

    // 5-3) 전화번호 끝자리 얻어오기
    let phone3 = document.getElementById("phone3");
    if (phone3.value.trim().length != 4 || isNaN(phone3.value)) {
        alert("전화번호를 정확히 입력해 주세요.");
        phone3.select();
        return;
    }
    let phone = phone1 + phone2.value + phone3.value;
    // alert(phone);


    // 6-1) 이메일 앞자리 얻어오기
    //      각 메일 업체의 아이디 정책을 확인할 수 없기에 기본적인 것만 확인 ex 입력여부
    let email1 = document.getElementById("email1");
    if (email1.value.trim().length == 0) {
        alert("이메일을 정확히 입력해주세요.");
        email1.select();
        return;
    }

    // 6-2) 이메일 콤보 상자 처리 하는 부분은 다른 함수로 전이. (이메일 뒷자리 선택 시 자동 채우기를 위해)

    // 6-3) 이메일 뒷자리 얻어오기
    let email3 = document.getElementById("email3");
    if (email3.value.trim().length == 0) {
        alert("이메일을 정확히 입력해주세요.");
        email3.select();
        return;
    }
    let email = email1.value + "@" + email3.value;

    // 7) 주소+상세 주소 얻어오기
    let addr1 = document.getElementById("addr1").value;
    let addr2 = document.getElementById("addr2");
    if (addr2.value.trim().length == 0) {
        alert("상세주소를 입력해주세요.");
        addr2.focus();
        return;
    }
    let addr = `${addr1} ${addr2.value}`;

    // 8) 알게된 경로 얻어오기
    /*
        document.querySelectorAll('input[type="checkbox"]:checked')
            - 체크된 체크박스 value를 모두 가져옴. 
            - 그러나 카카오톡 동의도 포함되기에 문제 발생. => class명을 추가
    */
    //  input이름
    let p = document.querySelectorAll('input[name="path"]:checked'); //== 'input[type="checkbox"].path:checked'
    let path = '';
    p.forEach(function (item) {
        path += item.value + " ";
    });
    // alert(path);

    // 9-1) 이메일 수신여부 확인
    let receive = document.querySelector('input[type="radio"].receive:checked').value; // == 'input[name="receive"]:checked'
    // alert(receive);

    // 9-2) 카카오톡 수신 동의 확인
    let kakao = document.querySelector('input[name="kakao_agree"]:checked');
    let kakaoreceive = false;
    if (kakao == null) {
        kakaoreceive = false;
    } else {
        kakaoreceive = true;
    }
    //alert(kakaoreceive);

    //최종결과물을 출력하는 코드
    let finalResult = '<ul>';
    finalResult += `<li>이름 : ${username.value}</li>`;
    finalResult += `<li>아이디 : ${userid.value}</li>`;
    finalResult += `<li>비밀번호 : ${userpwd.value}</li>`;
    finalResult += `<li>연락처 : ${phone}</li>`;
    finalResult += `<li>이메일 : ${email}</li>`;
    finalResult += `<li>주소 : ${addr}</li>`;
    finalResult += `<li>사이트를 알게된 경로 : ${path}</li>`;
    finalResult += `<li>이메일 수신 동의 : ${(receive == "true") ? "동의" : "비동의"}</li>`;
    finalResult += `<li>카카오톡 수신 동의 : ${(kakaoreceive) ? "동의" : "비동의"}</li>`;
    finalResult += '</ul>';
    document.getElementById('final').innerHTML = finalResult;
}


//이메일 중간부분의 상태가 변화하면 발생하는 event handler 함수
function emailCheck() {
    // 6-2) 이메일 뒷자리 얻어오기
    //      직접입력 시 값유무 확인, 박스 선택 시 자동 채우기
    let email2 = document.getElementById("email2");
    let email3 = document.getElementById("email3");
    if (email2.value.trim().length != 0) {
        email3.value = email2.value;
    } else { // email2의 직접입력의 value는 ""로 지정해두었기에...
        email3.value = ""; // 기존에 있던 값 날리기
        email3.focus();
    }
}