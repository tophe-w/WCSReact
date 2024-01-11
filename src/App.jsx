import { useState } from "react";
import "./App.css";
// import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  
  
  const selectedPokemon = pokemonList[1];
  return (
    <div>
      <button onClick={handleClick}>CLick!</button>
      <p>{count}</p>
      {/* <MyTitle /> */}
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "mew",
  },
];

export default App;
