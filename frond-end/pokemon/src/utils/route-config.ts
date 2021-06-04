import PokeDetails from "../pokemon/PokeDetails";
import ShowListPokemon from "../pokemon/ShowListPokemon";


const routes = [
    {path: '/', component: ShowListPokemon, exact: true },
    {path: '/PokeDetails/:pokemonName', component: PokeDetails, exact: true},

];

export default routes;