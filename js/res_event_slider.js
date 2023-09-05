const eventBtnNext = doc.querySelector(".res_slider_page_btn.next"),
  eventBtnPrev = doc.querySelector(".res_slider_page_btn.prev"),
  resSliderMTarget = doc.querySelector(".res_moving_target"),
  resEventList = doc.querySelectorAll(".res_event_list");

/* 슬라이더 내부 item 클론 삽입 */
let makingResClone1 = resEventList[0].cloneNode(true),
  makingResClone2 = resEventList[3].cloneNode(true);
makingResClone1.classList.add("clone");
makingResClone2.classList.add("clone");
resSliderMTarget.appendChild(makingResClone1);
resSliderMTarget.prepend(makingResClone2);

/* 세부 수치 조정 */
let startSliderNum = -16.66,
  staticWays = 100,
  currentSlideIdx = 1;
const prevNum = +1;

/** 이벤트 슬라이더 오른쪽으로 움직이기 */
function resSliderMove() {
  if (currentSlideIdx === 4) {
    currentSlideIdx++;
    resSliderMTarget.style.transform = `translateX(${
      startSliderNum * currentSlideIdx
    }%)`;
    currentSlideIdx = 1;
    resSliderMTarget.classList.add("reset");
    resSliderMTarget.style.transform = `translateX(${
      startSliderNum * currentSlideIdx
    }%)`;
  } else {
    resSliderMTarget.classList.remove("reset");
    currentSlideIdx++;
    resSliderMTarget.style.transform = `translateX(${
      startSliderNum * currentSlideIdx
    }%)`;
  }
}

/** 2.5초마다 슬라이더 */
let resSliderMoverTimer = setInterval(() => {
  resSliderMove();
}, 2500);

/* 슬라이더 버튼 클릭 이벤트 */
eventBtnPrev.addEventListener("click", () => {
  if (currentSlideIdx <= 1) {
    resSliderMTarget.classList.add("reset");
    currentSlideIdx = 4;
    resSliderMTarget.style.transform = `translateX(${
      startSliderNum * currentSlideIdx
    }%)`;
  } else {
    resSliderMTarget.classList.remove("reset");
    currentSlideIdx--;
    resSliderMTarget.style.transform = `translateX(${
      startSliderNum * currentSlideIdx
    }%)`;
  }
});

eventBtnNext.addEventListener("click", () => {
  resSliderMove();
});
