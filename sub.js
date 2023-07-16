////// 페이드 효과
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

// 메뉴 클릭 페이지 변경시 안보였다가 몇초 뒤에 나타남
window.addEventListener("load", () => {
  document.body.classList.add("fade_out");
});
