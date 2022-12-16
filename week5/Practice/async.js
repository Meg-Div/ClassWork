const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon");
const jsonData = await pokemonData.json();
//fetch allows you to make an https request

const getPoke = async () => {
  //when you want to have await, you need to use async
  const body = document.getElementsByTagName("body")[0];

  const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon");

  const json = await pokemonData.json();

  console.log(json.results);

  json.results.forEach((pokemon) => {
    const header = document.createElement("h2");
    header.innerText = pokemon.name;
    body.append(header);
  });
};

//don't put async requests in loops
//Promise - same cycle
//Settimeout - next cycle

//A promise is a data type used for async data in the world
//When fetch data, a promise comes back, need to await that

//Client side JS - website up and running
//Server side JS - run with node
//.then  - promise chaining
