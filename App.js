import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import COLORS from "./constants/colors";
import PORTS from "./constants/ports";
import AnimatedCard from "./components/AnimatedCard";
import ProtocolDescription from "./components/ProtocolDescription";
import PortDescription from "./components/PortDescription";

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
                <Text> Howdy! </Text>
                <AnimatedCard
                    width={300}
                    height={375}
                    front={<ProtocolDescription portdata={PORTS[16]}  />}
                    back={<PortDescription portdata={PORTS[16]} />}
                />
            {/* <Card
                portdata={PORTS.find((p) => p.protocol === "FTPS (Control)")}
            /> */}
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
