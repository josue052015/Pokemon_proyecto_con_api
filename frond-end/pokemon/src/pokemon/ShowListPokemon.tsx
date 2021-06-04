import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { urlList } from "../utils/endpoints";

export default function ShowListPokemon() {


    const [pokemon, setPokemon] = useState([])
    const [filteredPoke, setFilteredPoke] = useState([]);

    const history = useHistory();

    const routeChange = (pokemonName: any) => {
        let path = `PokeDetails/${pokemonName}`;
        history.push(path);
    }

    useEffect(() => {

        fetch(urlList)
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemon(data.map((e: any) => { return e.name }));
                    setFilteredPoke(data.map((e: any) => { return e.name }))
                })


    }, [])

    const searchUpdate = (e: any) => {

        setFilteredPoke(pokemon.filter((c: any) => c.includes(e)));
    }



    return (
        <>
            <div className="list" id="container">
                
                <h1>Search pokemon</h1>
                <input className = "form-control" type="text" placeholder="Search" onChange={e => searchUpdate(e.target.value)} />
                <ul className = "PokeUL">
                    <li className = "list-group-item active">Pokemon</li>
                    {filteredPoke.map((name, idx) => (
                        <li className = "PokeLI" key={idx} onClick={() => routeChange(name)}>{name} </li>
                    ))}
                </ul>
            </div>
        </>
    )
}




