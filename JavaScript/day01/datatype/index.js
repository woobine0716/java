// const 변수이름 = 데이터[기본 + 참조];
// 기본 타입 : 숫자, 문자
// 타입 변환
// -1.숫자 타입
// const a = 7(숫자);
// const b = 3.14(숫자);
// const c = 1290234905(숫자);

// -2.문자 타입
// const d = '아메리카노';
// const e = "바닐라라떼";
// const f = `민트초콜렛`;
// const g = `내 최애 음료는: ${e}`;
// console.log(g);

//프롬포트를 이용해서,
//1. 당신의 mbti?
//2. 당신의 최애 음식?
//alert으로 당신의 mbti는 ~~, 최애 음식은 ~~ 이군요!

// const mbti = prompt("당신의 MBTI는?");
// const food = prompt("당신의 최애 음식은?");
// alert("당신의 mbti는 ${mbti}, 최애 음식 ${food}이군요!");

//오늘의 날짜는 무엇인가요?
//오늘의 일정은 무엇인가요?
//오늘의 날짜는 {}이고, {}dmf 하실 예정이시군요!

// const date = prompt("오늘의 날짜는 무엇인가요?");
// const schedule = prompt("오늘의 일정은 무엇인가요?");
// alert(`오늘의 날짜는 ${date}이고, ${schedule}을 하실 예정이시군요!`);

//첫 번째 수 입력
//두 번째 수 입력
// 두 수의 합은 ~~입니다.

// const first = prompt("첫 번째 수 입력:");
// const second = prompt("두 번째 수 입력:");
// alert(`두 수의 합은 ${first + second}입니다.`);

// const numFirst = Number(first);
// const numSecond = Number(second);
// alert(`두 수의 합은 ${numFirst + numSecond} 입니다.`);

//1. 몇살이셈? > 20
// html에 h1태그로된 2005년생이시군요

//2. 정사각형의 한변의 길이 > 10
// html에 정사각형의 넓이는 100입니다.

// const age = prompt("몇살이세요?");
// const numAge = Number(age);
// const ageTag = document.createElement("h1");
// ageTag.innertText = `${2025 - numAge}년생 이군요`;
// document.body.appendChild(ageTag);

const side = prompt("한 변의 길이 입력");
const numSide = Number(side);
const widthTag = document.createElement("h1");
widthTag.innertText = `정사각형의 넓이는 ${numSide * numSide}`;
document.body.appendChild(widthTag);
