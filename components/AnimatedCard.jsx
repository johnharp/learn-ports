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

function AnimatedCard({ width, height, front, back }) {
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
        <Pressable
            style={[styles.pressable, { width: width, height: height }]}
            onPress={handleFlip}
        >
            {({ pressed }) => (
                <View
                    style={[
                        styles.cardContainer,
                        { width: width, height: height },
                    ]}
                >
                    <Animated.View
                        style={[
                            styles.card,
                            styles.front,
                            { opacity: pressed ? 0.75 : 1.0 },
                            {
                                transform: [
                                    { perspective: 1000 },
                                    { rotateY: frontCardDegrees },
                                ],
                            },
                        ]}
                    >
                        {front}
                    </Animated.View>
                    <Animated.View
                        style={[
                            styles.card,
                            styles.back,
                            { opacity: pressed ? 0.75 : 1.0 },
                            {
                                transform: [
                                    { perspective: 1000 },
                                    { rotateY: backCardDegrees },
                                ],
                            },
                        ]}
                    >
                        {back}
                    </Animated.View>
                </View>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressable: {
        alignContent: "center",
        justifyContent: "center",
    },

    cardContainer: {
        perspective: 50,
        alignContent: "center",
        justifyContent: "center",
    },

    card: {
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 15,
        padding: 16,
        backfaceVisibility: "hidden",
        position: "absolute",
        width: "100%",
        height: "100%",
    },

    front: {
        backgroundColor: COLORS.cardFront,
        alignContent: "center",
        justifyContent: "center",
    },

    back: {
        backgroundColor: COLORS.cardBack,
        alignContent: "center",
        justifyContent: "center",
    },
});
export default AnimatedCard;
