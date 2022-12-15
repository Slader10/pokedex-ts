interface PokemonInterface {
    name: string
    url: string
}

interface PokemonStoreInterface {
    pokemons: PokemonInterface[];
    loading: boolean;
    nextPage: string;
    error: boolean;
    getPokemons: (url: string) => any;
}

interface PokemonLisAPICalltInterface {
   limit: number;
   offset?: number
}

interface PokemonLisAPIResponsetInterface {
    count: number;
    next: string;
    previous?: any;
    results: PokemonInterface[];
}


export  {
    PokemonStoreInterface,
    PokemonInterface,
    PokemonLisAPICalltInterface,
    PokemonLisAPIResponsetInterface
}