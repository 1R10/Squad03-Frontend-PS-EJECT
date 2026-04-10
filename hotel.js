const countdown = document.querySelector(".countdown");
const arrowCountdown = document.querySelector(".arrow-countdown");

if (arrowCountdown) {
  arrowCountdown.addEventListener("click", () => {
    countdown.style.display = "block";
    arrowCountdown.style.display = "none";
    setTimeout(function () {
      countdown.style.display = "none";
      arrowCountdown.style.display = "block";
    }, 5000);
  });
}

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

const overlays = document.querySelectorAll(".overlays");
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
      overlays.forEach((overlay) => {
        overlay.style.display = "none";
      });
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
    overlays.forEach((overlay) => {
      overlay.style.display = "flex";
    });

    open = false;
  } else {
    icon.forEach((item) => (item.style.display = "block"));
    cancel.style.display = "none";
    containerMenuHamburguer.style.display = "none";
    overlays.forEach((overlay) => {
      overlay.style.display = "none";
    });

    open = true;
  }
  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      cancel.style.display = "none";
      containerMenuHamburguer.style.display = "none";
      overlay.style.display = "none"; // <-- Aqui ele tenta esconder
      icon.forEach((item) => (item.style.display = "block"));
    });
  });
}
hamburguerButton.addEventListener("click", clickHambuguer);

function openReserve() {
  if (popupReserve) popupReserve.style.display = "flex";

  overlays.forEach((overlay) => {
    overlay.style.display = "flex";
  });

  if (header) header.style.zIndex = "1000";

  if (
    containerMenuHamburguer &&
    containerMenuHamburguer.style.display === "flex"
  ) {
    containerMenuHamburguer.style.display = "none";
    if (cancel) cancel.style.display = "none";
    icon.forEach((item) => {
      item.style.display = "flex";
    });
  }
}
function closeReserve() {
  popupReserve.style.display = "none";
  if (popupReserveRestaurant) {
    popupReserveRestaurant.style.display = "none";
  }
  overlays.forEach((overlay) => {
    overlay.style.display = "none";
  });
  header.style.zIndex = "1002";
}
overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    closeReserve();
  });
});

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
    overlays.forEach((overlay) => {
      overlay.style.display = "none";
    });
  });
});

const buttonReserveRestaurant = document.getElementById(
  "button-open-form-restaurant",
);
function openReserveRestaurant() {
  popupReserveRestaurant.style.display = "flex";
  overlays.forEach((overlay) => {
    overlay.style.display = "flex";
  });
}

overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    popupReserveRestaurant.style.display = "none";
    overlay.style.display = "none";
  });
});
if (buttonReserveRestaurant) {
  buttonReserveRestaurant.addEventListener("click", openReserveRestaurant);
}
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
if (btnMenos) {
  btnMenos.addEventListener("click", () => {
    decrement(inputPeopleRestaurant);
    console.log("apertou menos");
  });
}
if (btnMais) {
  btnMais.addEventListener("click", () => {
    increase(inputPeopleRestaurant);
    console.log("apertou mais");
  });
}
/*-----------------------------------------------------------------------------------------------------------------------------*/

if (typeof Swiper !== "undefined") {
  new Swiper(".swiper-gallery", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-gallery .swiper-button-next",
      prevEl: ".swiper-gallery .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-gallery .swiper-pagination",
      clickable: true,
    },
  });
}
const modal = document.querySelector("#modal-suites");

if (modal) {
  const modalImg = modal.querySelector("#modal-img");
  const modalTitulo = modal.querySelector("#modal-titulo");
  const modalDesc = modal.querySelector("#modal-desc");
  const btnFechar = modal.querySelector(".close-button");

  const slides = document.querySelectorAll(".swiper-slide");

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      // 1. Puxa as "etiquetas" (data attributes) que a gente colocou no HTML
      const infos = {
        titulo: slide.getAttribute("data-titulo"),
        imagem: slide.getAttribute("data-img"),
        descricao: slide.getAttribute("data-desc"),
      };

      // 2. Injeta os dados no modal
      modalImg.src = infos.imagem;
      modalTitulo.innerText = infos.titulo;
      modalDesc.innerText = infos.descricao;

      modal.classList.add("active");
      overlay.style.display = "flex";
    });
  });

  btnFechar.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.style.display = "none";
  });

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      modal.classList.remove("active");
      overlay.style.display = "none";
    });
  });
}
