////// 화면 제일 상단으로 올라오기. 부드러운 스크롤
$(".button").on("click", (evt) => {
  evt.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
////// 스와이퍼
const mySwiper1 = new Swiper(".mySwiper1", {
  loop: true,
  pagination: {
    // 하단 페이지네이션
    el: ".mySwiper1 .swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    // 좌 우 화살표
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
////// 헤더 부분
let prescroll = window.scrollY;
console.log(prescroll);

$(window).on("scroll", () => {
  //스크롤시 변수에 저장
  let scroll = window.scrollY;

  // 이전 스크롤값이 크면 트루, 스크루 올리면 헤더보임
  if (prescroll > scroll) {
    $(".header-wrapper").css({ top: 0 });
  } else {
    // 이후 스크롤값이 크면 풜스, 스크루 올리면 헤더가려짐
    $(".header-wrapper").css({ top: -97.5 });
  }

  prescroll = scroll;
});
////// 페이지 열 때 안보였다가 몇초 뒤에 나타남
window.addEventListener("load", () => {
  document.body.classList.add("fade_out");
});
////// fade in 효과
AOS.init();

////// a 기본값 삭제
$('a[href="#"]').on("click", (e) => {
  e.preventDefault();
});
