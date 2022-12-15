import create from "zustand";
import { getPokemonDetails } from "../api/simplePokedex";
import { PokemonDetailsStoreInterface } from "../interfaces";

const pokemonDetailsStore = create<PokemonDetailsStoreInterface>()((set, get) => ({
    pokemonId: null,
    pokemonDetails: null,
    loading: false,
    error: false,
    getPokemonDetails: async (pokemonId: number) => {
        set((state) => ({ loading: true, error: false }))
        try {
            const res = await getPokemonDetails(pokemonId)
            set((state) => ({ loading: false, pokemonDetails: res.data, error: true }))
        } catch (error) {
            set((state) => ({ loading: false, error: true }))
        }
    },
}))


export default pokemonDetailsStore