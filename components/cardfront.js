import { View, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";

function CardFront({portdata}) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.protocol}>{portdata.protocol}</Text>
                <Text style={styles.title}>{portdata.title}</Text>
            </View>
            <View style={styles.divider}></View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.text}>
                    {portdata.description}
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
        alignItems: "left",
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
        borderBottomWidth: 1,
        borderColor: COLORS.border,
        width: "100%",
    },
    content: {
        alignItems: "left",
        flex: 1,
    },
    text: {
        fontSize: 17,
        color: COLORS.text,
        textAlign: "left",
    },
    foldedCorner: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 20,
        height: 20,
        backgroundColor: COLORS.card,
        transform: [{ rotate: '45deg' }],
        overflow: 'hidden',
      },
});

export default CardFront;
