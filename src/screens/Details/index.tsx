import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, View } from "react-native"
import { RootStackParamList } from "../../../App";
import PokemonDetails from "../../components/PokemonDetails"

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;


const DetailsScreen = ({ route }: Props) => {

    return <SafeAreaView style={{ flex: 1 }}>
        <PokemonDetails pokemonId={route.params.pokemonId} />
    </SafeAreaView>
}

export default DetailsScreen