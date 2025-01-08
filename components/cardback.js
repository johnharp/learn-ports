import { View, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";

function CardBack({portdata}) {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    {portdata.port}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 15,
        padding: 16,
        shadowColor: COLORS.shadow,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: 350,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        color: COLORS.text,
    },
});

export default CardBack;
