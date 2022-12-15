import axios from 'axios';
import {  PokemonLisAPIResponsetInterface } from '../interfaces/pokemonListInterface';
import { PokemonDetailsInterface } from '../interfaces';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemons = async (url: string) => {
    return axios.get<PokemonLisAPIResponsetInterface>(url);
}

const getPokemonDetails = async (pokemonId: number) => {
    return axios.get<PokemonDetailsInterface>(`${baseUrl}${pokemonId}`);
}

export {
    getPokemons,
    getPokemonDetails
}

