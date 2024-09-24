/**
 * DOM에 접근해 객체 받아오기
 * 
 * 1) getElementById("아이디값")
 * 
 * 2) getElementByTagName("태그의 종류") : 해당 태그명을 가진 데이터들을 HTMLCollection 형태의 배열로 반환
 * 3) getElementsByClassName("클래스명") : 해당 클래스명을 가진 데이터들을 HTMLCollection 형태의 배열로 반환
 * 
 * 4) querySelector("CSS 셀렉터 특징") : CSS의 셀렉터를 이용해 그대로 가져오는 것. 
 *      - 문서 내에 CSS 선택자에 맞는 데이터 한 개만 반환.
 *      - 해당 특징을 가진 요소를 HTMLParagraphElement로 받아옴.
 * 5) querySelectorAll("CSS 셀렉터 특징") : CSS의 셀렉터를 이용해 그대로 가져오는 것.
 *      - 문서 내에 CSS 선택자에 맞는 데이터 여러개(배열) 반환.
 *      - 해당 특징을 가진 요소를 NodeList로 받아옴.
 * 
 * 6-1) getAttribute("속성명") : HTML 요소의 특정 속성값을 조회
 * 6-2) setAttribute("속성명", 값) : HTML 요소의 특정 속성값을 치환
 * 
 * [참고] 
 * - getElementsByClassName()는 HTMLCollection 타입으로 반환하나, querySelectorAll()은 NodeList 타입으로 반환.
 *      - 둘 모두 리스트 오픈 형태[n]로 열면 해당 요소의 타입 확인 가능.
 */

// 1) getElementById("아이디값")
console.log('---------- getElementById("아이디값")');
let writer = document.getElementById("writer");
console.log(writer);

// 2) getElementsByTagName("태그의 종류")
console.log('---------- getElementByTagName("태그의 종류")');
let tags = document.getElementsByTagName("p");
console.log(tags.length);
console.log(tags);

// 3) getElementsByClassName("클래스명")
console.log('---------- getElementsByClassName("클래스명")');
let poem = document.getElementsByClassName("poem");
console.log(poem.length);
console.log(poem);
console.log("poem[0]의 내용: " + poem[0]);

// 4) querySelector("CSS 셀렉터 특징") : CSS의 셀렉터를 이용해 그대로 가져오는 것. 오로지 1개
console.log('---------- querySelector("CSS 셀렉터 특징")');
let poem2 = document.querySelector(".poem");
console.log("poem2의 길이: " + poem2.length); // undefined
console.log("poem2의 내용: " + poem2);


// 5) querySelectorAll("CSS 셀렉터 특징") : CSS의 셀렉터를 이용해 그대로 가져오는 것. 여러개 가능
console.log('---------- querySelectorAll("CSS 셀렉터 특징")');
let poem3 = document.querySelectorAll(".poem");
console.log("poem3의 길이: " + poem3.length); // undefined
console.log("poem3의 내용: " + poem3);
console.log("poem3[0]의 내용: " + poem3[0]); // HTMLParagraphElement
poem3[0].style.color = 'red';
poem3[1].style.backgroundColor = 'cyan';


// 6-1) getAttribute("속성명") : HTML 요소의 특정 속성값을 조회
console.log("---------- getAttribute('속성명')");
let value = document.getElementById("image").getAttribute("src");
console.log(value);
console.log(document.getElementById("image").getAttribute("alt"));

// 6-2) setAttribute("속성명", 값) : HTML 요소의 특정 속성값을 치환
console.log('---------- setAttribute("속성명")');
document.getElementById("change").addEventListener('click', function () { // 이벤트 소스는 버튼임!
    let img = document.getElementById("image");
    img.setAttribute("src", "../images/sleeping_owl.jpg");
    img.setAttribute("alt", "자는 부엉이");
});


// [번외] 이벤트 소스가 그림
document.getElementById("image").addEventListener('mouseenter', function () { // mouseenter 마우스 커서를 위로 올리면...
    let img = document.getElementById("image");
    img.setAttribute("src", "../images/sleeping_owl.jpg");
    img.setAttribute("alt", "자는 부엉이");
});
document.getElementById("image").addEventListener('mouseleave', function () { // mouseleave 마우스 커서를 위에서 나가면...
    let img = document.getElementById("image");
    img.setAttribute("src", "../images/rose.png");
    img.setAttribute("alt", "장미꽃");
});