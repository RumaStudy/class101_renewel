const imgOption = doc.querySelectorAll("#earning > option"), // <option>
  userSelection = doc.getElementById("earning"); // <select>

// 객체 이미지 배열 (imgOption의 value값과 동일)
const all_of_it = [
    "img/class_course/courseListItem1.png",
    "img/class_course/courseListItem2.jpg",
    "img/class_course/courseListItem3.jpg",
    "img/class_course/courseListItem4.jpg",
    "img/class_course/courseListItem5.png",
    "img/class_course/courseListItem1.png",
    "img/class_course/courseListItem2.jpg",
    "img/class_course/courseListItem3.jpg",
    "img/class_course/courseListItem4.jpg",
    "img/class_course/courseListItem5.png",
    "img/class_course/courseListItem6.jpg",
    "img/class_course/courseListItem7.jpg",
    "img/class_course/courseListItem8.jpg",
    "img/class_course/eikyrona.jpg",
    "img/class_course/gorani.png",
    "img/class_course/courseListItem6.jpg",
    "img/class_course/courseListItem7.jpg",
    "img/class_course/courseListItem8.jpg",
    "img/class_course/eikyrona.jpg",
    "img/class_course/gorani.png",
    "img/class_course/kimegg.png",
    "img/class_course/kimyj.jpg",
    "img/class_course/jsnodejs.jpg",
    "img/class_course/moonlightsea.jpg",
    "img/class_course/clockintheir.png",
    "img/class_course/kimegg.png",
    "img/class_course/kimyj.jpg",
    "img/class_course/jsnodejs.jpg",
    "img/class_course/moonlightsea.jpg",
    "img/class_course/clockintheir.png",
  ],
  creative = [
    "img/class_course/clockintheir.png",
    "img/class_course/original_(3).jpg",
    "img/class_course/original_(4).jpg",
    "img/class_course/original.jpg",
    "img/class_course/original.png",
    "img/class_course/clockintheir.png",
    "img/class_course/original_(3).jpg",
    "img/class_course/original_(4).jpg",
    "img/class_course/original.jpg",
    "img/class_course/original.png",
    "img/class_course/pjgeun.png",
    "img/class_course/pturtle.jpg",
    "img/class_course/shimjh.jpg",
    "img/class_course/whacker.png",
    "img/class_course/yotddi.png",
    "img/class_course/pjgeun.png",
    "img/class_course/pturtle.jpg",
    "img/class_course/shimjh.jpg",
    "img/class_course/whacker.png",
    "img/class_course/yotddi.png",
    "img/class_img/main_hot1.jpg",
    "img/class_img/main_hot2.png",
    "img/class_img/main_hot3.png",
    "img/class_img/main_hot4.png",
    "img/class_img/main_hot5.png",
    "img/class_img/main_hot1.jpg",
    "img/class_img/main_hot2.png",
    "img/class_img/main_hot3.png",
    "img/class_img/main_hot4.png",
    "img/class_img/main_hot5.png",
  ],
  make_money = [
    "img/class_img/main_hot6.png",
    "img/class_img/main_hot7.png",
    "img/class_img/main_hot8.png",
    "img/class_img/main_hot9.jpg",
    "img/class_img/main_hot10.png",
    "img/class_img/main_hot6.png",
    "img/class_img/main_hot7.png",
    "img/class_img/main_hot8.png",
    "img/class_img/main_hot9.jpg",
    "img/class_img/main_hot10.png",
    "img/class_img/main_new1.png",
    "img/class_img/main_new2.png",
    "img/class_img/main_new3.jpg",
    "img/class_img/main_new4.jpg",
    "img/class_img/main_new5.png",
    "img/class_img/main_new1.png",
    "img/class_img/main_new2.png",
    "img/class_img/main_new3.jpg",
    "img/class_img/main_new4.jpg",
    "img/class_img/main_new5.png",
    "img/class_img/main_new6.jpg",
    "img/class_img/main_new7.jpg",
    "img/class_img/main_new8.jpg",
    "img/class_img/main_new9.jpg",
    "img/class_img/main_new10.jpg",
    "img/class_img/main_new6.jpg",
    "img/class_img/main_new7.jpg",
    "img/class_img/main_new8.jpg",
    "img/class_img/main_new9.jpg",
    "img/class_img/main_new10.jpg",
  ],
  work_out = [
    "img/class_img/new1.jpg",
    "img/class_img/new2.jpg",
    "img/class_img/new3.png",
    "img/class_img/new4.png",
    "img/class_img/new5.jpg",
    "img/class_img/new1.jpg",
    "img/class_img/new2.jpg",
    "img/class_img/new3.png",
    "img/class_img/new4.png",
    "img/class_img/new5.jpg",
    "img/class_img/popular1.jpg",
    "img/class_img/popular2.jpg",
    "img/class_img/popular3.png",
    "img/class_img/popular4.png",
    "img/class_img/popular5.png",
    "img/class_img/popular1.jpg",
    "img/class_img/popular2.jpg",
    "img/class_img/popular3.png",
    "img/class_img/popular4.png",
    "img/class_img/popular5.png",
    "img/class_img/special1.png",
    "img/class_img/special2.png",
    "img/class_img/special3.png",
    "img/class_img/special4.png",
    "img/class_img/special5.png",
    "img/class_img/special1.png",
    "img/class_img/special2.png",
    "img/class_img/special3.png",
    "img/class_img/special4.png",
    "img/class_img/special5.png",
  ],
  foreign = [
    "img/class_course/yotddi.png",
    "img/class_img/popular3.png",
    "img/class_img/popular4.png",
    "img/class_img/popular5.png",
    "img/class_course/original.png",
    "img/class_course/yotddi.png",
    "img/class_img/popular3.png",
    "img/class_img/popular4.png",
    "img/class_img/popular5.png",
    "img/class_course/original.png",
    "img/class_course/pjgeun.png",
    "img/class_course/pturtle.jpg",
    "img/class_img/main_hot9.jpg",
    "img/class_img/main_hot10.png",
    "img/class_img/main_new1.png",
    "img/class_course/pjgeun.png",
    "img/class_course/pturtle.jpg",
    "img/class_img/main_hot9.jpg",
    "img/class_img/main_hot10.png",
    "img/class_img/main_new1.png",
    "img/class_img/main_new2.png",
    "img/class_course/courseListItem1.png",
    "img/class_course/courseListItem2.jpg",
    "img/class_course/courseListItem5.png",
    "img/class_course/courseListItem6.jpg",
    "img/class_img/main_new2.png",
    "img/class_course/courseListItem1.png",
    "img/class_course/courseListItem2.jpg",
    "img/class_course/courseListItem5.png",
    "img/class_course/courseListItem6.jpg",
  ],
  for_kids = [
    "img/class_img/main_hot8.png",
    "img/class_img/main_hot9.jpg",
    "img/class_img/main_hot10.png",
    "img/class_img/main_new1.png",
    "img/class_course/courseListItem8.jpg",
    "img/class_img/main_hot8.png",
    "img/class_img/main_hot9.jpg",
    "img/class_img/main_hot10.png",
    "img/class_img/main_new1.png",
    "img/class_course/courseListItem8.jpg",
    "img/class_course/moonlightsea.jpg",
    "img/class_course/gorani.png",
    "img/class_course/courseListItem1.png",
    "img/class_course/yotddi.png",
    "img/class_course/eikyrona.jpg",
    "img/class_course/moonlightsea.jpg",
    "img/class_course/gorani.png",
    "img/class_course/courseListItem1.png",
    "img/class_course/yotddi.png",
    "img/class_course/eikyrona.jpg",
    "img/class_img/popular5.png",
    "img/class_img/main_new2.png",
    "img/class_course/courseListItem1.png",
    "img/class_course/courseListItem2.jpg",
    "img/class_course/courseListItem5.png",
    "img/class_img/popular5.png",
    "img/class_img/main_new2.png",
    "img/class_course/courseListItem1.png",
    "img/class_course/courseListItem2.jpg",
    "img/class_course/courseListItem5.png",
  ];
