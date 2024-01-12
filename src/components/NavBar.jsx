import PropTypes from "prop-types";
function NavBar({ setPokemonIndex, pokemonList }) {
  const handleClick = (e, pokemonIndex) => {
    e.preventDefault();
    setPokemonIndex(pokemonIndex);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          name={pokemon.name}
          key={pokemon.name}
          onClick={(e) => handleClick(e, index)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,

  setPokemonIndex: PropTypes.func.isRequired,

  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,

      imgSrc: PropTypes.string,
    })
  ).isRequired,
};
export default NavBar;
