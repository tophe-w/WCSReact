import { useState } from "react";
import "./App.css";
// import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrecedent = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickSuivant = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const selectedPokemon = pokemonList[pokemonIndex];
  return (
    <div>
      <PokemonCard pokemon={selectedPokemon} />
      {pokemonIndex > 0 && (
        <button onClick={handleClickPrecedent}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickSuivant}>Suivant</button>
      )}
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
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
