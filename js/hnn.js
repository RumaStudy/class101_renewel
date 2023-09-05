/* 변수 지정 */
const hSlider = doc.getElementById("hot_slider"),
  nSlider = doc.getElementById("new_slider");

let hStart = -1850,
  nStart = 0;
const hnnSlideItemsWidth = 185;

function hSliderMover() {
  if (hStart === 0) {
    hSlider.style.transform = "translateX(0px)";
    hStart = -1850;
  } else {
    hSlider.style.transform = `translateX(${hStart}px)`;
    hStart++;
  }
}
function nSliderMover() {
  if (nStart === -1850) {
    nSlider.style.transform = `translateX(0px)`;
    nStart = 0;
  } else {
    nSlider.style.transform = `translateX(${nStart}px)`;
    nStart--;
  }
}
let hSliderInterval = setInterval(hSliderMover, 20);
let nSliderInterval = setInterval(nSliderMover, 20);
