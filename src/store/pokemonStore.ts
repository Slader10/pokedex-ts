import create from "zustand";
import { getPokemons } from "../api/simplePokedex";
import { PokemonStoreInterface } from "../interfaces/pokemonListInterface";

const pokemonStore = create<PokemonStoreInterface>()((set, get) => ({
    pokemons: [],
    loading: false,
    nextPage: "",
    error: false,
    getPokemons: async (url: string) => {
        set((state) => ({ loading: true, error: false }))
        try {
            const res = await getPokemons(url)
            const prevList = get().pokemons
            const newList = [...prevList, ...res.data.results]
            set((state) => ({ loading: false, pokemons: newList, nextPage: res.data.next, error: false }))
        } catch (error) {
            set((state) => ({ loading: false, error: true }))
        }
    },
}))


export default pokemonStore