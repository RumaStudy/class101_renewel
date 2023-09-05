let currentPage = 1; // 현재 페이지 표시 위치
const totalPage = doc.querySelectorAll(".course_poster > div").length, // 총 게시글 수
  perPage = 9, // 장당 게시글 수
  pageCount = totalPage / perPage, // 페이지네이션 수
  createArea = doc.querySelector(".course_numpage"), //페이지네이션 버튼 생성할 위치
  courseDiv = doc.querySelectorAll(".course_poster>div"); // 각 포스트 (length = 90 / 10페이지 분량)

/** 페이지네이션 버튼 생성 */
for (let i = 1; i <= pageCount; i++) {
  createArea.innerHTML += `<div class="course_page_btn"><a href="#lnb">${i}</a></div>`;
}

let courses = [...courseDiv]; // HTML콜렉션 배열화
courses.forEach((things, thingsIdx) => {
  things.style.animationDelay = `${(thingsIdx % 9) * 200}ms`;
});
/* 
-- 할 일 --

n ~ n+8 (9개) 리스트를 표시하기
표시하기 위해 사용할 명령어 Slice()

1: 1 ~ 9 == 0 ~ 8
2: 10 ~ 18 == 9 ~ 17
3: 19 ~ 27 == 18 ~ 26
4: 28 ~ 36
9 * 0 +1 
9 * 1 +1 
9 * 2 +1 

currentPage = 1
start = 9 * n == idx
end = start + 8

이동한 후 start = end + 1
(n+8) +1 ~ n+8
*/

const courseBtn = doc.querySelectorAll(".course_page_btn > a"); // 숫자 버튼

// 초기화 (전체 display: none 후, 1~9까지 표기)
const resetCoursePage = function () {
  courses.forEach((posts, idx) => {
    courseBtn[0].classList.add("clicked");
    if (idx < 9) {
      posts.style.display = "block;";
    } else {
      posts.style.display = "none";
    }
  });
};
resetCoursePage();

/** 숫자 버튼 클릭 시 함수 ( 페이지 이동 ) */
courseBtn.forEach((numPageBtn, indexPage) => {
  numPageBtn.addEventListener("click", (e) => {
    let startPageNum = indexPage * 9;
    let endPageNum = startPageNum + 9;
    courseDisplay(startPageNum, endPageNum);
    e.target.classList.add("clicked");
  });
});

/** 전체 리스트 숨김 처리 함수 */
function displayNone() {
  courseBtn.forEach((wholeThings) => {
    wholeThings.classList.remove("clicked");
  });
  courses.forEach((pageThings) => {
    pageThings.style.display = "none";
  });
}

// 리스트 재로딩 함수
function courseDisplay(starter, ender) {
  let displayTarget = courses.slice(starter, ender); // 배열 재정립 ( slice() )
  displayNone();
  displayTarget.forEach((showIt) => {
    showIt.style.display = "block";
  });
}
const nextPageBtn = doc.querySelector(".next_page_btn"), // 다음 페이지
  prevPageBtn = doc.querySelector(".prev_page_btn"); // 이전 페이지

// Next, Prev 클릭시 함수
nextPageBtn.addEventListener("click", () => {
  let currentPage = doc.querySelector(".clicked").innerText * 1;
  let startPageNum = currentPage * 9;
  let endPageNum = startPageNum + 9;
  let gotoPage = currentPage;
  console.log(`${gotoPage} 페이지`);
  if (gotoPage == pageCount) {
    alert("마지막 페이지 입니다.");
  } else {
    courseBtn.forEach((allthings) => {
      allthings.classList.remove("clicked");
    });
    courseDisplay(startPageNum, endPageNum);
    courseBtn[gotoPage].classList.add("clicked");
  }
});

prevPageBtn.addEventListener("click", () => {
  let currentPage = doc.querySelector(".clicked").innerText * 1;
  let startPageNum = currentPage * 9;
  let endPageNum = startPageNum + 9;
  let gotoPage = currentPage - 2;
  console.log(`${gotoPage} 페이지`);
  if (gotoPage <= -1) {
    alert("마지막 페이지입니다");
  } else {
    courseBtn.forEach((allthings) => {
      allthings.classList.remove("clicked");
      courseDisplay(startPageNum, endPageNum);
      courseBtn[gotoPage].classList.add("clicked");
    });
  }
});

/* LNB 변수 지정 */
const courseLNB = doc.getElementById("lnb"),
  lnbTarget = doc.querySelectorAll(".can_hover > .lnb_menu > ul"),
  hoverTarget = doc.querySelectorAll(".can_hover");
/* LNB 내리기 */
lnbTarget.forEach((things) => {
  things.classList.remove("downer");
  things.classList.add("upper");
});
hoverTarget.forEach((lockon, lockidx) => {
  lockon.addEventListener("mouseover", (e) => {
    lnbTarget.forEach((allofit) => {
      allofit.classList.remove("upper");
      allofit.classList.remove("downer");
      allofit.classList.add("upper");
    });
    lnbTarget[lockidx].classList.remove("upper");
    lnbTarget[lockidx].classList.add("downer");
  });
});
/* LNB 올리기 */
lnbTarget.forEach((targeting) => {
  targeting.classList.add("downer");
  targeting.addEventListener("mouseout", () => {
    lnbTarget.forEach((allofthings) => {
      allofthings.classList.add("upper");
      allofthings.classList.remove("downer");
    });
  });
});
