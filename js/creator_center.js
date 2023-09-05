const header = doc.querySelector("header"),
  gnbEx = doc.querySelector("menu");
let headerFont = doc.querySelectorAll("header *");

const hbg = doc.getElementById("hamburger"),
  closer = doc.getElementById("closer"),
  resMenu = doc.querySelector("#res_menu");

/** 초기화 함수 */
function resetHeader() {
  gnbEx.classList.remove("open");
  header.classList.remove("open");
  headerFont.forEach((allThings) => {
    allThings.style.color = "#fff";
  });
}
resetHeader();
resMenu.classList.remove("clicked");

/* 반응형 햄버거 메뉴 */
hbg.addEventListener("click", () => {
  resMenu.classList.add("clicked");
});
closer.addEventListener("click", () => {
  resMenu.classList.remove("clicked");
});

/* 메뉴 오픈 */
header.addEventListener("mouseenter", (e) => {
  resetHeader();
  classinnerWidth = doc.body.clientWidth;
  if (classinnerWidth <= 767) {
  } else {
    gnbEx.classList.add("open");
    header.classList.add("open");
    headerFont.forEach((allThings) => {
      allThings.style.color = "var(--black)";
    });
  }
});
header.addEventListener("mouseleave", () => {
  if (gnbEx.classList.contains("open")) {
  } else {
    resetHeader();
  }
});

/* 메뉴 닫기 */
gnbEx.addEventListener("mouseleave", (e) => {
  if (e.target.classList.contains("open")) {
    resetHeader();
  }
});

/* GNB 이미지 변경 */
const gnbLists = doc.querySelectorAll("dl");
let imgPlace = doc.querySelector("#menu_img");
const gnbMains = doc.querySelectorAll(".gnb > ul > li > a");
gnbLists.forEach((listItem, index) => {
  listItem.addEventListener("mouseover", (e) => {
    let placeImg = e.currentTarget.getAttribute("data-title");
    let imgResult = `url(${placeImg})`;
    imgPlace.style.backgroundImage = imgResult;
  });
  listItem.addEventListener("mouseout", (e) => {});
});
imgPlace.style.backgroundImage = "url('img/header/category_img.jpg')";

/* Footer 등장 시 40vw 밀기 */
const footerPrev = doc.getElementById("event_and_points");
window.addEventListener("resize", () => {
  classinnerWidth = doc.body.clientWidth;
  if (classinnerWidth <= 767) {
    resetHeader();
  }
});
