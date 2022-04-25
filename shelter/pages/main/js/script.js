"use strict";
import PETS from "../../../assets/data.js";
// Burger menu

const BTN_ICON = document.querySelector("#start-screen > div > header > img");
const BURGER_MENU = document.querySelector("#start-screen > div > nav");
const BODY_BG = document.querySelector("body");
const MAIN_LOGO = document.querySelector("#start-screen > div > header > a");
const LINKS = Array.from(
  document.querySelectorAll("#start-screen > div > nav > ul > li> .a-burger")
);

function openBurger() {
  BTN_ICON.classList.toggle("active");
  BURGER_MENU.classList.toggle("active");
  BODY_BG.classList.toggle("active");

  if (BTN_ICON.classList.contains("active")) {
    MAIN_LOGO.style.display = "none";
  } else {
    MAIN_LOGO.style.display = "";
  }

  if (BTN_ICON.classList.contains("active")) {
    BODY_BG.style.overflowY = "hidden";
  } else {
    BODY_BG.style.overflowY = "";
  }
}

function closeBurger(event) {
  if (
    (event.target === BODY_BG && event.target !== BTN_ICON) ||
    LINKS.some((li) => event.target === li)
  ) {
    BTN_ICON.classList.remove("active");
    BURGER_MENU.classList.remove("active");
    BODY_BG.classList.remove("active");
    MAIN_LOGO.style.display = "";
    BODY_BG.style.overflowY = "";
  }
}

BTN_ICON.addEventListener("click", openBurger);
BODY_BG.addEventListener("click", closeBurger);

// Carousel

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const ITEMS = document.querySelectorAll("#slider>.items");
const ITEM_ACTIVE = document.querySelector("#items-active");
const ITEM_LEFT = document.querySelector("#items-left");
const ITEM_RIGHT = document.querySelector("#items-right");
const ITEM_ACTIVE_NAMES = document
  .querySelector("#items-active")
  .getElementsByClassName("name");
const ITEM_LEFT_NAMES = document
  .querySelector("#items-left")
  .getElementsByClassName("name");
const ITEM_RIGHT_NAMES = document
  .querySelector("#items-right")
  .getElementsByClassName("name");
const ITEM_ACTIVE_IMGS = document
  .querySelector("#items-active")
  .getElementsByTagName("img");
const ITEM_LEFT_IMGS = document
  .querySelector("#items-left")
  .getElementsByTagName("img");
const ITEM_RIGHT_IMGS = document
  .querySelector("#items-right")
  .getElementsByTagName("img");
let cards = document.querySelectorAll(".card");

function randomizeCards(sideNames, sideImgs) {
  let uniqueNumber = 0;
  let tempPETS = PETS.slice();

  for (let i = 0; i < 3; ) {
    uniqueNumber = Math.floor(Math.random() * tempPETS.length);
    if (uniqueNumber == 8) {
      uniqueNumber = 0;
    }
    if (
      tempPETS[uniqueNumber].name !== ITEM_ACTIVE_NAMES[0].innerHTML &&
      tempPETS[uniqueNumber].name !== ITEM_ACTIVE_NAMES[1].innerHTML &&
      tempPETS[uniqueNumber].name !== ITEM_ACTIVE_NAMES[2].innerHTML
    ) {
      sideNames[i].innerHTML = tempPETS[uniqueNumber].name;
      sideImgs[i].src = tempPETS[uniqueNumber].img;
      tempPETS.splice(uniqueNumber, 1);
      i++;
    } else {
      continue;
    }
  }
}

const moveLeft = () => {
  for (const item of ITEMS) {
    item.classList.add("transition-left");
  }
  randomizeCards(ITEM_LEFT_NAMES, ITEM_LEFT_IMGS);
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  for (const item of ITEMS) {
    item.classList.add("transition-right");
  }
  randomizeCards(ITEM_RIGHT_NAMES, ITEM_RIGHT_IMGS);
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);
//once randomizeCards for first visit page or reload
randomizeCards(ITEM_ACTIVE_NAMES, ITEM_ACTIVE_IMGS);

for (const item of ITEMS) {
  item.addEventListener("animationend", (animationEvent) => {
    if (
      animationEvent.animationName === "move-left-1280" ||
      animationEvent.animationName === "move-left-768" ||
      animationEvent.animationName === "move-left-320"
    ) {
      ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
    } else {
      ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
    }

    for (const item of ITEMS) {
      item.classList.remove("transition-left");
      item.classList.remove("transition-right");
      console.log(animationEvent);
    }
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);

    /*
    !!!!!!!! from pop-up (below)
    because the cards are recreated, it is necessary to update the variables +addEventListener there, after recreation new cards
     ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
    } else {
      ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
    */

    cards = document.querySelectorAll(".card");
    for (const card of cards) {
      card.addEventListener("click", openModalWindow);
    }
  });
}

// Popup

const CLOSE_BTN = document.querySelector("#close-btn");
const MODAL_WINDOW = document.querySelector(
  "#pets > div > div.modal-window-container"
);
const MODAL_FIELD = document.querySelector(
  "#pets > div > div.modal-window-container > div"
);

let modalName = document.querySelector(
  "#pets > div > div.modal-window-container> div > div > h3"
);
let modalImg = document.querySelector(
  "#pets > div > div.modal-window-container> div > img"
);
let modalTypeBreed = document.querySelector(
  "#pets > div > div.modal-window-container > div > div > h4"
);
let modalDescription = document.querySelector(
  "#pets > div > div.modal-window-container > div > div > h5"
);
let modalAge = document.querySelector("#age");
let modalInoculations = document.querySelector("#inoculations");
let modalDiseases = document.querySelector("#diseases");
let modalParasites = document.querySelector("#parasites");

function openModalWindow(event) {
  let currentCardName = event.currentTarget.querySelector(".name").innerHTML;

  for (const pet of PETS) {
    if (currentCardName === modalName) {
      break;
    } else if (pet.name === currentCardName) {
      modalName.innerHTML = pet.name;
      modalImg.src = pet.img;
      modalTypeBreed.innerHTML = pet.type + " - " + pet.breed;
      modalDescription.innerHTML = pet.description;
      modalAge.innerHTML = pet.age;
      modalInoculations.innerHTML = pet.inoculations;
      modalDiseases.innerHTML = pet.diseases;
      modalParasites.innerHTML = pet.parasites;
    } else {
      continue;
    }
  }

  console.log(event.currentTarget);

  MODAL_WINDOW.classList.toggle("active");
  BODY_BG.classList.toggle("active");

  if (MODAL_WINDOW.classList.contains("active")) {
    BODY_BG.style.overflowY = "hidden";
  } else {
    BODY_BG.style.overflowY = "";
  }
}

function closeModalWindow(event) {
  if (event.target === BODY_BG || event.target == CLOSE_BTN) {
    MODAL_WINDOW.classList.remove("active");
    BODY_BG.classList.remove("active");
    BODY_BG.style.overflowY = "";
  }
}

BODY_BG.addEventListener("click", closeModalWindow);

MODAL_FIELD.addEventListener("mouseout", (event) => {
  if (event.currentTarget === MODAL_FIELD) {
    CLOSE_BTN.style.backgroundImage =
      "url(../../assets/icons/modal_close_button-hover.png)";
  }
});
MODAL_FIELD.addEventListener("mouseover", (event) => {
  if (event.currentTarget === MODAL_FIELD) {
    CLOSE_BTN.style.backgroundImage =
      "url(../../assets/icons/modal_close_button.png)";
  }
});

// create first assocoation cards with modalWindows
for (const card of cards) {
  card.addEventListener("click", openModalWindow);
}