const allArray = {
  all_of_it: all_of_it,
  creative: creative,
  make_money: make_money,
  work_out: work_out,
  foreign: foreign,
  for_kids: for_kids,
};
// 금액 배열
const moneyAccount = [
  " 3,864,865 ",
  " 3,734,066 ",
  " 5,445,551 ",
  " 3,762,055 ",
  " 4,748,963 ",
  " 3,251,862 ",
];
const moneyInput = doc.getElementById("earn_money");
moneyInput.innerHTML = `${moneyAccount[0]}원`;
function moneyChage(idx) {
  moneyInput.innerHTML = `${moneyAccount[idx]}원`;
}
/** 슬라이드 변수 */
const sliderTargeting = doc.querySelectorAll(".main_moving_target"); // 움직일 타겟
const cloneAppender = doc.querySelectorAll(".main_slider_wrapper"); // 클론 붙일 타겟
/** 슬라이드 클론 */
const cloneMaking = sliderTargeting.forEach((things, idx) => {
  let clones = things.cloneNode(true);
  clones.classList.add("clone");
  if (cloneAppender[idx].classList.contains("upper")) {
    cloneAppender[idx].prepend(clones);
  } else {
    cloneAppender[idx].appendChild(clones);
  }
});
/** selection 변화 감지 */
userSelection.addEventListener("change", (e) => {
  let userSelectOption =
    userSelection.options[userSelection.selectedIndex].value;
  let selectResult = allArray[userSelectOption];
  putImg(selectResult);
  moneyChage(userSelection.selectedIndex);
  /** value값에 따라 금액 삽입 */
});
let imgSliderItem = doc.querySelectorAll(".main_moving_target > li");
const finallyMover = doc.querySelectorAll(".main_moving_target");

