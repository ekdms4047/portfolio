//scroll-up-bar.js
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
    $(".header-wrapper").css({ top: -121.5 });
  }

  prescroll = scroll;
});

////// 메뉴 클릭 페이지 변경시 안보였다가 몇초 뒤에 나타남
window.addEventListener("load", () => {
  document.body.classList.add("fade_out");
});

////// fade in 효과
AOS.init();

////// a 기본값 삭제
$('a[href="#"]').on("click", (e) => {
  e.preventDefault();
});

//////// 화살표 마우스 이벤트
const follow1 = document.querySelector(".follow1");
const follow2 = document.querySelector(".follow2");
const follow3 = document.querySelector(".follow3");
addEventListener("mousemove", (evt) => {
  let x = evt.clientX,
    y = evt.clientY;
  // console.log(x, y);

  follow1.style.transform = `translate(${x / 15}px,${y / 15}px)`;
  follow2.style.transform = `translate(${x / 15}px,${y / 15}px)`;
  follow3.style.transform = `translate(${x / 15}px,${y / 15}px)`;
});

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.530348, 126.91991),
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP,
  };

////// kakao api
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(37.530348, 126.91991);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);

////// 커서이벤트 작동 안됨..
// const circle = document.querySelector(".circle");

// document.addEventListener("mousemove", (e) => {
//   // mousemove이벤트를 이용해 움

//   // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.

//   // pageX, pageY와는 다름.

//   const mouseX = e.clientX;

//   const mouseY = e.clientY;

//   circle.style.left = mouseX + "px";

//   circle.style.top = mouseY + "px";
// });
