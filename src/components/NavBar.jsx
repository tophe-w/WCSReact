
import PropTypes from "prop-types";
function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
    const handleClickPrecedent = () => {
      setPokemonIndex(pokemonIndex - 1);
    };
    const handleClickSuivant = () => {
      setPokemonIndex(pokemonIndex + 1);
    };
  
    return (
      <div>
        {pokemonIndex > 0 && (
          <button onClick={handleClickPrecedent}>Précédent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleClickSuivant}>Suivant</button>
        )}
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