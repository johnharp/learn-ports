import { View, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";
import CardFront from "./cardfront";
import CardBack from "./cardback";

function Card({ portdata }) {
    return (
        <>
            <CardFront portdata={portdata} />
            <CardBack portdata={portdata} />
        </>
    );
}

const styles = StyleSheet.create({

});

export default Card;
