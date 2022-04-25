"use strict";
// Global environment
import PETS from "../../../assets/data.js";

// Burger menu

const BTN_ICON = document.querySelector("body > img");
const BURGER_MENU = document.querySelector("body > nav");
const BODY_BG = document.querySelector("body");
const MAIN_LOGO = document.querySelector("body > header > div > a");
const LINKS = Array.from(
  document.querySelectorAll("body > nav > ul > li > .a-burger")
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

// Pagination

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const BTN_START = document.querySelector("#btn-start");
const BTN_END = document.querySelector("#btn-end");
const BTN_PAGE = document.querySelector("#btn-page");
const CARDS_CONTAINERS = document.querySelectorAll(
  "#wrapper-cards>.cards-container"
);
let pageNumber = document.querySelector("#page > h4");
let counter = 1;
let positions = [
  "0px", // to except 0 page number
  "0px",
];

function randomizeCards(CARDS_CONTAINERS) {
  for (let i = 0; i < 16; i++) {
    let uniqueNumber = 0;
    let tempPETS = PETS.slice();
    let currentContainer = CARDS_CONTAINERS[i];
    let name = currentContainer.querySelectorAll(".name");
    let img = currentContainer.querySelectorAll(".card>img");

    for (let j = 0; j < 8; j++) {
      uniqueNumber = Math.floor(Math.random() * tempPETS.length);
      if (uniqueNumber == 8) {
        uniqueNumber = 0;
      }
      name[j].innerHTML = tempPETS[uniqueNumber].name;
      img[j].src = tempPETS[uniqueNumber].img;
      tempPETS.splice(uniqueNumber, 1);
    }
  }
}

const changePositions = () => {
  //positions[0] — to except 0 page number
  positions = ["0px", "0px"];

  if (window.innerWidth >= 1280) {
    let step = 1200;
    for (let i = 2; i <= 6; i++) {
      positions.push(parseInt(positions[i - 1]) - step + "px");
    }
    //Checking resize bug
    if (counter > 6) {
      counter = 6;
    }
    // console.log(counter);
    // console.log(positions);
  } else if ((window.innerWidth < 1280) & (window.innerWidth >= 768)) {
    let step = 580;
    for (let i = 2; i <= 8; i++) {
      positions.push(parseInt(positions[i - 1]) - step + "px");
    }
    //Checking resize bug
    if (counter > 8) {
      counter = 8;
    }
    // console.log(counter);
    // console.log(positions);
  } else {
    let step = 270;
    for (let i = 2; i <= 16; i++) {
      positions.push(parseInt(positions[i - 1]) - step + "px");
    }
    // console.log(positions);
  }
  //update pageNumber
  pageNumber.innerHTML = counter;
  // update position
  for (const cardContainer of CARDS_CONTAINERS) {
    cardContainer.style.left = positions[counter];
  }
};

const moveStart = () => {
  counter = 1;
  pageNumber.innerHTML = counter;

  for (const cardContainer of CARDS_CONTAINERS) {
    cardContainer.style.left = positions[counter];
  }
};

const moveEnd = () => {
  counter = positions.length - 1;
  pageNumber.innerHTML = counter;

  for (const cardContainer of CARDS_CONTAINERS) {
    cardContainer.style.left = positions[counter];
  }
};

const moveLeft = () => {
  if (counter == 1) {
    return;
  }
  counter--;
  pageNumber.innerHTML = counter;

  for (const cardContainer of CARDS_CONTAINERS) {
    cardContainer.style.left = positions[counter];
  }

  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_START.removeEventListener("click", moveStart);
  BTN_END.removeEventListener("click", moveEnd);
};

const moveRight = () => {
  if (counter == positions.length - 1) {
    return;
  }
  counter++;
  pageNumber.innerHTML = counter;

  for (const cardContainer of CARDS_CONTAINERS) {
    cardContainer.style.left = positions[counter];
  }

  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_START.removeEventListener("click", moveStart);
  BTN_END.removeEventListener("click", moveEnd);
};

for (const cardContainer of CARDS_CONTAINERS) {
  cardContainer.addEventListener("transitionend", (transitionEvent) => {
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    BTN_START.addEventListener("click", moveStart);
    BTN_END.addEventListener("click", moveEnd);

    if (counter !== 1 || counter !== positions.length - 1) {
      BTN_LEFT.style.border = "2px solid #f1cdb3";
      BTN_START.style.border = "2px solid #f1cdb3";
      BTN_RIGHT.style.border = "2px solid #f1cdb3";
      BTN_END.style.border = "2px solid #f1cdb3";
      BTN_LEFT.style.cursor = "pointer";
      BTN_START.style.cursor = "pointer";
      BTN_RIGHT.style.cursor = "pointer";
      BTN_END.style.cursor = "pointer";
      BTN_LEFT.style.color = "#292929";
      BTN_START.style.color = "#292929";
      BTN_RIGHT.style.color = "#292929";
      BTN_END.style.color = "#292929";
    }
    if (counter == 1) {
      BTN_LEFT.style.border = "2px solid #cdcdcd";
      BTN_START.style.border = "2px solid #cdcdcd";
      BTN_LEFT.style.cursor = "default";
      BTN_START.style.cursor = "default";
      BTN_LEFT.style.color = "#cdcdcd";
      BTN_START.style.color = "#cdcdcd";
    }
    if (counter == positions.length - 1) {
      BTN_RIGHT.style.border = "2px solid #cdcdcd";
      BTN_END.style.border = "2px solid #cdcdcd";
      BTN_RIGHT.style.cursor = "default";
      BTN_END.style.cursor = "default";
      BTN_RIGHT.style.color = "#cdcdcd";
      BTN_END.style.color = "#cdcdcd";
    }
  });
}

BTN_LEFT.addEventListener("mouseover", (event) => {
  if (event.currentTarget === BTN_LEFT && counter !== 1) {
    BTN_LEFT.style.backgroundColor = "#f1cdb3";
  }
});

BTN_LEFT.addEventListener("mouseout", (event) => {
  if (event.currentTarget === BTN_LEFT) {
    BTN_LEFT.style.backgroundColor = "#f6f6f6";
  }
});

BTN_START.addEventListener("mouseover", (event) => {
  if (event.currentTarget === BTN_START && counter !== 1) {
    BTN_START.style.backgroundColor = "#f1cdb3";
  }
});

BTN_START.addEventListener("mouseout", (event) => {
  if (event.currentTarget === BTN_START) {
    BTN_START.style.backgroundColor = "#f6f6f6";
  }
});

BTN_RIGHT.addEventListener("mouseover", (event) => {
  if (event.currentTarget === BTN_RIGHT && counter !== positions.length - 1) {
    BTN_RIGHT.style.backgroundColor = "#f1cdb3";
  }
});

BTN_RIGHT.addEventListener("mouseout", (event) => {
  if (event.currentTarget === BTN_RIGHT) {
    BTN_RIGHT.style.backgroundColor = "#f6f6f6";
  }
});

BTN_END.addEventListener("mouseover", (event) => {
  if (event.currentTarget === BTN_END && counter !== positions.length - 1) {
    BTN_END.style.backgroundColor = "#f1cdb3";
  }
});

BTN_END.addEventListener("mouseout", (event) => {
  if (event.currentTarget === BTN_END) {
    BTN_END.style.backgroundColor = "#f6f6f6";
  }
});

randomizeCards(CARDS_CONTAINERS);
changePositions();
window.addEventListener("resize", () => {
  changePositions();
  // console.log("test");
});

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);
BTN_START.addEventListener("click", moveStart);
BTN_END.addEventListener("click", moveEnd);

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
let cards = document.querySelectorAll(".card");

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
