import { FlatList, View } from "react-native"
import pokemonStore from "../../store/pokemonStore"
import { PokemonInterface } from "../../interfaces"
import PokemonItem from "./PokemonItem"
import { DetailsScreenScreenNavigationProp } from "../../../App"

const PokemonList = ({ src }: { src: PokemonInterface[] }) => {
    const { nextPage, getPokemons } = pokemonStore()
    const loadNextPageData = () => {
        if (nextPage) {
            getPokemons(nextPage);
        }
    };

    return <FlatList data={src}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'flex-start' }}
        renderItem={({ item, index }) => <PokemonItem item={item} index={index} />}
        onEndReached={loadNextPageData}
    />
}

export default PokemonList