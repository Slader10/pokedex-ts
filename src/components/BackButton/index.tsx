import { StyleSheet, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { DetailsScreenScreenNavigationProp } from "../../../App";


const BackButton = () => {
    const navigation = useNavigation<DetailsScreenScreenNavigationProp>();
    const goBack = () => {
        navigation.goBack()
    }
    return <TouchableOpacity style={styles.button} onPress={goBack}>
        <Icon name="arrowleft" size={30} color="black" />
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    button: {
        top: 45,
        left: 15,
        zIndex: 999
    },
});

export default BackButton