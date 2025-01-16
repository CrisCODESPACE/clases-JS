const cardArray = [
  {
    name: "bulbasaur",
    img: "img/bulbasaur.jpg",
  },
  {
    name: "bulbasaur",
    img: "img/bulbasaur.jpg",
  },
  {
    name: "charmander",
    img: "img/charmander.jpg",
  },
  {
    name: "charmander",
    img: "img/charmander.jpg",
  },
  {
    name: "pikachu",
    img: "img/pikachu.jpg",
  },
  {
    name: "pikachu",
    img: "img/pikachu.jpg",
  },
  {
    name: "psyduck",
    img: "img/psyduck.jpg",
  },
  {
    name: "psyduck",
    img: "img/psyduck.jpg",
  },
  {
    name: "slowpoke",
    img: "img/slowpoke.jpg",
  },
  {
    name: "slowpoke",
    img: "img/slowpoke.jpg",
  },
  {
    name: "squirtle",
    img: "img/squirtle.jpg",
  },
  {
    name: "squirtle",
    img: "img/squirtle.jpg",
  },
];

//randomizador de posiciones de las cards
cardArray.sort(() => 0.5 - Math.random());

console.log(cardArray);

const grid = document.querySelector(".grid");
const alerts = document.querySelector(".alert");
const resultDisplay = document.getElementById("result");

let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];

// creación del tablero

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "img/OIP.jpg");
    card.setAttribute("data-id", i);

    card.addEventListener("click", flipCard);

    grid.appendChild(card);
  }
}

createBoard();

// crear función que le de la vuelta a las cartas

function flipCard() {
  console.log(cardArray);
  //   console.log("clicked");

  let cardId = this.getAttribute("data-id");

  //   console.log(cardId);

  //   console.log(cardArray[cardId].name)

  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);

  console.log(cardChosenId);
  console.log(cardChosen);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// funcion para comprobar coincidencias

function checkMatch() {
  let cards = document.querySelectorAll("img");

  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1];

  //   if (optionOneId === optionTwoId) {
  //     console.log("Has clickado dos veces en la misma card");
  //   }

  if (cardChosen[0] === cardChosen[1] && optionOneId !== optionTwoId) {
    console.log("Has encontrado una pareja");
    // cardChosen[0].setAttribute("src", "img/OIP.jpg");
    // cardChosen[1].setAttribute("src", "img/OIP.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardChosen);
    console.log(cardsWon);
  } else {
    cards[optionOneId].setAttribute("src", "img/OIP.jpg");
    cards[optionTwoId].setAttribute("src", "img/OIP.jpg");

    console.log("Prueba de nuevo");
  }

  cardChosen = [];
  cardChosenId = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    console.log("Enhorabuena, has encontrado todas las parejas");
    alerts.textContent = "Enhorabuena, has encontrado todas las parejas";
  }
}
