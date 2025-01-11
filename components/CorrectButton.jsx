import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

function CorrectButton({ onPress }) {
    return (
        <FontAwesome.Button
            name="check"
            backgroundColor="green"
            onPress={onPress}
            pressableStyle={styles.pressable}
        >
            Known
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
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
});

export default CorrectButton;
