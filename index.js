////// 화면 켰을때 안보였다가 몇초 뒤에 나타남
window.addEventListener("load", () => {
  document.body.classList.add("fade_out");
});
////// fade in 효과
AOS.init();

////// 이름 배열 순서 랜덤으로 바꿔서 여러번 출력 후 원래 배열로 돌아오기
const elements = document.getElementsByClassName("mixing");

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  const text = element.innerHTML;
  element.addEventListener("mouseover", function () {
    let step = 10;
    const interval = setInterval(function () {
      const mixed = mixstr(text);
      element.innerHTML = mixed;
      step = step - 1;
      if (step === 0) {
        element.innerHTML = text;
        clearInterval(interval);
      }
    }, 90);
  });
}
function mixstr(str) {
  const array = str.split("");
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  const mixed = array.join("");
  return mixed;
}

////// 하단에 나오는 실시간
var Target = document.getElementById("clock");
function clock() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  Target.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}
clock();

////// 하단 사인 이미지 흔들기
const touch = document.querySelector(".contact img");
addEventListener("mousemove", (evt) => {
  let x = evt.clientX,
    y = evt.clientY;
  touch.style.transform = `translate(${x / 30}px,${y / 30}px)`;
});

////// 화면 제일 상단으로 올라오기. 부드러운 스크롤
$(".button").on("click", (evt) => {
  evt.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 해당 박스로 부드러운 스크롤
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

////// project 이미지 넘기기
let xPos = 0;
let scroll = false;
const urls = [
  "images/project_01.png",
  "images/project_02.png",
  "images/project_03.png",
  "images/Preparing.png",
  "images/Preparing.png",
  "images/project_01.png",
  "images/project_02.png",
  "images/project_03.png",
  "images/Preparing.png",
  "images/Preparing.png",
];
const position = 1200;
gsap
  .timeline()
  .set(".project_box", { rotationY: 180, cursor: "grab" }) //set initial rotationY so the parallax jump happens off screen
  .set(".project_img", {
    // apply transform rotations to each image
    rotateY: (i) => i * -36,
    // 원래 10개여서 -36이였음
    // 곱해서 360도 나오게 설정한 값
    transformOrigin: `50% 50% ${position}px`,
    // 위치 설정
    z: -position,
    // backgroundImage: (i) => `url(${urls[i]})`,
    // url경로에 담아서
    // backgroundPosition: (i) => getBgPos(i),
    backfaceVisibility: "hidden",
  })
  .set(".image", {
    backgroundImage: (i) => `url(${urls[i]})`,
  })
  .from(".project_img", {
    duration: 1.5,
    y: 200,
    opacity: 0,
    stagger: 0.1,
    ease: "expo",
  })
  .add(() => {
    $(".project_img").on("mouseenter", (e) => {
      let current = e.currentTarget;
      e.preventDefault();
      e.stopPropagation();
      gsap.to(".project_img", {
        opacity: (i, t) => (t == current ? 1 : 0.5),
        ease: "power3",
      });
    });
    $(".project_img").on("mouseleave", (e) => {
      e.preventDefault();
      e.stopPropagation();
      gsap.to(".project_img", { opacity: 1, ease: "power2.inOut" });
    });
  }, "-=0")
  // .add(() => {
  //   $(".image").on("click", function () {
  //     if (scroll) {
  //       return;
  //     }
  //     const href = $(this).attr("href");
  //     if (href) {
  //       window.open(href);
  //       location.href = link;
  //     }
  .add(() => {
    $(".image01").on("click", function () {
      if (scroll) {
        return;
      }
      const href = $(this).attr("href");
      if (href) {
        location.href = "./sub1.html";
      }
    });
    $(".image02").on("click", function () {
      if (scroll) {
        return;
      }
      const href = $(this).attr("href");
      if (href) {
        location.href = "./sub2.html";
      }
    });
    $(".image03").on("click", function () {
      if (scroll) {
        return;
      }
      const href = $(this).attr("href");
      if (href) {
        location.href = "./sub3.html";
      }
    });
    $(".image04").on("click", function () {
      if (scroll) {
        return;
      }
      const href = $(this).attr("href");
      if (href) {
        location.href = "./sub4.html";
      }
    });
    $(".image05").on("click", function () {
      if (scroll) {
        return;
      }
      const href = $(this).attr("href");
      if (href) {
        location.href = "./sub5.html";
      }
    });
  });

$(window).on("mousedown touchstart", dragStart);
$(window).on("mouseup touchend", dragEnd);

function dragStart(e) {
  scroll = false;
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set(".project_box", { cursor: "grabbing" });
  $(window).on("mousemove touchmove", drag);
}

function drag(e) {
  if (e.touches) {
    e.clientX = e.touches[0].clientX;
  }
  if (xPos !== e.clientX) {
    scroll = true;
  }
  gsap.to(".project_box", {
    rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
    // onUpdate: () => { gsap.set('.project_img', { backgroundPosition: (i) => getBgPos(i) }) }
  });

  xPos = Math.round(e.clientX);
}

function dragEnd(e) {
  e.preventDefault();
  e.stopPropagation();
  $(window).off("mousemove touchmove", drag);
  gsap.set(".project_box", { cursor: "grab" });
}
// 구석으로 이미지 좀 잘리는거
function getBgPos(i) {
  //returns the background-position stproject_box to create parallax movement in each image
  return (
    100 -
    (gsap.utils.wrap(
      0,
      360,
      gsap.getProperty(".project_box", "rotationY") - 180 - i * 36
    ) /
      360) *
      position +
    "px 0px"
  );
}
