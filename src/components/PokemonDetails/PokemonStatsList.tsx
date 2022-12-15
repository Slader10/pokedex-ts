import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native"
import pokemonStatsMap from "../../constants/pokemonStatsMap"
import { Stat } from "../../interfaces/pokemonInterface"
import fonts from "../../theme/fonts"
import StatsBarContainer from "../StatsBar";
const width = Dimensions.get("screen").width;

interface PokemonStatsItemInterface {
    stats: Stat
}

const PokemonStatsList = ({ stats }: PokemonStatsItemInterface) => {

    return <View style={styels.container}>
        <Text style={styels.label}>{pokemonStatsMap[stats.stat.name].label}</Text>
        <StatsBarContainer value={stats.base_stat} type={stats.stat.name} />
    </View>
}

const styels = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5
    },
    title: {
        fontSize: fonts.bigText,
        textAlign: "center"
    },
    label: {
        fontSize: fonts.label,
        textAlign: "center",
        textTransform: "uppercase",
    },
    progressBar: {
        width: "80%",
        height: 30
    }
})

export default PokemonStatsList