// 선택자를 변수에 담아서 사용해본다.
let btn = document.getElementById("btn");
let btnStyle = document.getElementById("btn").style;

function getDisabled() {
    btn.disabled = true;
    btnStyle.cursor = "none";
    btnStyle.background = "initial";
}
function getAbled() {
    btn.disabled = false;
    btnStyle.cursor = "pointer";
    btnStyle.background = "pink";
}
// 변수의 값은 콘솔에서 확인한다.
let result;

function getType() {
    result = "타입: " + document.getElementById("btn").type;
}
function getId() {
    result = "아이디: " + document.getElementById("btn").id;
}
function getClass() {
    result = "클래스: " + document.getElementById("btn").className;
}
function getName() {
    result = "이름: " + document.getElementById("btn").name;
}
function getValue() {
    result = "값: " + document.getElementById("btn").value;
}