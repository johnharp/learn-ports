import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

function QuestionButton({ onPress }) {
    return (
        <FontAwesome.Button
            name="random"
            backgroundColor={COLORS.primary}
            onPress={onPress}
            pressableStyle={styles.pressable}
        >
            Random
        </FontAwesome.Button>
    );
}

const styles = StyleSheet.create({
    pressable: {
        opacity: 0.75,
    },

    container: {
        alignContent: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        backgroundColor: COLORS.secondary,
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
});

export default QuestionButton;
