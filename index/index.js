// 이름 배열 순서 랜덤으로 바꿔서 여러번 출력 후 원래 배열로 돌아오기
const elements = document.getElementsByClassName('mixing');
// console.log(elements);

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

// 하단에 나오는 실시간
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

// 하단 사인 이미지 흔들기
const touch = document.querySelector('.contact img');

addEventListener('mousemove', (evt) => {
  let x = evt.clientX,
    y = evt.clientY;
  // console.log(x, y);

  touch.style.transform = `translate(${x / 50}px,${y / 50}px)`;
});

// 부드러운 스크롤
$('.btn').on('click', (evt) => {
  evt.preventDefault();
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// 다시해야될듯!!! 안올라감 ㅎ
$('.touch').on('click', (evt) => {
  evt.preventDefault();
  scrollTo({
    behavior: 'smooth',
  });
});

// 안보였다가 스크롤 내리면 나타나기

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
