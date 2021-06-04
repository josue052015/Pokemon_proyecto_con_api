import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { PokemonModel } from "./pokemon.model";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { urlDetails } from "../utils/endpoints";

export default function PokeDetails() {
    const { pokemonName }: any = useParams();
    const [pokeName, setPokename] = useState<PokemonModel>();
    useEffect(() => {
        fetch(urlDetails + pokemonName)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setPokename(result)
                }
            )
    }, [])

    return (
        <>
            <h1>{pokeName?.name}</h1>
            <div className="centered">
            <div >
                <ReactHTMLTableToExcel id="btnExportExcel" className="btn btn-success" table="Poketable"
                    filename="Datos" sheet="pagina1" buttonText="Download" 
                /> 
                <a href="/" className = "badge badge-primary">BACK</a>
            </div>
                <div className="table-wrapper">
                    <table className="table" id="Poketable">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>HEIGHT</th>
                                <th>WEIGHT</th>
                                <th>ABILITIES</th>
                                <th>IMAGE</th>
                                <th>SPECIE</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{pokeName?.id}</td>
                                <td>{pokeName?.name}</td>
                                <td>{pokeName?.height}</td>
                                <td>{pokeName?.weight}</td>
                                <td>{pokeName?.abilities.map((hab) => {
                                    return <li className="list-group-item" key={hab}>{hab}</li>
                                })}</td>
                                <td> <img src={pokeName?.imgURL} alt="img" /> </td>
                                <td>{pokeName?.specie} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )
}