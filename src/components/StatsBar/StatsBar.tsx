import { StyleSheet, View, Dimensions } from "react-native"
import { StatsBarInterface } from ".";
import barColor from "../../theme/barColors";
import colors from "../../theme/colors"
import progressCalc from "../../utils/progressCalc";
const width = Dimensions.get("screen").width;
const maxValue = 300

const StatsBar = ({ type, value }: StatsBarInterface) => {
    return <View style={styles.container}>
        <View style={[styles.progressBar, { width: progressCalc(value), backgroundColor: barColor[type] }]} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.white,
        width: 230,
        height: 15,
        marginLeft: 15,
        position: "relative"
    },
    progressBar: {

    }
})

export default StatsBar