// 변수(Variable): 데이터를 기억하는 공간, 닉네임
//since)2015 const 이름 = 데이터 (red, 1000px, 태그) [기억 한 번만]
//since)2015 let 이름 = 데이터 [기억 여러번]
//var 이름 = 데이터 [지구가 멸망해도 쓰지 말기]

// const a = 100;
// a = 200; (x)

// let b = 100;
// b = 200; (o)

// 닝겐: 2+3 = 5 (연산[뇌] + 기억) 가능
// 컴퓨터: 연산[CPU] + 기억[RAM]

// kakao.file[하드디스크]
// RAM[kakao.file] <=> CPU 상호작용

// 변수 이름 문법
// 1. 예약어[키워드] 안됨! ex) const const
// 2. 변수에서 특수문자 안됨 _(언더바) 빼고
// 3. 띄어쓰기 안됨 ex) const mint choco (x) const mintchoco(o)
// 4. 숫자로 시작 안됨 ex) const 1a(x) a1(o)
// 5. 변수이름 중복 안됨

// 변수 이름 국룰
// 1. 의미있는 단어로 사용
// ex) const a(x), const button(x) white_button (o)
// 2. 두 단어 합칠 때, 낙타 표기법, 뱀 표기법 사용
// - 낙타: milkCoffe
// - 뱀: milk_coffe
// 3. 소문자로 시작하기
// const a = 1; // a는 1
// const b = "사이다"; // b는 사이다

// const text = prompt("내용을 입력하세요.");
// const fontColor = prompt("색상을 입력하세요.");
// const fontSize = prompt("폰트 사이즈를 입력하세요.");
// const box = document.createElement("div");
// const button = document.createElement("div");
// document.body.appendChild(box);
// box.innerText = text;
// box.style.color = fontColor;
// box.style.fontSize = fontSize;
// button.style.borderRadius = "10px";

//유저에게 내용과 색깔을 두 개 각각 입력 받고.
//html에 h1~h3태그 각각 3개 만들기
const text = prompt("내용을 입력하세요.");
const fontColor = prompt("색상을 입력하세요.");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
h1.style.color = color;
h2.style.color = color;
h3.style.color = color;
h1.innerText = text;
h2.innerText = text;
h3.innerText = text;
document.body.appendChild("h1");
document.body.appendChild("h2");
document.body.appendChild("h3");
//유저에게 만들고 싶은 태그 물어보고
//원하는 안의 내용도 물어보고
//원하는 폰특색깔 만들고,
//html 만들기
const tag = prompt("태그 입력");
const text1 = prompt("내용 입력");
const color = prompt("폰트 색 입력");
const madeTag = document.createElement("tag");
madeTag.innerText = text1;
madeTag.style.color = color;
document.body.appendChild(madeTag);
