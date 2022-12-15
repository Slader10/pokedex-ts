import { ScrollView, StyleSheet, Text, View } from "react-native"
import useGetPokemonData from "../../hooks/useGetPokemonData"
import globalStyes from "../../theme/global";
import BackButton from "../BackButton";
import Loading from "../Loading";
import PokemonData from "./PokemonData";
import PokemonThumbnail from "./PokemonThumbnail"

interface pokemonDetailsPropsInterface {
    pokemonId: number | null;
}

const PokemonDetails = ({ pokemonId }: pokemonDetailsPropsInterface) => {
    const { loading, pokemonDetails } = useGetPokemonData(pokemonId)
    const imgIndex = pokemonId ? pokemonId - 1 : -1
    if (loading) {
        return <Loading loading={loading} />
    }
    return <View style={styles.container}>
        <BackButton />
        <PokemonThumbnail imgIndex={imgIndex}
            pokemonType={pokemonDetails?.types[0].type.name}
            pokemonId={pokemonId}
        />
        <PokemonData data={pokemonDetails} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
});

export default PokemonDetails