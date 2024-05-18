//js가 html을 만들기 위한 장소

//html에서 h1태그를 만들어주세요
// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 수업중";
// document.body.appendChild(h1tag);

//버튼을 만들고, 안의 내용은 클릭! body에 나타내기
// const buttontag = document.createElement("button");
// buttontag.style.backgroundColor = "skyblue";
// buttontag.style.padding = "10px";
// buttontag.style.fontSize = "10px";
// buttontag.style.borderRadius = "10px";
// buttontag.style.color = "red";
// buttontag.style.display = "flex";
// buttontag.style.justifyContent = "center";
// buttontag.style.alignItems = "center";
// buttontag.innerText = "클릭!";
// document.body.appendChild(buttontag);

//prompt로 배경색깔을 물어보고 헥사코드,
//ex red, #red
//div. > width: 100px; height: 100px;, background: red;
// const color = prompt("배경색을 입력하세요.");
// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = color;
// document.body.appendChild(box);

//폰트 색깔 물어보고,
//버튼 안에 들어갈 내용 물어보고
//버튼을 html에 보여주기

// const fontColor = prompt("폰트 색깔을 적어주십쇼");
// const text = prompt("버튼 안에 들어갈 내용을 적어주십쇼");
// const button = document.createElement("button");
// button.style.color = fontColor;
// button.innerText = text;
// document.body.appendChild(button);

// const text = document.createElement("h1");
// const prompt = "자바가 너무 어렵다";
// const button = document.createElement("button");
// text.style.color = "red";
// text.style.fontSize = "20px";
// button.style.borderRadius = "10px";

//높이 물어보기 주의)100px;
//넓이 물어보기
//배경색 물어보기
//안에 들어갈 내용 물어보기
//div 태그로 위의 내용을 고려해서 나타내기

const height = prompt("높이를 적어주세요.");
const width = prompt("넓이를 적어주세요.");
const bg = prompt("배경색을 적어주세요.");
const text = prompt("내용을 적어주세요.");
const box = document.createElement("div");
document.body.appendChild(box);
div.style.width = width;
div.style.height = height;
div.style.backgroundColor = bg;
div.innerText = text;
