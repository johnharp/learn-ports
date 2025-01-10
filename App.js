import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import OldCard from "./components/oldcard";
import COLORS from "./constants/colors";
import PORTS from "./constants/ports";
import Card from "./components/card";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Card portdata={PORTS.find(p => p.protocol === "FTPS (Control)")} />
            <OldCard portdata={PORTS.find(p => p.protocol === "FTPS (Control)")} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
    },
});
