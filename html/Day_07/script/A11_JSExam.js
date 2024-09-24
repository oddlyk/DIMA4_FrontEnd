// 서버에서 받은 데이터
let receivedData = [
    { id: '001', name: '홍길동', license: '정보처리기사' },
    { id: '002', name: '임꺽정', license: '빅데이터 분석기사' },
    { id: '003', name: '전우치', license: 'ADsP' },
    { id: '004', name: '손오공' },
    { id: '005', name: '사오정', license: '운전면허증' },
];

// 서버에서 받은 데이터를 분해해 table로 만들어 html 문서 내에 출력하시오.
// 단, 자격증이 없는 사람은 '없음'이라고 나오게 할 것.
let data = `
<table>
<tr>
<th>아이디</th>
<th>이름</th>
<th>보유자격증</th>
</tr>
`
receivedData.forEach(person => {
    let { id, name, license = "없음" } = person;
    data += `<tr><td>${id}</td><td>${name}</td><td>${license}</td></tr>`;
});
data += "</table>";
document.getElementById("result").innerHTML = data;
// 꾸미기~
let table = document.getElementsByTagName("table");
table[0].style.border = "2px solid rgb(56, 124, 192)";
table[0].style.borderCollapse = "collapse";
table[0].style.textAlign = "center";
let th = document.getElementsByTagName("th");
let td = document.getElementsByTagName("td");
for (let i = 0; i < th.length; ++i) {
    th[i].style.border = "1px solid #eee";
    th[i].style.padding = "4px";
}
for (let i = 0; i < td.length; ++i) {
    td[i].style.border = "1px solid #eee";
    td[i].style.padding = "4px";
}
