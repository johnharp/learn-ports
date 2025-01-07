import { View, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";

function Card() {
    return <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        TITLE
                    </Text>
                    <Text style={styles.subtitle}>
                        Subtitle
                    </Text>
                </View>
                 
                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.text}>
                        Description
                    </Text>
                </View>
    </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    subtitle: {
        fontSize: 24,
        color: COLORS.text,
        marginTop: 10,
    },
    content: {
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        color: COLORS.text,
        textAlign: 'center',
    },
});

export default Card;