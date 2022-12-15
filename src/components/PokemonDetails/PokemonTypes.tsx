import { StyleSheet, Text, View } from "react-native"
import { Type } from "../../interfaces/pokemonInterface";
import fonts from "../../theme/fonts";

interface PokemonTypePropsInterface {
    PokemonTypes?: Type[]
}

const PokemonTypes = ({ PokemonTypes }: PokemonTypePropsInterface) => {
    return <View style={styles.container}>
        {
            PokemonTypes?.map((x,i) => {
                return <Text style={styles.type} key={`pokemon-type-${i}`}>{x.type.name}</Text>
            })
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"        
    },
    type: {
        textTransform: "capitalize",
        fontSize: fonts.types
    }
});
export default PokemonTypes