import { useEffect, useState } from "react";
import {
    Animated,
    Dimensions,
    Pressable,
    StyleSheet,
    useAnimatedValue,
    View,
} from "react-native";
import COLORS from "../constants/colors";

function AnimatedCard({ width, height, front, back }) {
    const screenHeight = Dimensions.get('window').height;
    const slideInStartingY = screenHeight/2 + height/2;

    const [isFlipped, setIsFlipped] = useState(false);
    const cardRotation = useAnimatedValue(0);
    const slideInY = useAnimatedValue(slideInStartingY);

    useEffect(() => {
        Animated.timing(slideInY, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true
        }).start(slideInY.setValue(slideInStartingY));
    }, [slideInY, front, back])

    useEffect(() => {
        setIsFlipped(false);
        cardRotation.setValue(0);

    }, [front, back])

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
                                    { translateY: slideInY },
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
                                    { translateY: slideInY },
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
        zIndex: 100,
    },

    cardContainer: {
        perspective: 50,
        alignContent: "center",
        justifyContent: "center",
        shadowColor: COLORS.shadow,
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.75,
    },

    card: {
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
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
