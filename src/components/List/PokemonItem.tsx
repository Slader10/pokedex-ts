import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { DetailsScreenScreenNavigationProp } from "../../../App";
import { PokemonInterface } from "../../interfaces";
import colors from "../../theme/colors";
import PokemonSprite from "../PokemonSprite";
import pokemonIdFormat from "../../utils/pokemonIdFormat";
const screenWidth = Dimensions.get("screen").width;

const PokemonItem = ({ item, index }: { item: PokemonInterface, index: number }) => {
    const pokemonId = index + 1;
    const imgIndex = index;
    const navigation = useNavigation<DetailsScreenScreenNavigationProp>();
    const onPress = () => {
        navigation.navigate("DetailsScreen", { pokemonId: pokemonId });
    }

    return <TouchableOpacity style={styles.container} onPress={onPress}>
        <PokemonSprite imgIndex={imgIndex} />
        <Text style={styles.text}>{pokemonIdFormat(pokemonId)} - {item.name}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        backgroundColor: colors.primary,
        borderRightWidth: 1,
        borderRightColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth / 2,
    },
    text: {
        textTransform: "capitalize"
    }
});

export default PokemonItem