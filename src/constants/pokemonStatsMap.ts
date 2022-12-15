interface PokemonStatsMapItemInterface {
    label: string,
    color: string
}

interface PokemonStatsMapInterface {
    [key: string]: PokemonStatsMapItemInterface
}


const pokemonStatsMap: PokemonStatsMapInterface = {
    hp: {
        label: "hp",
        color: ""
    },
    attack: {
        label: "atk",
        color: ""
    },
    defense: {
        label: "def",
        color: ""
    },
    "special-attack": {
        label: "sp. atk",
        color: ""
    },
    "special-defense": {
        label: "sp. def",
        color: ""
    },
    speed: {
        label: "speed",
        color: ""
    }
}

export default pokemonStatsMap