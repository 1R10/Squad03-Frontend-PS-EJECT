const icon = document.querySelectorAll(".icon");
const hamburguerButton = document.getElementById("hamburguer_button");
const cancel = document.getElementById("cancel");
const containerMenuHamburguer = document.querySelector(
  ".container_menu-hamburguer",
);
const closeReservation = document.getElementById("close-reservation");
const popupReserve = document.getElementById("popup_reserve");
const buttonCallAtion = document.querySelectorAll(".button_call-action button");
const overlay = document.getElementById("overlay");
const header = document.querySelector("header");

let open = true;

function clickHambuguer() {
  if (open === true) {
    icon.forEach((item) => (item.style.display = "none"));
    cancel.style.display = "block";
    containerMenuHamburguer.style.display = "flex";
    overlay.style.display = "flex";

    open = false;
  } else {
    icon.forEach((item) => (item.style.display = "block"));
    cancel.style.display = "none";
    containerMenuHamburguer.style.display = "none";
    overlay.style.display = "none";

    open = true;
  }
}
function openReserve() {
  popupReserve.style.display = "flex";
  overlay.style.display = "flex";
  header.style.zIndex = "1000";
}
function closeReserve() {
  popupReserve.style.display = "none";
  overlay.style.display = "none";
  header.style.zIndex = "1002";
}
hamburguerButton.addEventListener("click", clickHambuguer);
closeReservation.addEventListener("click", closeReserve);
buttonCallAtion.forEach((btn) => {
  btn.addEventListener("click", () => {
    openReserve();
  });
});

const btnMenosAdult = document.querySelector(".stepper-btn-menos-one");
const btnMaisAdult = document.querySelector(".stepper-btn-mais-one");
const inputOne = document.getElementById("input-adult");

const btnMenosChild = document.querySelector(".stepper-btn-menos-two");
const btnMaisChild = document.querySelector(".stepper-btn-mais-two");
const inputTwo = document.getElementById("input-child");

function increase(input) {
  let valor = Number(input.value) || 0;
  input.value = valor + 1;
}
function decrement(input) {
  let valor = Number(input.value) || 0;

  if (valor > 0) {
    input.value = valor - 1;
  }
}
btnMenosAdult.addEventListener("click", () => {
  decrement(inputOne);
});
btnMaisAdult.addEventListener("click", () => {
  increase(inputOne);
});
btnMenosChild.addEventListener("click", () => {
  decrement(inputTwo);
});
btnMaisChild.addEventListener("click", () => {
  increase(inputTwo);
});

const slider = document.getElementById("slider");
const img = document.querySelectorAll(".slider figure");

let cont = 0;

function slide() {
  cont++;

  if (cont > img.length - 1) {
    cont = 0;
  }
  slider.style.transform = `translateX(${-cont * 1005}px)`;
}
setInterval(slide, 5000);
