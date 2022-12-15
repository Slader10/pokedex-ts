import { FlatList, StyleSheet, Text, View } from "react-native"
import { Stat } from "../../interfaces/pokemonInterface"
import fonts from "../../theme/fonts"
import PokemonStatsList from "./PokemonStatsList"

interface PokemonStatsInterface {
    stats?: Stat[]
}

const PokemonStats = ({ stats }: PokemonStatsInterface) => {
    return <View style={styels.container}>
        <Text style={styels.title}>Base Stats</Text>
        <View style={{marginTop: 15}}>
            {
                stats?.map((x, i) => <PokemonStatsList key={`pokemon-stats-${i}`}
                    stats={x}
                />)
            }
        </View>
    </View>
}

const styels = StyleSheet.create({
    container: {
        marginTop: 20
    },
    title: {
        fontSize: fonts.bigText,
        textAlign: "center"
    },
    label: {
        fontSize: fonts.label,
        textAlign: "center",
    },
})

export default PokemonStats