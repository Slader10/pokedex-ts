import { View } from "react-native";
import { DetailsScreenScreenNavigationProp } from "../../../App";
import useGetPokemonList from "../../hooks/useGetPokemonList";
import Loading from "../Loading";
import PokemonList from "./PokemonList";

const index = () => {
    const { pokemons, loading } = useGetPokemonList()

    return <View style={{ flex: 1 }}>
        <Loading loading={loading} />
        <PokemonList src={pokemons} />
    </View>
}

export default index;