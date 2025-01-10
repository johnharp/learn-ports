import { StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

function Port({portdata}) {
    return <View style={styles.container}>
        <Text style={styles.portNumber}>{portdata.port}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },

    portNumber: {
        fontSize: 40,
        fontWeight: "bold",
        color: COLORS.text,
        textAlign: "center",
    }
});

export default Port;