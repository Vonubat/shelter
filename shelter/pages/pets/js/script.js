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
  "-1200px",
  "-2400px",
  "-3600px",
  "-4800px",
  "-6000px",
];

function randomizeCards(CARDS_CONTAINERS) {
  for (let i = 0; i < 6; i++) {
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

randomizeCards(CARDS_CONTAINERS);

const moveStart = () => {
  counter = 1;
  pageNumber.innerHTML = counter;

  for (const cardContainer of CARDS_CONTAINERS) {
    cardContainer.style.left = positions[1];
  }

  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_START.removeEventListener("click", moveStart);
  BTN_END.removeEventListener("click", moveEnd);
};

const moveEnd = () => {
  counter = 6;
  pageNumber.innerHTML = counter;

  for (const cardContainer of CARDS_CONTAINERS) {
    cardContainer.style.left = positions[6];
  }

  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_START.removeEventListener("click", moveStart);
  BTN_END.removeEventListener("click", moveEnd);
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
  if (counter == 6) {
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

    if (counter !== 1 || counter !== 6) {
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
    if (counter == 6) {
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
  if (event.currentTarget === BTN_RIGHT && counter !== 6) {
    BTN_RIGHT.style.backgroundColor = "#f1cdb3";
  }
});

BTN_RIGHT.addEventListener("mouseout", (event) => {
  if (event.currentTarget === BTN_RIGHT) {
    BTN_RIGHT.style.backgroundColor = "#f6f6f6";
  }
});

BTN_END.addEventListener("mouseover", (event) => {
  if (event.currentTarget === BTN_END && counter !== 6) {
    BTN_END.style.backgroundColor = "#f1cdb3";
  }
});

BTN_END.addEventListener("mouseout", (event) => {
  if (event.currentTarget === BTN_END) {
    BTN_END.style.backgroundColor = "#f6f6f6";
  }
});

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);
BTN_START.addEventListener("click", moveStart);
BTN_END.addEventListener("click", moveEnd);
