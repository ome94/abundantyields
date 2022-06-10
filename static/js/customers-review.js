const slider2Elm = document.querySelector(".slider-container2 .slider2");
const btn2Left = document.querySelector(".slider-container2 .btn2-left");
const btn2Right = document.querySelector(".slider-container2 .btn2-right");

const numberSlider2Boxs = slider2Elm.children.length;
let idxCurrentSlide2 = 0;

// Functions:
function moveSlider2() {
  let leftMargin = (slider2Elm.clientWidth / numberSlider2Boxs) * idxCurrentSlide2;
  slider2Elm.style.marginLeft = -leftMargin + "px";
  console.log(slider2Elm.clientWidth, leftMargin);
}
function moveLeft2() {
  if (idxCurrentSlide2 === 0) idxCurrentSlide2 = numberSlider2Boxs - 1;
  else idxCurrentSlide2--;

  moveSlider2();
}
function moveRight2() {
  if (idxCurrentSlide2 === numberSlider2Boxs - 1) idxCurrentSlide2 = 0;
  else idxCurrentSlide2++;

  moveSlider2();
}

// Event Listeners:
btn2Left.addEventListener("click", moveLeft2);
btn2Right.addEventListener("click", moveRight2);
window.addEventListener("resize", moveSlider2);