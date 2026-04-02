const icon = document.querySelectorAll(".icon");
const hamburguerButton = document.getElementById("hamburguer_button");
const cancel = document.getElementById("cancel");
const containerMenuHamburguer = document.querySelector(
  ".container_menu-hamburguer",
);
const closeReservation = document.getElementById("close-reservation");
const popupReserve = document.getElementById("popup_reserve");
const buttonCallAtion = document.querySelectorAll(".button_call-action button");

let open = true;

function clickHambuguer() {
  if (open === true) {
    icon.forEach((item) => (item.style.display = "none"));
    cancel.style.display = "block";
    containerMenuHamburguer.style.display = "flex";

    open = false;
  } else {
    icon.forEach((item) => (item.style.display = "block"));
    cancel.style.display = "none";
    containerMenuHamburguer.style.display = "none";

    open = true;
  }
}
function openReserve() {
  popupReserve.style.display = "flex";
}
function closeReserve() {
  popupReserve.style.display = "none";
}
hamburguerButton.addEventListener("click", clickHambuguer);
closeReservation.addEventListener("click", closeReserve);
buttonCallAtion.forEach((btn) => {
  btn.addEventListener("click", () => {
    openReserve(); 
  });
});
