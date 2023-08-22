let adult_minus = document.querySelector(".adult-minus");
let adult_plus = document.querySelector(".adult-plus");
let child_minus = document.querySelector(".child-minus");
let child_plus = document.querySelector(".child-plus");

let adulst = document.querySelector(".adults");
let childrens = document.querySelector(".childrens");

adult_minus.addEventListener("click", function () {
  if (adulst.value <= 0) {
    return;
  }

  adulst.value--;
});

adult_plus.addEventListener("click", function () {
  if (adulst.value >= 20) {
    return;
  }

  adulst.value++;
});

child_minus.addEventListener("click", function () {
  if (childrens.value <= 0) {
    return;
  }

  childrens.value--;
});

child_plus.addEventListener("click", function () {
  if (childrens.value >= 12) {
    return;
  }

  childrens.value++;
});
