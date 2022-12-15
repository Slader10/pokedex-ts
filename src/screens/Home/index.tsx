import { SafeAreaView, View } from "react-native"
import PokemonList from "../../components/List"
import { DetailsScreenScreenNavigationProp } from "../../../App"

const HomeScreen = ({ ...props }) => {
    
    return <SafeAreaView style={{ flex: 1 }}>
        <PokemonList />
    </SafeAreaView>
}

export default HomeScreen