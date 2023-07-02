
//////이름 배열 순서 랜덤으로 바꿔서 여러번 출력 후 원래 배열로 돌아오기
const elements = document.getElementsByClassName('mixing');

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  const text = element.innerHTML;
  element.addEventListener('mouseover', function () {
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
  const array = str.split('');
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  const mixed = array.join('');
  return mixed;
}

////// 하단에 나오는 실시간
var Target = document.getElementById('clock');
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
const touch = document.querySelector('.contact img');
addEventListener('mousemove', (evt) => {
  let x = evt.clientX,
    y = evt.clientY;
  touch.style.transform = `translate(${x / 50}px,${y / 50}px)`;
});

////// 화면 제일 상단으로 올라오기. 부드러운 스크롤
$('.button').on('click', (evt) => {
  evt.preventDefault();
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// 해당 박스로 부드러운 스크롤 다시해야될듯!!! 안올라감 ㅎ
// $('.global-nav a').each(function(idx) {
//   $(this).on('click',function (e) {
//     e.preventDefault();

//     const 
//   })
// })

// 안보였다가 스크롤 내리면 나타나기,올라올때도 해야되는데? 다시 내려가도 또 그래야되는데?
// 다은아 수정해라
// https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API

$(document).ready(function () {
  $(window).scroll(function () {
    $('.about,.project,.skills,.contact,.time,.sns').each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: '1' }, 700);
      }
    });
  });
});

////// project 이미지 넘기기
let xPos = 0;
const urls = ['images/project_01.png', 'images/project_02.png', 'images/project_03.png','images/project_01.png', 'images/project_02.png', 'images/project_03.png','images/project_01.png', 'images/project_02.png', 'images/project_03.png','images/project_01.png']
const position = 1200;
gsap.timeline()
  .set('.project_box', { rotationY: 180, cursor: 'grab' }) //set initial rotationY so the parallax jump happens off screen
  .set('.project_img', { // apply transform rotations to each image
    rotateY: (i) => i * -36,
    // 원래 10개여서 -36이였음
    // 곱해서 360도 나오게 설정한 값
    transformOrigin: `50% 50% ${position}px`,
    // 위치 설정
    z: -position,
    backgroundImage: (i) => `url(${urls[i]})`,
    // url경로에 담아서
    
    // backgroundPosition: (i) => getBgPos(i),
    backfaceVisibility: 'hidden'
  })
  .from('.project_img', {
    duration: 1.5,
    y: 200,
    opacity: 0,
    stagger: 0.1,
    ease: 'expo'
  })
  .add(() => {
    $('.project_img').on('mouseenter', (e) => {
      let current = e.currentTarget;
      gsap.to('.project_img', { opacity: (i, t) => (t == current) ? 1 : 0.5, ease: 'power3' })
    })
    $('.project_img').on('mouseleave', (e) => {
      gsap.to('.project_img', { opacity: 1, ease: 'power2.inOut' })
    })
  }, '-=0')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);


function dragStart(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set('.project_box', { cursor: 'grabbing' })
  $(window).on('mousemove touchmove', drag);
}


function drag(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;

  gsap.to('.project_box', {
    rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
    // onUpdate: () => { gsap.set('.project_img', { backgroundPosition: (i) => getBgPos(i) }) }
  });

  xPos = Math.round(e.clientX);
}


function dragEnd(e) {
  $(window).off('mousemove touchmove', drag);
  gsap.set('.project_box', { cursor: 'grab' });
}

// 구석으로 이미지 좀 잘리는거
function getBgPos(i) { //returns the background-position stproject_box to create parallax movement in each image
  return (100 - gsap.utils.wrap(0, 360, gsap.getProperty('.project_box', 'rotationY') - 180 - i * 36) / 360 * position) + 'px 0px';
}

