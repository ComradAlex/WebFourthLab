import addName from './information.js';
import getPokemonInfo from './pokemon.js';
const url = 'https://pokeapi.co/api/v2/pokemon/slowpoke/';
function addPokemon() {
    return getPokemonInfo(url);
    }
    onload = function loadPage() {
document.getElementById("homeTab").onclick=addName; 
document.getElementById("pokemonTab").onclick=addPokemon;
addName();
   }
