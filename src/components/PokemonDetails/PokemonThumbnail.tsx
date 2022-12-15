import { Image, ImageSourcePropType, StyleSheet, View, Dimensions, Text } from "react-native"
import thumnail from "../../theme/thumnail";
import pokemonImages from "../../utils/pokemonImages"
import pokemonTypesMapping from "../../constants/pokemonTypes";
import fonts from "../../theme/fonts";
import pokemonIdFormat from "../../utils/pokemonIdFormat";
const defaultImage: ImageSourcePropType = require('../../assets/pokemon/unown.png')
const screenWidth = Dimensions.get("screen").width;

interface PokemonThumbnailInterface {
    imgIndex: number;
    pokemonType?: string;
    pokemonId: number | null;
}

const PokemonThumbnail = ({ imgIndex, pokemonType, pokemonId }: PokemonThumbnailInterface) => {
    const image: ImageSourcePropType = pokemonImages[imgIndex] ? pokemonImages[imgIndex].image : defaultImage
    const typeColor = pokemonType ? pokemonTypesMapping.find(x => x.name == pokemonType)?.color : "black"
    return <View style={[styles.container, { backgroundColor: typeColor }]}>
        <Text style={styles.pokemonNumber}>{pokemonIdFormat(pokemonId)}</Text>
        <Image
            source={image}
            style={{ width: 100, height: 100 }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: "black",
        paddingTop: 80,
        paddingBottom: 60,
        borderBottomWidth: 1,
        borderBottomLeftRadius: thumnail.radius,
        borderBottomRightRadius: thumnail.radius,
    },
    pokemonNumber: {
        position: "absolute",
        top: 15,
        right: 15,
        fontSize: fonts.bigText
    }
});

export default PokemonThumbnail