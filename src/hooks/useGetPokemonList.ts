import { useState, useEffect } from "react";
import { pokeapiDefaultListCall } from "../constants/pokeapi";
import pokemonStore from "../store/pokemonStore";

const useGetPokemonList = () => {
    const { pokemons, loading, getPokemons, nextPage } = pokemonStore()

    useEffect(() => {
        getPokemons(pokeapiDefaultListCall)
    }, [])

    return { pokemons, loading, nextPage }
}

export default useGetPokemonList