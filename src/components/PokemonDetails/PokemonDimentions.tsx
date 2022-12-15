import { StyleSheet, Text, View } from "react-native"
import fonts from "../../theme/fonts"

interface PokemonDimentionsInterface {
    weight?: number;
    height?: number
}

const PokemonDimentions = ({ weight, height }: PokemonDimentionsInterface) => {
    return <View style={styels.container}>
        <View>
            <Text style={styels.vallue}>{weight} KG</Text>
            <Text style={styels.label}>Wehight</Text>
        </View>
        <View>
            <Text style={styels.vallue}>{height} M</Text>
            <Text style={styels.label}>Height</Text>
        </View>
    </View>
}

const styels = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20
    },
    vallue: {
        fontSize: fonts.bigText,
        textAlign: "center",
        marginBottom: 10
    },
    label: {
        fontSize: fonts.label,
        textAlign: "center",
    }
})

export default PokemonDimentions