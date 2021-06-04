import PokemonList from "./PokemonList";

export interface PokemonModel{
  
    id: number;
    name: string;
    height:number;
    weight: number;
    abilities:[];
    imgURL: string;
    specie: string;
    moves:[];

}

export interface PokemonModelList{
pokemon?: PokemonModel[];
}

