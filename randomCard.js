const products = ["Video juego", "Carro", "bicicleta", "Perro"];

const adj = ["Grandioso", "barato", "Bonito", "en oferta"];

const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const pintas = ["♦", "♥", "♠", "♣"];
let randomPinta = "♦";
function generateRandomTitle() {
  let randomProduct = products[Math.round(Math.random() * products.length + 1)];
  let randomAdj = adj[Math.round(Math.random() * adj.length + 1)];
  return `${randomAdj} ${randomProduct}`;
}

function generateRandomImg() {
  let randomId = Math.round(Math.random() * 100 + 1);
  return `https://picsum.photos/id/${randomId}/200/300`;
}

let card = document.getElementById("card");

// Aplicamos estilos al card
card.style.padding = "5vw";
card.style.borderRadius = "10px";
card.style.border = "1px solid black";
card.style.height = "300px";
card.style.width = "60vw"; // View Width
card.style.backgroundColor = "white";

let imgElement = document.createElement("img"); // <img/>

console.log(generateRandomImg());
imgElement.src = generateRandomImg();

let titleContent = "♥";

// Este va arriba
let cardTitleUp = document.createElement("h4");
cardTitleUp.innerHTML = randomPinta;
if (randomPinta === "♦") {
  cardTitleUp.style.color = "red";
}
// Este va abajo
let cardTitleDown = document.createElement("h4");
cardTitleDown.innerHTML = randomPinta;
cardTitleDown.style.transform = "rotate(180deg)";

// Icono superior
card.appendChild(cardTitleUp);

// Anexamos la imagen
card.appendChild(imgElement);

// Icono inferior
card.appendChild(cardTitleDown);
