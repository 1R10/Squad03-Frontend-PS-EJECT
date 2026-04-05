const icon = document.querySelectorAll(".icon");
const hamburguerButton = document.getElementById("hamburguer_button");
const cancel = document.getElementById("cancel");
const containerMenuHamburguer = document.querySelector(
  ".container_menu-hamburguer",
);
const closeReservation = document.getElementById("close-reservation");
const popupReserve = document.getElementById("popup_reserve");

const buttonCallAction = document.querySelectorAll(
  ".button_call-action button",
);
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
  if (containerMenuHamburguer.style.display === "flex") {
    containerMenuHamburguer.style.display = "none";
    cancel.style.display = "none";
    icon.forEach((item) => (item.style.display = "flex"));
    // if que diz pro hamburguer fechar ao abrir o form reserve
  }
}
function closeReserve() {
  popupReserve.style.display = "none";
  overlay.style.display = "none";
  header.style.zIndex = "1002";
}
hamburguerButton.addEventListener("click", clickHambuguer);
closeReservation.addEventListener("click", closeReserve);

buttonCallAction.forEach((btn) => {
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

const inputDate = document.querySelectorAll('input[type="date"]');
const dataCheckin = document.getElementById("check-in");
const restaurantDate = document.getElementById("restaurant-date");
const dataCheckout = document.getElementById("check-out");
const popupContainer = document.querySelector(".popup_container");
const templateCompletion = document.querySelector(".template_completion");
const restaurantTime = document.getElementById("restaurant-time");

const clean = () => {
  inputDate.forEach((input) => {
    input.value = "";
  });
};
function inputsDate() {
  const dataAtual = new Date();
  dataAtual.setHours(0, 0, 0, 0);

  checkin = new Date(dataCheckin.value + "T00:00:00");
  checkout = new Date(dataCheckout.value + "T00:00:00");
  restaurant = new Date(restaurantDate.value + "T00:00:00");

  if (checkin < dataAtual) {
    alert("Data de check-in inválida! Escolha uma data para o futuro.");
    clean();
    return false;
  }
  if (checkout < checkin) {
    alert(
      "Data de check-out inválida! Escolha uma data posterior ao Check-in.",
    );
    clean();
    return false;
  }
  if (restaurant !== "" && restaurantTime.value === "0") {
    restaurantTime.required = true;
    alert("Ops! Escolha uma data para a sua reserva no Restaurante.");
    return false;
  }

  if (restaurant < dataAtual) {
    alert(
      "Ops! Data do restaurante inválida! Não é possível escolher uma data para o passado.",
    );
    clean();
    return false;
  }
  return true;
}
function showConfirmationReserve(event) {
  event.preventDefault(); // Impede o recarregamento da página
  if (inputsDate()) {
    popupContainer.style.display = "none";
    templateCompletion.style.display = "flex";
  }
}
const buttonSubmit = document.getElementById("reserve-button");
buttonSubmit.addEventListener("click", showConfirmationReserve);
