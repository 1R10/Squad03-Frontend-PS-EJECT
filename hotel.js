const hamburguerButton = document.getElementById("hamburguer_button");
const containerMenuHamburguer = document.querySelector(
  ".container_menu-hamburguer",
);
const icon = document.querySelectorAll(".icon");

const cancel = document.getElementById("cancel");
const popupReserve = document.getElementById("popup_reserve");
const popupReserveRestaurant = document.querySelector(
  ".popup_reserve-restaurant",
);

const overlay = document.getElementById("overlay");
const header = document.querySelector("header");

window.addEventListener("resize", () => {
  const menuHamburguer = document.querySelector(".container_menu-hamburguer");
  const larguraDesktop = 1100;

  if (window.innerWidth >= larguraDesktop) {
    if (menuHamburguer) {
      menuHamburguer.style.display = "none";
      cancel.style.display = "none";
      icon.forEach((item) => {
        item.style.display = "flex";
      });
      overlay.style.display = "none";
    }
  }
});

let open = true;

function clickHambuguer() {
  if (open === true) {
    icon.forEach((item) => {
      item.style.display = "none";
    });
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
hamburguerButton.addEventListener("click", clickHambuguer);

function openReserve() {
  popupReserve.style.display = "flex";
  overlay.style.display = "flex";
  header.style.zIndex = "1000";
  if (containerMenuHamburguer.style.display === "flex") {
    containerMenuHamburguer.style.display = "none";
    cancel.style.display = "none";
    icon.forEach((item) => {
      item.style.display = "flex";
    });
    // if que diz pro hamburguer fechar ao abrir o form reserve
  }
}
function closeReserve() {
  popupReserve.style.display = "none";
  popupReserveRestaurant.style.display = "none";
  overlay.style.display = "none";
  header.style.zIndex = "1002";
}
const buttonCallAction = document.querySelectorAll(".btn_reserve_menu");
buttonCallAction.forEach((btn) => {
  btn.addEventListener("click", () => {
    openReserve();
  });
});
const buttonCloseReserve = document.querySelectorAll(".close-reserve");
buttonCloseReserve.forEach((close) => {
  close.addEventListener("click", () => {
    closeReserve();
  });
});

const buttonReserveRestaurant = document.getElementById(
  "button-open-form-restaurant",
);
function openReserveRestaurant() {
  popupReserveRestaurant.style.display = "flex";
  overlay.style.display = "flex";
}
buttonReserveRestaurant.addEventListener("click", openReserveRestaurant);

const inputDate = document.querySelectorAll('input[type="date"]');
const dataCheckin = document.getElementById("check-in");
const dataCheckout = document.getElementById("check-out");
const restaurantDate = document.getElementById("restaurant-date");
const popupContainer = document.getElementById("popup_container");
const popupContainerRestaurant = document.getElementById(
  "popup_container_restaurant",
);
const templateReserve = document.querySelectorAll("template_reserve");
const templateRestaurant = document.getElementById("template_restaurant");
const restaurantTime = document.getElementById("restaurant-time");
/*-----------------------------------------------------------------------------------------------------------------------------------*/
/*verificação dos inputs e tamplate de confirmação de envio*/

const clean = () => {
  inputDate.forEach((input) => {
    input.value = "";
  });
};
const dataAtual = new Date();
dataAtual.setHours(0, 0, 0, 0);

function inputsDate() {
  checkin = new Date(dataCheckin.value + "T00:00:00");
  checkout = new Date(dataCheckout.value + "T00:00:00");

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
  return true;
}
function inputsRestaurant() {
  restaurant = new Date(restaurantDate.value + "T00:00:00");

  if (restaurantDate.value !== "" && restaurantTime.value === "0") {
    restaurantTime.required = true;
    alert("Ops! Escolha um horário para a sua reserva no Restaurante.");
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
const formHotel = document.getElementById("form_hotel");
formHotel.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputsDate() && inputsRestaurant()) {
    popupContainer.style.display = "none";
    templateReserve.forEach((template) => {
      template.style.display = "flex";
    });
  }
});

const formRest = document.getElementById("res_form_hotel");
formRest.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputsRestaurant()) {
    popupContainerRestaurant.style.display = "none";
    templateRestaurant.style.display = "flex";
  }
});

/*-----------------------------------------------------------------------------------------------------------------------------------*/
/*incremento e decrementação dos inputs para os formulários*/

const btnMenosAdult = document.querySelector(".stepper-btn-menos-one");
const btnMaisAdult = document.querySelector(".stepper-btn-mais-one");
const inputOne = document.getElementById("input-adult");

const btnMenosChild = document.querySelector(".stepper-btn-menos-two");
const btnMaisChild = document.querySelector(".stepper-btn-mais-two");
const inputTwo = document.getElementById("input-child");

const inputPeopleRestaurant = document.getElementById("input-people");
const btnMenos = document.querySelector(".stepper-btn-menos");
const btnMais = document.querySelector(".stepper-btn-mais");

let limit = 0;
function increase(input) {
  let valor = Number(input.value) || 0;
  if (limit < 4) {
    if (input.id == "input-child") {
      if (input.value < 3) {
        input.value = valor + 1;
        limit += 1;
      }
    } else {
      if (input.value < 4) {
        input.value = valor + 1;
        limit += 1;
      }
    }
  }
}
function decrement(input) {
  let valor = Number(input.value) || 0;

  if (valor > 0) {
    input.value = valor - 1;
    limit -= 1;
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
btnMenos.addEventListener("click", () => {
  decrement(inputPeopleRestaurant);
  console.log("apertou menos");
});

btnMais.addEventListener("click", () => {
  increase(inputPeopleRestaurant);
  console.log("apertou mais");
});
/*-----------------------------------------------------------------------------------------------------------------------------*/

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
