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

const mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.530348, 126.9199),
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP,
  };

////// kakao api
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
map.setZoomable(false);

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.530348, 126.9199), // 마커의 좌표
  map: map, // 마커를 표시할 지도 객체
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
