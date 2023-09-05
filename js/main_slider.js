let swiper = new Swiper(".main_slider", {
  direction: "horizontal",
  slidesPerView: 1,
  mousewheel: true,
  freeMode: true,
  autoHeight: true,
  // Responsive Direction
  direction: getDirection(),
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      freeMode: false,
      autoHeight: false,
    },
  },
});

/* Swiper RESPONSIVE POINT SETTINGS */
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 767 ? "vertical" : "horizontal";
  return direction;
}

const footerSlide = doc.getElementById("footer"); // 감지 대상
/** 위치 변경 대상 */
const headerTarget = doc.querySelector("header"),
  bulletTarget = doc.querySelector(".swiper-pagination"),
  menuTarget = doc.querySelector("menu");
const footerChecker = { attributes: true, childList: true, subtree: true }; // 감지 요소
const checkerCallback = () => {
  /* 클래스 여부에 따라 -40vw로 밀거나 0으로 되돌림 */
  classinnerWidth = doc.body.clientWidth;
  if (
    footerSlide.classList.contains("swiper-slide-active") &&
    classinnerWidth > 767
  ) {
    menuTarget.style.left = "-40vw";
    headerTarget.style.left = "-40vw";
    bulletTarget.style.left = "-40vw";
  } else {
    menuTarget.style.left = 0;
    headerTarget.style.left = 0;
    bulletTarget.style.left = 0;
  }
};
/* 콜백 감지기 인스턴스 생성 */
const footerObserver = new MutationObserver(checkerCallback);

/* 설정한 타겟, 설정한 요소에 대한 감지 시작 */
footerObserver.observe(footerSlide, footerChecker);
