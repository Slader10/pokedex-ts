import { Image, ImageSourcePropType } from "react-native"
import pokemonImages from "../../utils/pokemonImages"
const defaultImage: ImageSourcePropType = require('../../assets/pokemon/unown.png')

const PokemonSprite = ({ imgIndex }: { imgIndex: number }) => {
    const image: ImageSourcePropType = pokemonImages[imgIndex] ? pokemonImages[imgIndex].image : defaultImage
    return <Image
        source={image}
        style={{ width: 100, height: 100 }}
    />
}

export default PokemonSprite