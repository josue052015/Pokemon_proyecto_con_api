import PokemonList from "./PokemonList";

export interface PokemonModel{
  /*   id: number;
    name: string;
    power: string; */
    id: number;
    name: string;
    height:number;
    weight: number;
    abilities:[];
    moves:[];
}

export interface PokemonModelList{
pokemon?: PokemonModel[];
}

