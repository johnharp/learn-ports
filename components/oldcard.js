import { useRef } from "react";
import {
    Animated,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import COLORS from "../constants/colors";
import CardFront from "./cardfront";
import CardBack from "./cardback";

function OldCard({ portdata }) {
    const flipAnimation = useRef(new Animated.Value(0)).current;

    const startAnimation = () => {
        Animated.timing(flipAnimation, {
            toValue: 1,
            duration: 1000, // adjust the duration as needed
            useNativeDriver: true,
        }).start(() => {
            // Reset animation after it's done
            //flipAnimation.setValue(0);
        });
    };

    const interpolatedRotateAnimation = flipAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"],
    });

    return (
        <>
            {/* <CardBack portdata={portdata} /> */}
            <View style={styles.container}>
                <TouchableOpacity onPress={startAnimation}>
                    <Animated.View
                        style={[
                            styles.flipContainer,
                            {
                                transform: [
                                    { rotateY: interpolatedRotateAnimation },
                                ],
                            },
                        ]}
                    >
                        {/* Front face */}
                        <View style={[styles.flipCard, styles.flipCardFront]}>
                            <View style={styles.header}>
                                <Text style={styles.protocol}>
                                    {portdata.protocol}
                                </Text>
                                <Text style={styles.title}>
                                    {portdata.title}
                                </Text>
                                <View style={styles.divider}></View>
                            </View>
                        </View>
                        {/* Back face */}
                        <View style={[styles.flipCard, styles.flipCardBack]}>
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            </View>
            {/* <MaterialIcons name="flip" size={24} color="black" /> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    flipContainer: {
        width: 300,
        height: 300,
        perspective: 1000,
    },
    flipCard: {
        backgroundColor: COLORS.card,
        width: "100%",
        height: "100%",
        borderRadius: 15,
        padding: 16,
        backfaceVisibility: "hidden",
        position: "absolute",
    },
    flipCardFront: {
        justifyContent: "center",
        alignItems: "center",
    },
    flipCardBack: {
        backgroundColor: "#00f",
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

export default OldCard;
