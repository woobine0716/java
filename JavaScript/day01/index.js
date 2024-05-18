// Event

// const button = document.createElement("button");
// button.innerText = "누르지 마세요";

// button.addEventListener("click", () => {
//   window.alert("누르지 말라고");
// });
// document.body.appendChild(button);

// const button = document.createElement("button");
// button.innerText = "누르지 마세요";

// button.addEventListener("mouseover", () => {
//   window.alert("마우스 올라감");
// });
// document.body.appendChild(button);

// div 태그 - width:100px;, height:100px;, bg: red;
// - 클릭을 하면, bg:blue
// ("") < 안에는 만들고 싶은 거 () < 안에는 만들어져있는 거

// const box = document.createElement("div");
// box.innerText =
//   "아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ";
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = "red";
// box.style.color = "white";
// box.addEventListener("mouseover", () => {
//   box.style.backgroundColor = "blue";
// });
// document.body.appendChild(box);

// button 태그 만들고, '파랑상자'
// event 클릭을 하면 html div w:100, h:100, bg:blue 생김
// ㄱ

// const button = document.createElement("button");
// button.innerText = "그냥상자";

// button.addEventListener("click", () => {
//   const box = document.createElement("div");
//   button.innerText = "파랑 상자";
//   box.style.width = "100px";
//   box.style.height = "100px";
//   button.style.backgroundColor = "blue";
// });
// document.body.appendChild(button);
// document.body.appendChild(box);

// const button = document.createElement("button");
// button.innerText = "누르지 마세요.";

// 버튼을 3가지 만들고, 각각 이름은 각 색상의 이름
// div: 100px, 100px, bg:black
// 각각 클릭을 하면, bg: 위의 div태그의 bg가 클릭한 이름의 색깔로 변경하기

// const bt_PETER_RIVER = document.createElement("button");
// const bt_BELIZE_HOLE = document.createElement("button");
// const bt_AMETHYST = document.createElement("button");
// bt_PETER_RIVER.innerText = "PETER_RIVER";
// bt_BELIZE_HOLE.innerText = "BELIZE_HOLE";
// bt_AMETHYST.innerText = "AMETHYST";
// const box = document.createElement("div");
// box.style.backgroundColor = "black";
// box.style.width = "100px";
// box.style.height = "100px";
// box.addEventListener("click", () => {
//   bt_PETER_RIVER.style.backgroundColor = "#3498db";
//   bt_BELIZE_HOLE.style.backgroundColor = "#2980b9";
//   bt_AMETHYST.style.backgroundColor = "#9b59b6";
// });
// document.body.appendChild(bt_PETER_RIVER);
// document.body.appendChild(bt_BELIZE_HOLE);
// document.body.appendChild(bt_AMETHYST);
// document.body.appendChild(box);

// div > w:100 h:100 border: 1px solid black bg:white
// button > 내용: 색깔 추가,
// button event > prompt로 물어봄 색깔 헥사코드 입력

// button[#123124]을 가진 색깔이 나타남 div의 bg가 변경됨

const button = document.createElement("button");
button.innerText = "색깔 추가";
button.addEventListener("click", () => {
  const hex = prompt("헥사코드 입력");
  hex.addEventListener("keyboard", () => {});
});
const box = document.createElement("div");
box.style.backgroundColor = "white";
box.style.border = "1px solid black";
box.style.width = "100px";
box.style.height = "100px";
