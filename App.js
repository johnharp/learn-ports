import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/card";
import COLORS from "./constants/colors";
import PORTS from "./constants/ports";

export default function App() {
    return (
        <View style={styles.container}>
            <Card portdata={PORTS.find(p => p.protocol === "FTPS (Control)")} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
    },
});
