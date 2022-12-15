import { ScrollView, StyleSheet, Text, View } from "react-native"
import { PokemonDetailsInterface } from "../../interfaces"
import fonts from "../../theme/fonts";
import globalStyes from "../../theme/global";
import PokemonDimentions from "./PokemonDimentions";
import PokemonStatsContainer from "./PokemonStatsContainer";
import PokemonTypes from "./PokemonTypes";

interface PokemonDataInterface {
    data: PokemonDetailsInterface | null;
}

const PokemonData = ({ data }: PokemonDataInterface) => {
    return <ScrollView style={styles.container}>
        <Text style={styles.title}>{data?.name}</Text>
        <PokemonTypes PokemonTypes={data?.types} />
        <PokemonDimentions weight={data?.weight} height={data?.height} />
        <PokemonStatsContainer stats={data?.stats} />
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: globalStyes.paddingHorizontal
    },
    title: {
        textTransform: "capitalize",
        fontSize: fonts.title,
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center"
    },
    wightSizeContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
});
export default PokemonData