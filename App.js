import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import COLORS from "./constants/colors";
import PORTS from "./constants/ports";
import AnimatedCard from "./components/AnimatedCard";
import ProtocolDescription from "./components/ProtocolDescription";
import PortDescription from "./components/PortDescription";
import QuestionButton from "./components/QuestionButton";
import CorrectButton from "./components/CorrectButton";
import IncorrectButton from "./components/IncorrectButton";

export default function App() {
    const [portData, setPortData] = useState(PORTS[0]);

    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * PORTS.length);
        setPortData(PORTS[randomIndex]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <AnimatedCard
                width={300}
                height={375}
                front={<ProtocolDescription portdata={portData} />}
                back={<PortDescription portdata={portData} />}
            />
            <View
                style={{
                    padding: 16,
                    width: "300",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <CorrectButton />
                <IncorrectButton />
            </View>
            <View style={{ padding: 16 }}>
                <QuestionButton onPress={handleRandom} />
            </View>
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
