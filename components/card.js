import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

function Card() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    }

    return (
        <Pressable style={styles.container} onPress={handleFlip}>
            {({ pressed }) => (
                <View style={styles.cardContainer}>
                    <View style={[styles.card, styles.front, {opacity: pressed ? 0.5 : 1.0}, !isFlipped && styles.flip]}>
                        <Text>Front</Text>
                    </View>
                    <View style={[styles.card, styles.back, {opacity: pressed ? 0.5 : 1.0}, isFlipped && styles.flip]}>
                        <Text>Back</Text>
                    </View>
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
        perspective: 1000,
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
});
export default Card;
