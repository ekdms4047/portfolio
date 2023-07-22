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

// a 기본값 삭제
$('a[href="#"]').on("click", (e) => {
  e.preventDefault();
});

// 메뉴 클릭 페이지 변경시 안보였다가 몇초 뒤에 나타남
window.addEventListener("load", () => {
  document.body.classList.add("fade_out");
});

// 지도
var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(37.53028, 126.919851),
  level: 3,
  mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
};
// 지도 생성
var map = new kakao.maps.Map(container, options);

// 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
map.setZoomable(false);

// 지도에 확대 축소 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
const markerPosition = new kakao.maps.LatLng(37.5262, 127.0355); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

////// fade in 효과
AOS.init();
