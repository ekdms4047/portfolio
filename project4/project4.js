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

// a 기본값 삭제
$('a[href="#"]').on("click", (e) => {
  e.preventDefault();
});

// 지도
var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(37.53028, 126.919851),
  level: 3,
  mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
};

// 타일 로드가 완료되면 지도 중심에 마커를 표시합니다
kakao.maps.event.addListener(map, "tilesloaded", displayMarker);

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var marker = new kakao.maps.Marker();

// 타일 로드가 완료되면 지도 중심에 마커를 표시합니다
kakao.maps.event.addListener(map, "tilesloaded", displayMarker);

function displayMarker() {
  // 마커의 위치를 지도중심으로 설정합니다
  marker.setPosition(map.getCenter());
  marker.setMap(map);
}
// 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
map.setZoomable(false);

// 지도에 확대 축소 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

////// 안보였다가 나타나기
$(document).ready(function () {
  /* 1 */
  $(window).scroll(function () {
    /* 2 */
    $(".hidden").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* 3 */
      if (bottom_of_window > bottom_of_object / 2) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
});
