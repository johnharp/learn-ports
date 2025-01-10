import { StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

function ProtocolDescription({ portdata }) {
    const { protocol, title, description } = portdata;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.protocol}>{protocol}</Text>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.divider}></View>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 1,
    },
    protocol: {
        fontSize: 30,
        fontWeight: "bold",
        color: COLORS.text,
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        color: COLORS.text,
    },
    divider: {
        borderTopWidth: 1,
        borderColor: COLORS.border,
        width: "100%",
        paddingBottom: 10,
    },
    description: {
    },
});

export default ProtocolDescription;
