const curtain = doc.querySelector("#loading_animation"),
  progressBar = doc.querySelector(".progress_bar");
const circleWrap = doc.querySelector(".circle_wrap");
let bar = doc.querySelector(".p_bar"),
  num = doc.querySelector(".p_num");
doc.addEventListener("click", () => {
  circleWrap.classList.add("go");
  progressBar.classList.add("go");
  setTimeout(() => {
    let startNum = 0;
    let barAni = setInterval(() => {
      startNum++;
      let barResult = -100 + startNum;
      if (startNum <= 100) {
        bar.style.transform = `translateX(${barResult}%)`;
        num.innerHTML = `${startNum}%`;
      } else {
        clearInterval(barAni);
        startNum = 100;
      }
    }, 20);
  }, 1200);
  setTimeout(() => {
    curtain.classList.add("close");
  }, 4000);
  let closingFunc = setTimeout(() => {
    curtain.style.zIndex = "-100";
    clearTimeout(closingFunc);
  }, 6300);
});