/** 이미지 삽입 함수 */
function putImg(targetLockDown) {
  targetLockDown.forEach((targeter, indexImg) => {
    imgSliderItem[indexImg].style.backgroundImage = `url(${targeter})`;
  });
}
/** 초기 이미지 삽입 */
putImg(allArray["all_of_it"]);

/** 슬라이드 이동 함수 */
let staticMovingPoints = -100; // 정방향 포인트
let reverseMovingPoints = -1; // 역방향 포인트
const staticWarpPointer = 0; // 정방향 포인트
const warpPointer = 100; // 역방향 포인트
function mover(idx) {
  if (finallyMover[idx].classList.contains("upper")) {
    if (reverseMovingPoints <= -warpPointer) {
      reverseMovingPoints = 0;
    } else {
      reverseMovingPoints -= 0.01;
    }
    finallyMover[idx].style.transform = `translateY(${reverseMovingPoints}%)`;
  } else {
    if (staticWarpPointer <= staticMovingPoints) {
      staticMovingPoints = -100;
    } else {
      staticMovingPoints += 0.01;
    }
    finallyMover[idx].style.transform = `translateY(${staticMovingPoints}%)`;
  }
}
finallyMover.forEach((things, idx) => {
  let moverInterval = setInterval(() => {
    mover(idx);
  }, 20);
});

/** 각 부분 등장 함수 모음 */
let abY = window.pageYOffset; // 윈도우 상대 좌표

/* Creator Bar 등장 */
const creatorBar = doc.querySelector(".creator_bar"); // 타겟
let selecterGet = doc.querySelector(".main_slider_wrap");
let selectorLocate = selecterGet.getBoundingClientRect().y; // target 상대 좌표

let absoluteBarPosition = abY + selectorLocate; // target 절대 좌표

let creatorTitle = doc.querySelector(".title_box");
let titleLocationValue = creatorTitle.getBoundingClientRect().y;
const mainVisual = doc.querySelector(".main_visual");
let aboluteTitlePosition = abY + titleLocationValue;

const swiperTargeting = doc.querySelector(".swipe_area");
let swiperTargetingLocation = creatorBar.getBoundingClientRect().y;
let absoluteSwiperPosition = abY + swiperTargetingLocation;

const appearPointForStarter1 = doc.querySelector(".title_and_desc");
let apperPointer1 = appearPointForStarter1.getBoundingClientRect().y;
let absolutePositionForStarter1 = abY + apperPointer1;
const forStarter = doc.querySelectorAll(".desc_for_starter");
const appearPointForStarter2 = doc.querySelector(".starter_area > h1");
let apperPointer2 = appearPointForStarter2.getBoundingClientRect().y;
let absolutePositionForStarter2 = abY + apperPointer2;
const appearPointForStarter3 = doc.querySelector(".starter_title");
let apperPointer3 = appearPointForStarter3.getBoundingClientRect().y;
let absolutePositionForStarter3 = apperPointer3 + abY;

const listTargeter = doc.querySelector(".starter_area > button");
let listTargeterPosition = listTargeter.getBoundingClientRect().y;
let absoluteBtnPosition = abY + listTargeterPosition;
const readyList = doc.querySelector(".ready_for_creator > ul");
const faqPoint = doc.querySelector(".appearing_target");
let faqPosition = faqPoint.getBoundingClientRect().y;
let absoluteFaqPosition = abY + faqPosition;
const faqList = doc.querySelector(".faq > ul");

/** 요소 표시 함수 */
function fadeInMaker(num, name) {
  let currentScroll = window.pageYOffset;
  if (currentScroll > num) {
    name.classList.add("come");
  } else {
    name.classList.remove("come");
  }
}

/** 스크롤 감지 */
document.addEventListener("scroll", () => {
  fadeInMaker(aboluteTitlePosition, mainVisual);
  fadeInMaker(absoluteBarPosition, creatorBar);
  fadeInMaker(absolutePositionForStarter1, forStarter[0]);
  fadeInMaker(absolutePositionForStarter2, forStarter[1]);
  fadeInMaker(absolutePositionForStarter3, forStarter[2]);
  fadeInMaker(absoluteBtnPosition, readyList);
  fadeInMaker(absoluteFaqPosition, faqList);
  /* Swiper */
  let currentScroll = window.pageYOffset;
  if (currentScroll < absoluteSwiperPosition) {
    swiperTargeting.classList.add("come");
  } else {
    swiperTargeting.classList.remove("come");
  }
});

/** Ready For Creator */
const faqMenu = doc.querySelectorAll(".faq > ul > li");
faqMenu.forEach((things) => {
  things.addEventListener("click", (e) => {
    e.target.classList.toggle("on");
    let targetsDesc = e.target.nextElementSibling;
    if (targetsDesc.style.maxHeight) {
      targetsDesc.style.maxHeight = null;
    } else {
      targetsDesc.style.maxHeight = "200px";
    }
  });
});
