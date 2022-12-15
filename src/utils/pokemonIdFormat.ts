

const pokemonIdFormat = (pokemonId: number | null): string => {
    const maxLenght: number = 3
    const missingDigits: number = pokemonId ? maxLenght - pokemonId.toString().length : maxLenght
    let pokemonIdFormat: string = "#"
    if (missingDigits > 0) {
        for (let index: number = 0; index < missingDigits; index++) {
            pokemonIdFormat += "0"
        }
    }
    return pokemonIdFormat + pokemonId
}

export default pokemonIdFormat