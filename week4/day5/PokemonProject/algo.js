//Create an h1,h2,two h3 and one img element
//Create a card to hold the information
//Flip the card's image to the back image on click

const listOfPokemon = [
  {
    name: "Gengar",
    hp: 220,
    move1: "ShadowBall",
    move2: "Curse",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    gengarBack:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
  },
  {
    name: "MilTank",
    hp: 300,
    move1: "Rollout",
    move2: "BodySlam",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    miltankBack:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/241.png",
  },
  {
    name: "Garchomp",
    hp: 200,
    move1: "HyperBeam",
    move2: "Eathquake",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    garchompBack:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/445.png",
  },
  {
    name: "Swampert",
    hp: 190,
    move1: "hydropump",
    move2: "mudshot",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    swampertBack:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/260.png",
  },
  {
    name: "Phanpy",
    hp: 120,
    move1: "playrough",
    move2: "tackle",
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    phanpyBack:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/231.png",
  },
];

const megsContainer = document.getElementsByClassName("mainContainer")[0];

for (const poke of listOfPokemon) {
  //card to hold each pokemon's info
  const card = document.createElement("card");
  card.className = "card";

  const nom = document.createElement("h1");
  nom.innerText = poke["name"];

  const hp = document.createElement("h2");
  hp.innerText = poke["hp"];

  const move1 = document.createElement("h3");
  move1.innerText = poke["move1"];

  const move2 = document.createElement("h3");
  move2.innerText = poke["move2"];

  //two below picture elements switch with click
  const front = document.createElement("img");
  front.src = poke["picture"];

  const back = document.createElement("img");
  back.src = poke[poke["name"].toLocaleLowerCase() + "Back"];

  //an element is created to always hold the current picture
  const currentPic = document.createElement("img");
  currentPic.className = poke["name"];

  //starts out as front picture
  currentPic.src = front.src;
  currentPic.addEventListener(
    "click",
    () => (
      //on click everything is flipped
      (currentPic.src = back.src),
      (back.src = front.src),
      (front.src = currentPic.src)
    )
  );

  card.append(nom, hp, move1, move2, currentPic);

  megsContainer.append(card);
}
