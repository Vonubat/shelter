"use strict";
// Global environment

const PETS = [
  {
    name: "Jennifer",
    img: "../../assets/img/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
  },
  {
    name: "Sophia",
    img: "../../assets/img/pets-sofia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: "parvovirus",
    diseases: "none",
    parasites: "none",
  },
  {
    name: "Woody",
    img: "../../assets/img/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: "adenovirus, distemper",
    diseases: "right back leg mobility reduced",
    parasites: "none",
  },
  {
    name: "Scarlett",
    img: "../../assets/img/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: "parainfluenza",
    diseases: "none",
    parasites: "none",
  },
  {
    name: "Katrine",
    img: "../../assets/img/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: "panleukopenia",
    diseases: "none",
    parasites: "none",
  },
  {
    name: "Timmy",
    img: "../../assets/img/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: "calicivirus, viral rhinotracheitis",
    diseases: "kidney stones",
    parasites: "none",
  },
  {
    name: "Freddie",
    img: "../../assets/img/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: "rabies",
    diseases: "none",
    parasites: "none",
  },
  {
    name: "Charly",
    img: "../../assets/img/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: "bordetella bronchiseptica, leptospirosis",
    diseases: "deafness, blindness",
    parasites: "lice, fleas",
  },
];

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
let CARDS = document.querySelectorAll(".card");

function randomizeCards(sideNames, sideImgs) {
  let uniqueNumber = 0;
  let tempPETS = PETS.slice();

  for (let i = 0; i < 3; ) {
    uniqueNumber = Math.floor(Math.random() * (tempPETS.length - 1));
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

    CARDS = document.querySelectorAll(".card");
    for (const card of CARDS) {
      card.addEventListener("click", openModalWindow);
    }
  });
}

// Popup

const CLOSE_BTN = document.querySelector("#close-btn");
const MODAL_WINDOW = document.querySelector(
  "#pets > div > div.modal-window-container"
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
MODAL_WINDOW.addEventListener("mouseout", (event) => {
  if (event.currentTarget === MODAL_WINDOW) {
    CLOSE_BTN.style.backgroundImage =
      "url(../../assets/icons/modal_close_button-hover.png)";
  }
});
MODAL_WINDOW.addEventListener("mouseover", (event) => {
  if (event.currentTarget === MODAL_WINDOW) {
    CLOSE_BTN.style.backgroundImage =
      "url(../../assets/icons/modal_close_button.png)";
  }
});

// create first assocoation cards with modalWindows
for (const card of CARDS) {
  card.addEventListener("click", openModalWindow);
}
