import { useState } from "react";
import {
    Animated,
    Easing,
    Pressable,
    StyleSheet,
    Text,
    useAnimatedValue,
    View,
} from "react-native";
import COLORS from "../constants/colors";

function Card({ portdata }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const cardRotation = useAnimatedValue(0);

    const frontCardDegrees = cardRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"],
    });

    const backCardDegrees = cardRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ["180deg", "360deg"],
    });

    const handleFlip = () => {
        if (isFlipped) {
            Animated.timing(cardRotation, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
            }).start(() => setIsFlipped(false));
        } else {
            Animated.timing(cardRotation, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }).start(() => setIsFlipped(true));
        }
    };

    return (
        <Pressable style={styles.container} onPress={handleFlip}>
            {({ pressed }) => (
                <View style={styles.cardContainer}>
                    <Animated.View
                        style={[
                            styles.card,
                            styles.front,
                            { opacity: pressed ? 0.75 : 1.0 },
                            { transform: [{perspective: 1000}, { rotateY: frontCardDegrees } ] },
                        ]}
                    >
                        <View style={styles.header}>
                            <Text style={styles.protocol}>
                                {portdata.protocol}
                            </Text>
                            <Text style={styles.title}>{portdata.title}</Text>
                            <View style={styles.divider}></View>
                        </View>
                    </Animated.View>
                    <Animated.View
                        style={[
                            styles.card,
                            styles.back,
                            { opacity: pressed ? 0.75 : 1.0 },
                            { transform: [{perspective: 1000}, { rotateY: backCardDegrees } ] },
                        ]}
                    >
                        <Text>Back</Text>
                    </Animated.View>
                </View>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },

    cardContainer: {
        width: 300,
        height: 300,
        perspective: 100,
    },

    card: {
        borderRadius: 15,
        padding: 16,
        backfaceVisibility: "hidden",
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    front: {
        backgroundColor: COLORS.cardFront,
    },

    back: {
        backgroundColor: COLORS.cardBack,
    },

    flip: {
        transform: [{ rotateY: "180deg" }],
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
});
export default Card;
