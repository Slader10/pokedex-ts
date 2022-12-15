import { useState, useEffect } from "react";
import { pokeapiDefaultListCall } from "../constants/pokeapi";
import pokemonDetailsStore from "../store/pokemonDetailsStore";
import { useNavigation } from '@react-navigation/native';

const useGetPokemonData = (pokemonId: number | null) => {
    const { } = useNavigation();
    const { pokemonDetails, loading, getPokemonDetails } = pokemonDetailsStore()

    useEffect(() => {
        if (pokemonId && pokemonDetails?.id != pokemonId) {
            const nPokemonId: number = pokemonId ? pokemonId : 0;
            getPokemonDetails(nPokemonId)
        }
    }, [pokemonId,pokemonDetails])

    return { pokemonDetails, loading, getPokemonDetails }
}

export default useGetPokemonData